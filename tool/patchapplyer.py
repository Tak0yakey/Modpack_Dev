import os
from copy import copy
os.chdir(f"{os.path.dirname(os.path.abspath(__file__))}/../pack")
os.environ.get("GITHUB_REF_NAME")
import json
with open("modrinth.index.json","r") as r:
    data = json.load(r)
downloads = data["files"]
def flag_popper(modlist:list[dict]):
    for mod in modlist:
        mod["env"].pop("axiom",None)
axiomized_downloads= [copy(m) for m in downloads if m["env"].get("axiom") != "remove"]
normal_downloads = [copy(m) for m in downloads if m["env"].get("axiom") != "add"]
flag_popper(axiomized_downloads)
flag_popper(normal_downloads)
(axiom_json := copy(data))["files"] = axiomized_downloads
(normal_json :=copy(data))["files"] = normal_downloads 
axiom_json["name"] = "NameisNull_axiom"
with open("axiom_modrinth.index.json","w") as r:
    json.dump(axiom_json,r,indent=4)
with open("normal_modrinth.index.json","w") as r:
    json.dump(normal_json,r,indent=4)