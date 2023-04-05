# Tasker
實作簡單的介面來管理 Github 中被指派大大小小的任務！

## 需求說明
1. 使用者可以新增任務
2. 使用者可以編輯已存在的任務
3. 使用者瀏覽任務時，可以按照內容搜尋，決定排序方式
4. 使用者瀏覽任務時，可以區分「未處理 open」、「進行中 in progress」、「已完成 done」

## 使用
- 建議線上使用，無須安裝，請至 [Live Demo](https://github-tasker.netlify.app/)
- 如需本地安裝，請 clone 此資料夾並進到資料夾中，在終端機輸入以下指令 :
  ```
  npm install
  npm run dev
  ```
  - 在運行之前，**請注意 port 號 5173 應保持淨空**，務必於 http://localhost:5173/ 開啟專案。

## 使用技術
### 主要開發技術
- react.js：建立前端架構
- react-router：建立前端路由實現 SPA
- Vite：生產環境與打包程式碼
- tailwind + daisyUI：介面樣式
- Formik + yup：欄位驗證
- zustand：全域狀態管理

### 部署環境
- Netlify：使用 redirect 功能解決 SPA 重整 404 的問題

### 其他
- Google app scripts：避免 CORS 問題、封裝敏感性資訊

## 資料夾架構與說明
### 資料夾架構一覽
```
├── dist
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── public
│   ├── _redirects
│   └── icon.svg
├── readme.md
├── src
│   ├── API
│   ├── App.jsx
│   ├── assets
│   │   └── configure
│   ├── component
│   │   └── fields
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── share
│   ├── router
│   │   └── router.jsx
│   ├── share
│   │   ├── hooks
│   │   └── utils
│   └── stores
├── tailwind.config.cjs
└── vite.config.js
```
### 主要資料夾說明
主要使用資源都放在 /src 資料夾下，
- 📁 API：建立 axios 實例，統一封裝管理 API
- 📁 assets：靜態資源
  - 📁 configure：APP 需求設定相關定義檔（如：task 可操作狀態(labels)）
- 📁 component：元件檔案
  - 📁 fields：表單欄位元件，包含可複用之驗證功能
- 📁 pages：路由頁面檔案
- 📁 router：前端路由定義檔
- 📁 share：自定義 helper 函式或自定義 hooks (如有)
- 📁 stores：狀態管理的 store
- main.jsx：APP 主要進入點
- App.jsx： SPA 網站之根元素
- index.css：基礎樣式設定，引入 tailwind