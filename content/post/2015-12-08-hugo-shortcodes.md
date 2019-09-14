+++
draft = false
slug = "hugo-shortcodes"
categories = ["blog"]
tags = ["hugo"]
date = "2015-12-08T15:39:54+09:00"
title = "Hugo shortcodesの利用と作成"

+++

## Hugo twentyfourteen shortcodes
もともとtwentyfourteenのテーマファイルにはショートコードがありました。
Wordpressのテーマを再現しているのであるのかもしれませんが、マークダウンで画像などを記述すると
pタグにimgタグが内包された形となります。

それですと、画像が何の画像なのがわからないのと思い**shortcode**を使ってみることにしました。
使い方は{{% external_link href="https://gohugo.io/extras/shortcodes/" text="Hugo - Shortcodes" %}}**Using a shortcode**をご覧ください。

### figure
{{< gist nuovotaka d7a32905f86b273d214e >}}
### external_link
{{< gist nuovotaka d0548b36cd2cd9ff2df1 >}}
### internal_link
{{< gist nuovotaka b91de64a05a2ccb43a34 >}}

#### 【 追 記 】
なぜ今回**GitHub Gist**を埋め込んだか？
それは、HugoがMarkdownからHTMLファイルを生成するときにバグがあるようだったので急遽利用したということです。

当初より考えていたのではなく、苦肉の策です。
Markdownのコード**```**バッククォートで囲んだのだが中のコードを忠実に再現するので使えませんでした。

っということで**Gist**での埋め込みとなりました。

