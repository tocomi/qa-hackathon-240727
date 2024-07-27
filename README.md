This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Run the following commands

```bash
npm install or pnpm install
# Set the environment variable
Set the .env by using the .env.example
# Run the development server
npm run dev or pnpm run dev
# Access it via web
Access it by http://localhost:3000 
# Access local database
npm run db:studio 
```

## Run Test

```bash
pnpm i
pnpm exec playwright install
pnpm exec playwright test
```

## Folders:
- API model: lib > actions 
- API integration: src > app 
- UI: src > app > components

## テスト計画の概要
### 目的と範囲 
テスト計画の目的と、どの範囲（機能、モジュール、システム全体）がテスト対象になるかを記載します。

## テストアプローチ
### テストレベル
単体テスト：TBA
統合テスト：TBA
システムテスト：対象
受け入れテスト：対象外

## テストタイプ
回帰テストを対象とする
性能テスト、セキュリティテストは対象外

## テスト環境
- ブラウザ上のシステムのため、OSの網羅性については検討対象外とし、localでの実行とする
- ブラウザは XXX を対象とする

## テストケース設計
ユーザーストーリーを踏襲する。
```
1	As a new user, I want to sign up for an account so that I can save my to-do items and access them from any device.
2	As an existing user, I want to log in to my account so that I can access my saved to-do items
3	As a user, I want to log out of my account.
4	As a user, I want to create a new to-do item so that I can keep track of my tasks.
5	As a user, I want to view a list of all my to-do items so that I can see what tasks I need to complete.
6	As a user, I want to mark a to-do item as completed so that I can keep track of what I have accomplished.
7	As a user, I want to edit a to-do item so that I can update its details if they change.
8	As a user, I want to delete a to-do item so that I can remove tasks I no longer need.
9	As a user, I want to sort my to-do items by different criteria (e.g., due date, status, creation date) so that I can manage my tasks more efficiently.
10	As a user, I want to unhide/hide certain columns in the to-do list view so that I can focus only on the information that matters to me.
11	As a user, I want to search for specific to-do items by keywords so that I can quickly find tasks related to certain topics or criteria.
12	As a user, I want to toggle between dark mode and light mode so that I can choose the theme that is easiest on my eyes.
```
- テストデータに影響を与えるユーザーストーリーは新規ユーザー作成から一塊にして、直列で実行する
- 参照系のユーザーストーリーは既存ユーザーにテストデータを作成し、そのユーザーを用いて並列実行する
