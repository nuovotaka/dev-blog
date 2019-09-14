+++
draft = false
slug = "about_github"
categories = ["github"]
tags = ["github"]
date = "2016-04-28T16:28:14+09:00"
title = "githubで３分クッキング"

+++

## githubでHPサイトを公開してみましょう
なんのことを言っているだと思われるかも知れませんね。

ドメインを持っていなくても github を利用するとお手軽にHPを公開することができます。

ご存知の方もいるかもしれませんがキュレーションとして記事をあげさせていただきます。

### ユーザーアカウントを利用しての公開方法

やはり公式でしょう

+ {{% external_link href="https://pages.github.com/" text="GitHub Pages" %}}

先ずはユーザーアカウントを利用しての公開(ドメインを取得していなくてもとりあえず公開することができます。)
上記とダブりますが。

+ {{% external_link href="http://qiita.com/budougumi0617/items/221bb946d1c90d6769e9" text="Githubを使って３分でHPを公開する" %}}

ここに書かれている あなたのユーザーアカウントを利用して公開できることになります。
一応このようなサービスはGithubが提供しているもので本来はコラボレーションするときなどに使われるものになります。

goHugoなど静的サイト生成ツールを利用される方は、githubのドキュメントをご覧ください。(英語ですが。。。)

+ {{% external_link href="https://pages.github.com/" text="GitHub Pages" %}}
```User and Organization Pages```を選択してください。

#### Githubを利用する場合の注意点

**```http://your_account.github.io/```**

githubの場合の公開は"io"ドメインとなりますのでご注意を。

### 独自ドメインを利用しての公開方法

ご自身のドメインを取得して公開し運用してみたくなった場合は下記を。

+ {{% external_link href="https://qiita.com/mikakane/items/87c8f676815da4e5ac04" text="Github Pagesの使い方" %}}

### 静的サイトのホストについて
jekyll や最近ではgoHugoなどいろいろとありますが、各種設定をしてください。

参考までに goHugo の場合は、baseurl や cname, domain などの設定を config 及び wercker_yaml
で変更する必要があります。

そして両者で同一でないとデプロイできません。

(例)

ドメインが"blog.nuovotaka.com"なので

config.tomlの以下の項目は
```
baseurl = "http://blog.nuovotaka.com"
```

wercker.yamlの以下の項目は
```
domain: blog.nuovotaka.com
```

参考まで

---
問い合わせなどがありませんので Twitter からお願いします。

ただし、皆様の環境が見えませんのでご参考程度に記事をあげる、または、参考サイトをお知らせする程度になることをご了承ください。

---
追記

+ Githubを利用する場合の注意点
ドキュメントにも記載がありますが今一度チェックです。

+ ユーザーアカウントを利用しての公開方法
やはり公式を追加しました。

順を追って作業していけばできることなので焦らず頑張りましょう。

