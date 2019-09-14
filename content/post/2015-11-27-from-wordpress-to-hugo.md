+++
draft = false
slug = "from-wordpress-to-hugo"
categories = ["blog"]
tags = ["blog", "hugo"]
date = "2015-11-27T15:58:42+09:00"
title = "Wordpressからhugoへ移行しました"

+++

## WordpressからHugoへ移行しました
今まで**Wordpress.com**で書いていたブログも途中でおろそかになり書いていませんでした。
Macで動作はサクサクなのですが、肝心のWordpressのサイトが遅すぎて。。。

また、下書きをして訂正を読み返してから掲載するのにあの遅いWordpress.comを幾度となく立ち上げなくてはいけません。
そのうち面倒になり書かなくなりました。
iPadを設定していましたが不具合などあり使えない。

<!--more-->

しばらく別のブログサイトを使いましたが、そちらは、HTML5ではなく古いテーマが豊富で"今"ではありませんでした。

っということで、いろいろと探しているとGitHub上で静的サイトのブログを立ち上げることができることを知りました。

## Hugoへ移行を決める
まずはどんな使い心地なのか？
``Homebrew``を使い``Hugo``をインストールしMac内に環境を作り、と言ってもフォルダを作成しそこで``Hugo``のコマンドを叩いただけです。

## 点在していたブログ記事をマークダウン方式に
一つは**Movable Type**, もう一つは**XML**でした。

先日**Movable Type**形式の記事を修正し画像を調節してホストできたので**WordPress**のエクスポートで出力される**XML**形式の記事を修正し先ほどあげることができました。

もっと多数の記事を書いていたのですが、古すぎてそぐわないものは消すことにしました。
また、リンクの切れている記事、qiitaの記事と重複している記事も同様削除することにしました。

Wordpressの記事の移行には、{{% external_link href="http://rakuishi.com/archives/wordpress-to-hugo/" text="WordPress から Hugo に乗り換えました" %}}

**rakuishi**さんの以下のコード{{< gist rakuishi 3163f6e8c5a496329bc7 >}}を利用させていただきました。この場を借りてお礼申し上げます。

Movable Typeの記事の移行には、**railsbros-dirk**さんの以下のコード{{< gist railsbros-dirk 2351046 >}}を利用させていただきました。
どちらのプログラムもそのままでは自分の記事に合わないので必要箇所を変更しすべての記事を**markdown方式**に変更できました。

あと数点確認が終わったところで``/``ルートに置いてある``robots.txt``ファイルを外すつもりです。

### Wordpress.orgからとWordpress.comからのエクスポート方法

#### wordpress.orgから
**Wordpress**をorgサイトからの場合は、エクスポートのプラグインが用意されています。
**wordpress.org**から**Hugo**へ移行される方のために{{% external_link href="https://github.com/SchumacherFM/wordpress-to-hugo-exporter" text="wordpress-to-hugo-exporter" %}}

#### wordpress.comから
**wordpress.com**サイトではプラグインを使えませんので通常のエクスポートは先ほどの**XML**形式のファイルとなるわけです。
リンクの場所とテーブルの変換はされないようです
