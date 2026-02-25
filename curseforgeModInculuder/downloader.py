import shutil
from binascii import Error
import time
import pprint
import hashlib
import os,json,requests,json
from pathlib import Path
from urllib.parse import unquote
def hash_file(path: Path, chunk_size=1024 * 1024):
    sha1 = hashlib.sha1()
    sha512 = hashlib.sha512()

    with path.open("rb") as f:
        while chunk := f.read(chunk_size):
            sha1.update(chunk)
            sha512.update(chunk)

    return sha1.hexdigest(), sha512.hexdigest()
base_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(base_dir)
path = input("enter path to modpack folder:")
os.system(f"unzip -o {path} -d ./tmp")
with open("tmp/manifest.json","r") as f:
    data = json.load(f)
jar = Path("./tmp/jar")
shutil.rmtree(jar)
jar.mkdir()
metas = []
for file in data["files"]:
    url = f"https://www.curseforge.com/api/v1/mods/{file['projectID']}/files/{file['fileID']}/download"
    print(f"Downloading:{url}")
    os.system(f"wget --trust-server-names -P ./tmp/jar {url}")
    src_path = Path("./tmp/jar")
    files = [f for f in src_path.iterdir() if f.is_file()]
    if len(files) != 1:
        print(f"エラー: フォルダ内にファイルが {len(files)} 個あります。1つである必要があります。")
        raise Exception("だめだにゃーん")
    target_file = files[0]
    meta_filename = f"{target_file.stem}.txt"
    hashed_data = hash_file(target_file)
    meta_data = {
        "downloads":[url],
        "env": {
            "client": "required",
            "server": "required"
        },
        "fileSize":target_file.stat().st_size,
        "hashes": {
            "sha1":hashed_data[0],
            "sha512":hashed_data[1]
        },
        "path": f"mods/{target_file.stem}.jar"
        }
    target_file.unlink()
    metas.append(meta_data)
    time.sleep(2)
with open("tmp/index.json","w")as fp:
    json.dump(metas,fp)