### Hugo Build Works

[![Netlify Status](https://api.netlify.com/api/v1/badges/3c05e1bc-7aae-48de-b1e1-d86f8ea24e34/deploy-status)](https://app.netlify.com/sites/nuovotaka-dev-blog/deploys)

# Twenty Fourteen
[twentyfouteen](http://themes.gohugo.io/twentyfourteen/)

WordPressのTwenty FourteenをHugo用に移植されたものに「自分のテーマ」カラーを設定し利用しました。
レスポンシブ対応で２カラムになっています。

元から継承したテーマはそのままにlayoutsフォルダやstaticフォルダに自分用に変更したファイルをセットしておくと元テーマを上書きして修正する仕組みとなっています。

"続きを読む"などがなかったので追加で修正を加えました。

## こちらのテーマを利用する時の注意点

" content > post > 記事.md "となっているので**記事.md**を削除して次の作業を行ってください

新しい記事を追加する時は必ず**post**以下のフォルダーに記事を作成しないと表示がされません。
```
$ hugo new post/xxxx.md
```

xxxx.md はわかりやすく年月日と一意となる名前を組み合わせてやると管理がしやすいかもしれません
後々、年単位でアーカイブスを作成したくなると思いますので。

(例)

2010/01/01 Hello World > "2010-01-01-hello_world.md"と言う感じです。
こちらはファイル名になりますので空白のかわりにアンダーバーなどを利用すると日付とファイル名がわかりやすいと思います。

公式では"post"なしのファイルの作成になっていますので公式ページを参照後こちらを利用される場合は
注意が必要です。

ちなみにこのテーマでは *about.md* も **post** 以下にします。

## Menu

記事のヘッダ部分に``menu = main``とするとメニューに追加できます。(こちらは、このテーマデフォルトの機能です。)

# License

The following directories and their contents are Copyright NUOVOTAKA. You may not reuse anything therein without my permission:

+ content/
+ static/images/
+ static/favicon.ico

The following directories and their contents are Copyright Dan Hersam.

+ themes/

Licensed under the GPL license in Dan Hersam, <http://dan.hersam.com>

All other directories and files are:
Licensed under the [GPL License v3](LICENSE.md), <http://nuovotaka.com>
