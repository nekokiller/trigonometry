<div align="center">

<img src="./icon-192.png" alt="三角函數計時比賽" width="120">

# 三角函數計時比賽

**練習常見三角函數值的計時答題遊戲 — 可安裝 PWA、支援離線**

[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)](https://github.com/nekokiller/trigonometry)
[![iOS](https://img.shields.io/badge/iOS-Supported-000000?logo=apple)](https://github.com/nekokiller/trigonometry)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#授權)

🎮 **線上試玩**：<https://nekokiller.github.io/trigonometry/>

</div>

---

## 📖 簡介

這是一款練習常見三角函數值（sin / cos / tan）的計時答題網頁遊戲，採用 **PWA (Progressive Web App)** 設計，可加入手機主畫面後離線執行。

- 🎯 涵蓋常見 17 個角度（0° ~ 360° / 0 ~ 2π）
- 🧩 6 種題型 × 度／弧度兩種單位
- ⏱️ 計時模式可開可關，挑戰個人最佳成績
- 📱 支援 iPhone 加入主畫面、離線執行

---

## ✨ 功能特色

### 🔢 雙單位選擇
- **單位：度**（例如 `sin 30°`、`cos 150°`）
- **單位：弧度**（例如 `sin π/6`、`cos 5π/6`）

### 📐 六種題型

| 題型 | 角度範圍 | 題數 |
|---|---|---|
| 第一象限角 | 30°, 45°, 60° | 9 |
| 第二象限角 | 120°, 135°, 150° | 9 |
| 第三象限角 | 210°, 225°, 240° | 9 |
| 第四象限角 | 300°, 315°, 330° | 9 |
| 象限角 | 0°, 90°, 180°, 270° | 12 |
| 混合 | 全部 17 個角度 | 51 |

每個角度都會考 sin / cos / tan 三個函數。

### ⏱️ 計時模式
- **計時開**：計時器即時顯示經過時間（`分:秒.毫秒`），總結畫面顯示完成時間
- **計時關**：純練習模式，無壓力答題

### 🎮 答題體驗
- 隨機洗牌每場題目順序
- 答對閃綠、答錯閃紅並標示正解
- 280 ms 自動進下一題
- 完成後顯示總題數、答對率、總時間，並存入 localStorage

---

## 📱 在 iPhone 上安裝（PWA）

1. 用 **Safari**（不可使用 Chrome）開啟：
   <https://nekokiller.github.io/trigonometry/>
2. 點底部 **分享按鈕**（口字 + 箭頭往上）
3. 滾到下方選擇 **加入主畫面**
4. 主畫面會出現「三角函數」圖示
5. 點圖示開啟即可全螢幕使用，並支援**離線執行**

### 在 Android 上安裝
1. 用 **Chrome** 開啟同樣的網址
2. 網址列右側會出現「安裝」按鈕，或點選右上角選單 → **安裝應用程式**

---

## 🛠️ 技術細節

| 項目 | 內容 |
|---|---|
| 前端 | 純 HTML / CSS / JavaScript（無框架、無打包工具） |
| PWA | `manifest.json` + Service Worker (Cache-First) |
| 離線快取 | `index.html`、`manifest.json`、`icon-192.png`、`icon-512.png` |
| 計時器 | `performance.now()` + `setInterval`（30 ms 更新） |
| 資料儲存 | `localStorage`（紀錄歷史成績） |
| 手機適配 | `100dvh`、`env(safe-area-inset-*)`、`viewport-fit=cover` |
| 字體描邊 | `-webkit-text-stroke` + `paint-order: stroke fill` |

### 檔案結構

```
v2/
├── index.html          # 主程式 (HTML + CSS + JS 單檔)
├── manifest.json       # PWA 設定檔
├── sw.js               # Service Worker (離線快取)
├── icon-192.png        # 192×192 圖示
├── icon-512.png        # 512×512 圖示
└── README.md           # 本檔案
```

---

## 🎨 答案符號（14 種）

```
1, -1, √3, -√3, √3/2, -√3/2, √2/2, -√2/2,
1/2, -1/2, 1/√3, -1/√3, 0, 無意義
```

> 註：`tan 90°` 與 `tan 270°` 的答案為「無意義」

---

## 🧪 本機測試（開發者）

```bash
# clone 專案
git clone https://github.com/nekokiller/trigonometry.git
cd trigonometry

# 啟動本機 HTTP server (必要：Service Worker 必須透過 HTTP/HTTPS 才能啟用，不可用 file://)
python3 -m http.server 8000
# 或
npx serve -p 8000
```

開瀏覽器訪問 <http://localhost:8000>

> ⚠️ 透過 `file://` 直接開啟 `index.html` 仍可遊玩，但 Service Worker 不會註冊。

---

## 🔄 版本紀錄

| 版本 | 日期 | 內容 |
|---|---|---|
| v2.0.20260526 | 2026-05-26 | PWA 升級、計時模式開關、版本資訊、標題描邊優化 |
| v2.0 | 2026-05-26 | 兩組選項 (單位 × 象限)、六種題型、動態答案網格 |
| v1.0 | 2026-05-26 | 首版 (360° / 2π / 180° / π 四種模式) |

---

## 🚧 待開發

- [ ] 歷史記錄頁面 UI（資料已存於 localStorage）
- [ ] 個人最佳成績徽章
- [ ] 各象限分開統計
- [ ] 答題音效
- [ ] 連續答對 combo 顯示
- [ ] 多語言支援

---

## 🤝 貢獻

歡迎開 Issue 提出改進建議或回報 bug。

如果這個專案對您的學習有幫助，請點個 ⭐ Star 鼓勵一下！

---

## 📄 授權

MIT License — 自由使用、修改、散布。

---

<div align="center">

**Made with ❤️ for Math Learners**

[回到頂端 ↑](#三角函數計時比賽)

</div>
