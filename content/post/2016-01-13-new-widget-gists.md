+++
draft = false
slug = "new-widget-gists"
categories = ["blog"]
tags = ["hugo", "twentyfourteen"]
date = "2016-01-13T11:20:34+09:00"
title = "新しい widget が追加されました"

+++

## 最近投稿されたGistsを検索して来てくれるもの
下記参考のテーマ公式の内容のまま(2016-01-13)だとローカルでは表示するのだが、werckerを通して動かすとうまく行かなかった。

なので、ロジックを{{% external_link href="https://gohugo.io/extras/datadrivencontent/" text="Hugo - Data-drivenContent" %}}の通りに変更。
最初は定義済み語句がからんでいるのかと思ったがそうではなかった。

どうやら、複数引数が可能な命令らしく分割しないまま``url``を定義したら``wercker``で落ちていた。
``hugo``や``hugo server``での確認では正しく表示されていた。

公式通りでは以下のとおり

```
{{ $urlPre := "https://api.github.com" }}
{{ $gistJ := getJSON $urlPre "/users/GITHUB_USERNAME/gists" }}
```

GITHUB_USERNAME : 個々のユーザー名に変更してください

url内の**GITHUB_USERNAME**を**config.toml**で設定している値を利用する場合は

```
{{ $urlPre := "https://api.github.com/users/" }}
{{ $githubUser := .Site.Params.github }}
{{ $gistJ := getJSON $urlPre $githubUser "/gists" }}
```
公式にもありますが、分割されたurlは１つのurlとして認識されます。

json データで取得した中の``html_url``と``description``をチェックして
urlはhrefに設定している。

rangeで５つのみとるようにしているので最近のものが取れるというわけです。

早速試してみました。

#### 参 考
Hugo用のwordpress twentyfourteenテーマの作者

{{% external_link href="https://github.com/jaden/twentyfourteen" text="jaden - twentyfourteen" %}}
