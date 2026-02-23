#!/usr/bin/env bash
#   ███████  ██████  ██████      ██     ██ ██ ███    ██ ██████   ██████  ██     ██ ███████     ██    ██ ███████ ███████ ██████     
#   ██      ██    ██ ██   ██     ██     ██ ██ ████   ██ ██   ██ ██    ██ ██     ██ ██          ██    ██ ██      ██      ██   ██ ██ 
#   █████   ██    ██ ██████      ██  █  ██ ██ ██ ██  ██ ██   ██ ██    ██ ██  █  ██ ███████     ██    ██ ███████ █████   ██████     
#   ██      ██    ██ ██   ██     ██ ███ ██ ██ ██  ██ ██ ██   ██ ██    ██ ██ ███ ██      ██     ██    ██      ██ ██      ██   ██ ██ 
#   ██       ██████  ██   ██      ███ ███  ██ ██   ████ ██████   ██████   ███ ███  ███████      ██████  ███████ ███████ ██   ██    

#   ██    ██ ███████ ███████      ██████  ██ ████████     ██████   █████  ███████ ██   ██                                          
#   ██    ██ ██      ██          ██       ██    ██        ██   ██ ██   ██ ██      ██   ██                                          
#   ██    ██ ███████ █████       ██   ███ ██    ██        ██████  ███████ ███████ ███████                                          
#   ██    ██      ██ ██          ██    ██ ██    ██        ██   ██ ██   ██      ██ ██   ██                                          
#    ██████  ███████ ███████      ██████  ██    ██        ██████  ██   ██ ███████ ██   ██                                          


set -euo pipefail
cd "$(dirname "$0")"
# 元になるディレクトリ（実体）
SOURCE_BASE="$(cd $(dirname $0); pwd)/pack/overrides"

# 対象フォルダ（SOURCE_BASE 配下）
DIRS=(
  config
  kubejs
)
echo "Linuxのみサポート。Git bashは管理者権限でないとうまく動きません。"
read -rp "Minecraftのフォルダがあるディレクトリを入力してください。eg:/home/minecraft (注:modsフォルダの一個上である。) " DEST_BASE_RAW
DEST_BASE="$(realpath -m "$DEST_BASE_RAW")"
# 危険な入力を拒否
if [[ -z "$DEST_BASE" || "$DEST_BASE" == "/" ]]; then
  echo "無効なディレクトリです"
  exit 1
fi

# DEST_BASE の存在確認
if [[ ! -d "$DEST_BASE" ]]; then
  echo "ディレクトリが存在しません: $DEST_BASE"
  exit 1
fi

# SOURCE 側の存在確認
if [[ ! -d "$SOURCE_BASE" ]]; then
  echo "SOURCE_BASE が存在しません: $SOURCE_BASE"
  exit 1
fi

echo
echo "=== 設定内容 ==="
echo "SOURCE_BASE : $SOURCE_BASE"
echo "DEST_BASE   : $DEST_BASE"
echo "対象フォルダ:"
for d in "${DIRS[@]}"; do
  echo "  - $d"
done
echo "==============="
echo

ACTIONS=()

for name in "${DIRS[@]}"; do
  SRC="$SOURCE_BASE/$name"
  DEST="$DEST_BASE/$name"

  if [[ ! -d "$SRC" ]]; then
    ACTIONS+=("スキップ（元が存在しない）: $SRC")
    continue
  fi

  if [[ -L "$DEST" ]]; then
    if [[ "$(readlink -f "$DEST")" == "$(readlink -f "$SRC")" ]]; then
      continue
    fi
    ACTIONS+=("削除 → 再作成: $DEST")
  elif [[ -e "$DEST" ]]; then
    ACTIONS+=("削除 → 再作成: $DEST")
  else
    ACTIONS+=("作成: $DEST")
  fi
done

if [[ "${#ACTIONS[@]}" -eq 0 ]]; then
  echo "すべて正しい状態です。何もすることはありません。"
  exit 0
fi

echo "=== 実行予定の操作 ==="
for a in "${ACTIONS[@]}"; do
  echo " - $a"
done
echo "======================="
echo

read -rp "この内容で実行しますか？ [y/N]: " ANSWER
case "$ANSWER" in
  [yY]|[yY][eE][sS]) ;;
  *) echo "中断しました"; exit 0 ;;
esac

for name in "${DIRS[@]}"; do
  SRC="$SOURCE_BASE/$name"
  DEST="$DEST_BASE/$name"

  [[ ! -d "$SRC" ]] && continue

  if [[ -e "$DEST" || -L "$DEST" ]]; then
    if [[ -L "$DEST" ]] && [[ "$(readlink -f "$DEST")" == "$(readlink -f "$SRC")" ]]; then
      continue
    fi
    rm -rf -- "$DEST"
  fi

  ln -s "$SRC" "$DEST"
  echo "作成: $DEST -> $SRC"
done

echo "完了しました"