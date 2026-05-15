import os
import json
from copy import copy

os.chdir(f"{os.path.dirname(os.path.abspath(__file__))}/../pack")

with open("modrinth.index.json", "r") as r:
    data = json.load(r)

downloads = data["files"]
variant_flags = ("axiom", "minimum")


def make_variant(name: str, remove_flags: set[str], exclude_add_flags: set[str]):
    filtered = []
    for mod in downloads:
        env = mod.get("env", {})
        if any(env.get(flag) == "remove" for flag in remove_flags):
            continue
        if any(env.get(flag) == "add" for flag in exclude_add_flags):
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


make_variant("normal", remove_flags=set(), exclude_add_flags={"axiom", "minimum"})
make_variant("axiom", remove_flags={"axiom"}, exclude_add_flags={"minimum"})
make_variant("minimum", remove_flags={"minimum"}, exclude_add_flags={"axiom"})
