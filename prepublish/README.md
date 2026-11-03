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

## 公開前にFujiが決めること
- サイト名（今は仮称「はじめてのFX学習ノート」。画面上の「（仮称）」表記は外した）
- 固定ページの［運営者名］［連絡先メール］［公開日］［運営者の自己紹介］、AI利用の一文を載せるか
- 「運営者は金融商品取引業者ではなく投資助言・代理業の登録もない」の事実確認
- お問い合わせ：メールのみか、フォームを置くか
- 本数表記の案（全28本予定・入門8本〈A-00を含む〉・うち公開中3本）の採用
- 出典の参照日は公開直前に編集側で更新（今は2026年10月25日のまま）

`_check/` は確認用スクリーンショット（ページからは参照していません。公開時は含めない）。
