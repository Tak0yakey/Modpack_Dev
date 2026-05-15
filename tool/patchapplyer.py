import os
import json
from copy import copy

os.chdir(f"{os.path.dirname(os.path.abspath(__file__))}/../pack")
os.environ.get("GITHUB_REF_NAME")

with open("modrinth.index.json", "r") as r:
    data = json.load(r)

downloads = data["files"]
variant_flags = ("axiom", "minimum")


def make_variant(name: str, removes: set[str], adds: set[str]):
    filtered = []
    for mod in downloads:
        env = mod.get("env", {})
        if any(env.get(flag) == "remove" for flag in removes):
            continue
        if any(env.get(flag) == "add" for flag in adds):
            continue
        mod_copy = copy(mod)
        mod_env = copy(mod_copy.get("env", {}))
        for flag in variant_flags:
            mod_env.pop(flag, None)
        mod_copy["env"] = mod_env
        filtered.append(mod_copy)
    variant_json = copy(data)
    variant_json["files"] = filtered
    if name != "normal":
        variant_json["name"] = f"NameisNull_{name}"
    with open(f"{name}_modrinth.index.json", "w") as r:
        json.dump(variant_json, r, indent=4)


make_variant("normal", removes=set(), adds={"axiom", "minimum"})
make_variant("axiom", removes={"axiom"}, adds={"minimum"})
make_variant("minimum", removes={"minimum"}, adds={"axiom"})
