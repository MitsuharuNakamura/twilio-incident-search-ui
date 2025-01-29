# Twilio Incident Search

## 概要

Twilioのインシデント履歴を検索し、特定のキーワードを含むインシデント情報を表示するWebアプリケーションです。Twilioのブランドカラーに沿ったデザインを採用し、ページネーション機能を備えています。本アプリケーションは **Twilio Functions & Assets** 上で動作します。

## 特徴
- **検索キーワードで過去のインシデントを検索可能**
- **最大ページ数を指定し、範囲を調整可能**
- **検索結果をリストで表示**
- **20件ごとのページネーション**
- **該当するインシデントがない場合、適切なメッセージを表示**
- **Twilio Functions & Assets 上で動作**
- **レスポンシブデザイン対応**

## インストール & デプロイ方法

### 1. Twilio CLI のインストール & ログイン

Twilio CLI をインストールして、ログインしてください。

```bash
npm install -g twilio-cli

twilio login
```

### 2. Twilio Serverless プラグインのインストール

```bash
twilio plugins:install @twilio-labs/plugin-serverless
```

### 3. プロジェクトの作成

```bash
twilio serverless:init twilio-incident-search-ui --template=blank
cd twilio-incident-search-ui
```

### 4. ファイルの配置

以下のファイルを `twilio-incident-search-ui/assets/` に配置してください。

```
📂 twilio-incident-search-ui
├── 📂 assets
│   ├── 📄 index.html  # フロントエンドのHTML
├── 📂 functions
│   ├── 📄 searchIncidents.js  # Twilio Function (検索処理)
└── 📄 README.md  # 本ドキュメント
```

### 5. Functionsのデプロイ

```bash
twilio serverless:deploy
```

デプロイ後、コンソールに表示されるURLを確認し、`index.html` をブラウザで開いて動作を確認してください。

## 使い方

1. **検索キーワード** を入力
2. **検索対象ページ数** を指定（1ページで過去3ヶ月分）
3. **検索開始ボタンをクリック**
4. 結果がリストで表示され、ページネーションを使って次のページへ移動可能

## コントリビューション

改善提案や機能追加のリクエストはIssueを作成してください。

## ライセンス

MIT License

