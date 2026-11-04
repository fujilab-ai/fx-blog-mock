# はじめてのFX学習ノート　公開用コピー（プレ公開版・未公開）

**このフォルダは「公開用に整えたコピー」です。まだ公開・デプロイ・pushはしていません。**Fujiの確認後に反映します。

## フォルダの見分け方

| フォルダ | 中身 | 状態 |
|---|---|---|
| `/workspace/fx-blog-prepublish/` | **公開用コピー（このフォルダ）**。見本表示・noindexなし。原稿は `/workspace/articles/publish-ready/`（編集長の公開前下書き） | 未公開・git管理なし |
| `/workspace/fx-blog-mock/` | 見本（モック）の元フォルダ。noindex・見本帯つき。原稿は `/workspace/articles/reviewed/` | 変更していない |
| `/workspace/fx-blog-mock-publish/` | GitHub Pages（fujilab-ai/fx-blog-mock）に出ている**見本**のgitクローン。名前に publish とあるが中身は見本 | 変更していない |

## 開き方
`file:///workspace/fx-blog-prepublish/index.html` をブラウザで開く（CSS/JSは各HTMLに埋め込み済み。iPhoneのFilesでも表示できます）。

## 作り直すとき
```bash
/workspace/.mockvenv/bin/python /workspace/fx-blog-prepublish/_build/build.py
```
- 記事：`/workspace/articles/publish-ready/A-00.md・A-02.md・A-03.md`（フロントマター対応、HTMLコメントは出力しない）
- 固定ページ：`_build/pages/*.md`（免責事項・運営者情報・プライバシーポリシー・広告・PRポリシー・お問い合わせ）
- 設定（`_build/build.py` 冒頭）：`INDEX`（Trueでnoindexなし）、`SHOW_DRAFT_NOTES`（固定ページの「公開前の下書き」メモ。最終公開時にFalse）、`PUBLISH_DATE`（公開日。未設定のあいだは［公開日］）、`SOON`（未公開記事の表記＝近日公開）
- 見本版のビルダー（`/workspace/fx-blog-mock/_build/build.py`）とは別ファイル。見本を作り直しても、このフォルダは上書きされません。

## 確定済み（2026年11月4日 Fuji）
サイト名「はじめてのFX学習ノート」、運営者「はじめてノート」、連絡先 hajimete.fx.note@gmail.com（メールのみ）、自己紹介、登録なしの明記、AI利用の一文、本数表記（全28本予定・入門8本うち公開中4本）。

## まだ残っていること
- 公開日（今は「準備中」と表示。決まったら `PUBLISH_DATE` に入れて作り直す）
- 出典の参照日は公開直前に編集側で更新する（今は2026年10月25日のまま）
- 公開・デプロイはFujiの最終OKのあとに行う

`_check/` は確認用スクリーンショット（ページからは参照していません。公開時は含めない）。
