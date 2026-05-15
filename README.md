# Modpack_Dev
パソコンのスペックが足りない方へ:Distant Horizonsを抜いてください
 
### ==>>>[最新のModpackを入手](https://github.com/Tak0yakey/Modpack_Dev/releases/tag/latest)

## 軽量化用メモ（`pack/modrinth.index.json` から抽出）
`env.server = unsupported` の **client only** は以下の 41 件です。

- appliedsorting-neo-1.21.1-v1.0.0.jar
- AsyncParticles-3.4.0-beta.1+1.21.1.jar
- BadOptimizations-2.4.1-1.21.1.jar
- BetterF3-11.0.3-NeoForge-1.21.1.jar
- BetterPingDisplay-1.21.1-1.1.jar
- BetterThirdPerson-neoforge-1.9.0.jar
- bocchud-0.4.0+mc1.21.1.jar
- chloride-NEOFORGE-mc1.21.1-v1.7.5.jar
- Controlling-neoforge-1.21.1-19.0.5.jar
- createbetterfps-1.21.1-1.1.3.jar
- darkmodeeverywhere-1.21-1.3.5.jar
- emi_create_schematics-1.0.3.jar
- emixx-neoforge-1.2.3.jar
- entityculling-neoforge-1.9.5-mc1.21.1.jar
- EuphoriaPatcher-1.7.8-r5.6.1-neoforge.jar
- flerovium-neoforge-1.21.1-1.0.17-all.jar
- forgeshot-neoforge-1.21.1-2.0.jar
- fusion-1.2.12-neoforge-mc1.21.1.jar
- gnetum-3.3.1.jar
- InvMove-0.9.3+1.21.1-NeoForge.jar
- iris-neoforge-1.8.12+mc1.21.1.jar
- Ixeris-4.0.2+1.21.1-neoforge.jar
- keybindbundles-1.3.1.jar
- keybindspurger-1.21.x-neoforge-1.3.4.jar
- keymap-NeoForge-0.10.1-beta.1+1.21.1.jar
- mafglib-0.4.3+mc1.21.1.jar
- ModernUI-NeoForge-1.21.1-3.12.0.2-universal.jar
- MouseTweaks-neoforge-mc1.21-2.26.1.jar
- nolijium-0.5.6.jar
- oracle_index-neoforge-1.0.0.jar
- orthocamera-1.21.1-0.2.0.jar
- Pretty Rain-1.21.1-NeoForge-1.1.4.jar
- screenshot-to-clipboard-neoforge-1.0.10.jar
- Searchables-neoforge-1.21.1-1.0.2.jar
- smart_bounds-1.0.0.jar
- sodium-neoforge-0.6.13+mc1.21.1.jar
- sounds-2.4.22+lts+1.21.1-neoforge.jar
- toomanyrecipeviewers-0.7.1+mc.21.1.jar
- tweakerge-0.4.1+mc1.21.1.jar
- vanillin-neoforge-1.21.1-1.1.3.jar
- zume-1.2.1.jar

この中でも、**見た目/UI 影響寄り**（ゲーム進行への影響が比較的小さい）候補は以下です。

- AsyncParticles-3.4.0-beta.1+1.21.1.jar
- BetterF3-11.0.3-NeoForge-1.21.1.jar
- BetterPingDisplay-1.21.1-1.1.jar
- BetterThirdPerson-neoforge-1.9.0.jar
- bocchud-0.4.0+mc1.21.1.jar
- darkmodeeverywhere-1.21-1.3.5.jar
- entityculling-neoforge-1.9.5-mc1.21.1.jar
- EuphoriaPatcher-1.7.8-r5.6.1-neoforge.jar
- forgeshot-neoforge-1.21.1-2.0.jar
- fusion-1.2.12-neoforge-mc1.21.1.jar
- iris-neoforge-1.8.12+mc1.21.1.jar
- ModernUI-NeoForge-1.21.1-3.12.0.2-universal.jar
- orthocamera-1.21.1-0.2.0.jar
- Pretty Rain-1.21.1-NeoForge-1.1.4.jar
- screenshot-to-clipboard-neoforge-1.0.10.jar
- sounds-2.4.22+lts+1.21.1-neoforge.jar
- vanillin-neoforge-1.21.1-1.1.3.jar

### Install Latest Modpack to Server
```bash
wget https://raw.githubusercontent.com/Tak0yakey/ModrinthServerPackInstaller/refs/heads/main/modrinth.py && python3 modrinth.py https://github.com/Tak0yakey/Modpack_Dev/releases/download/latest/latest.mrpack
```

## CreateSimlinkToMinecraftFolder.sh
<details><summary>以下は、スクリプトの使い方・挙動をまとめた説明です。</summary>

---

## このスクリプトは何をするものか

Minecraft 環境に対して、

* `pack/overrides` 配下にある

  * `config`
  * `kubejs`

といったディレクトリを、
**Minecraft 本体フォルダ直下にシンボリックリンクとして配置する**ためのスクリプトです。

既存のフォルダやリンクがあっても、安全確認をした上で **削除 → 正しいリンクを再作成**します。

---

## 前提条件

* **Linux 専用**

  * スクリプト内でも明示されています
  * Git Bash（Windows）は非推奨（管理者権限が必要・挙動不安定）
* `bash` が使えること
* `realpath`, `readlink`, `ln`, `rm` が存在すること（通常の Linux なら問題なし）

---

## ディレクトリ構成（重要）

このスクリプトは **自分自身の場所を基準** に動きます。

```
script.sh
pack/
└── overrides/
    ├── config/
    └── kubejs/
```

* 実体（リンク元）：
  `pack/overrides/config`
  `pack/overrides/kubejs`

---

## 実行方法

```bash
chmod +x script.sh
./script.sh
```

---

## 実行中に聞かれること

### 1. Minecraft フォルダの場所

```
Minecraftのフォルダがあるディレクトリを入力してください。
eg:/home/minecraft
(注: modsフォルダの一個上である。)
```

ここで指定するのは：

```
/home/minecraft
├── mods/
├── config/
├── kubejs/
```

のように、**`mods` が直下にあるディレクトリ**です。

### 危険な入力は拒否される

* 空文字
* `/`（ルートディレクトリ）

は即エラーで終了します。

---

## 実行前の確認表示

スクリプトは **いきなり変更しません**。

以下を表示します：

* SOURCE_BASE（リンク元）
* DEST_BASE（Minecraft フォルダ）
* 対象フォルダ（config / kubejs）
* 実行予定の操作一覧
## 最終結果

Minecraft フォルダはこうなります：

```
/home/minecraft/
├── config  -> pack/overrides/config
├── kubejs  -> pack/overrides/kubejs
├── mods/
└── ...
```

設定の実体は **すべて `pack/overrides` 側で一元管理**できます。
</details>

## curseforgeModIncluder
Modrinthの形式でexportしたあとに残ったmodsを適当なcurseforgeのmodpackに突っ込み、それをexportしたzipを使用して、それをModrinth形式に変換します。
