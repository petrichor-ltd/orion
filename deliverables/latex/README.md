# Orion LaTeX 商業簡報

此目錄只保留兩份最終簡報來源、共用主題與閉環驗收程式；檔名不再使用版本號。

## Compile

從專案根目錄編譯：

```bash
mkdir -p /tmp/orion-build output/pdf
tectonic -o /tmp/orion-build deliverables/latex/orion_ainia.tex
tectonic -o /tmp/orion-build deliverables/latex/orion_jourdeness.tex
cp /tmp/orion-build/orion_ainia.pdf "output/pdf/欖亞顧問_ORION_愛妮雅_亞洲香研所_商業提案.pdf"
cp /tmp/orion-build/orion_jourdeness.pdf "output/pdf/欖亞顧問_ORION_佐登妮絲_商業提案.pdf"
```

簡報使用 macOS `PingFang TC` 字型，以及 `assets/`、`deliverables/` 內的 Orion 素材。

## Closed-loop QA

```bash
python3 deliverables/latex/check_pitch.py
```

QA 會重新編譯、逐頁渲染、檢查文字碰撞、商業口徑與 QR；所有編譯及渲染中間檔都放在系統暫存目錄並自動刪除。最後只留下 `output/qa/orion_pitch_qa.md`。
