# Modpack_Dev

### ==>>>[最新のModpackを入手](https://github.com/Tak0yakey/Modpack_Dev/releases/tag/latest)


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
