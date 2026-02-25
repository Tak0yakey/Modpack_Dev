import hashlib,os
from pathlib import Path
base_dir = os.path.dirname(os.path.abspath(__file__))
def hash_file(path: Path, chunk_size=1024 * 1024):
    sha1 = hashlib.sha1()
    sha512 = hashlib.sha512()

    with path.open("rb") as f:
        while chunk := f.read(chunk_size):
            sha1.update(chunk)
            sha512.update(chunk)

    return sha1.hexdigest(), sha512.hexdigest()

def hash_directory(dir_path: Path):
    for file_path in sorted(dir_path.rglob("*")):
        if file_path.is_file():
            sha1, sha512 = hash_file(file_path)
            print(f"{file_path}")
            print(f"  SHA1   : {sha1}")
            print(f"  SHA512 : {sha512}")
            print()

if __name__ == "__main__":
    target_dir = Path("./tmp/jar")  # ← ここを書き換え
    hash_directory(target_dir)