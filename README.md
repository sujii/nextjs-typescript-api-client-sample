# nextjs-typescript-api-client-sample
api-client-UI entry-level testing samp

## 技術テスト要件
下記の基本仕様を持つWebアプリケーションを実装する

- [x] 郵便番号を入力すると、郵便番号に対応する住所を検索し、結果を表示
- [x] 便番号から住所を検索するために、Web上のAPIを利用
- [ ] UIデザインに指定はありませんが、
　Bootstrap等のCSSフレームワークで簡単にデザイン出来そうであればお願いします。
　時間がかかる場合は適当でOK
 `動く実装までを先に確認頂くため、スタイルやレスポンス表示の体裁は未着手となっております`
- [x] React + TypeScript のSPAとして実装
- [x] 他に必要なライブラリがあれば自由に追加してOK

※ 郵便番号検索APIの例
http://zipcloud.ibsnet.co.jp/doc/api

## 提出方法
特に制限は無し

- [x] GitHubで共有

## 動作確認方法

1. リポジトリをPullして下さい
2. `npm install` または `yarn`
3. 一度ビルドします `npm run build`
4. nextサーバ起動 `npm run start`
5. dev環境の起動は `npm run dev`
6. 4, 5 どちらでサーバ起動しても `http://localhost:3000` が表示画面となります
