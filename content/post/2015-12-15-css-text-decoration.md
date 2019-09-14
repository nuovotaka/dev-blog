+++
draft = false
slug = "css-test-decoration"
categories = ["blog"]
tags = ["css", "text-decoration"]
date = "2015-12-15T10:18:00+09:00"
title = "CSS Text Decorationのインライン要素"

+++

## shortcode で作成したリンクiconの下線を消したい

今回は**``display: inline-block;``**で問題解決できました。

では、{{% external_link href="https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration" text="MDN text-decoration" %}}を確認してみよう。

> **test-decoration** CSS プロパティはunderline、overline、line-through、blink のテキストフォーマットを設定するのに使用されます。
> テキスト装飾は、子孫要素にも描かれます。これは、親要素で指定されたテキスト装飾を子孫要素で無効化できないことを意味します。

親要素で指定されている修飾を子孫要素では無効化できない。
ではどうするか？

今回はafterの疑似要素でiconを付加していますので、その疑似要素に次のように設定しました。

```css
/* 外部リンクの疑似要素 */
.icon-new-tab:after {
	content: "\e90e";
	display: inline-block;	/* ココがpoint */
	text-decoration: none;
	opacity: 0.7;
}
/* 内部リンクの疑似要素 */
.icon-link:after {
	content: "\e90f";
	display: inline-block;	/* ココがpoint! */
	text-decoration: none;
	opacity: 0.7;	
}
```

一応エレメントのおさらい

### Inline elements
i, code, strong, a, br, map, script, span, sub, sup, button, input, label, select など
これらの要素がインライン要素になります。

### Block-level elements
h1 - h6, p, ol, ul, div, hr, nav, article, aside, header など
これらの要素がブロック要素になります。

それぞれこのように定義されていますが、今回はインライン要素内で付加された疑似要素をインライン要素と判断させないようにするためにはどうするか

こちらにも解決策が書かれていました。(解決策が見つかってから検索に引っかかったのだけれどね。)

+ {{% external_link href="https://html5experts.jp/takazudo/14096/" text="理解しておきたいCSSによるインラインレイアウト" %}}

インラインのレイアウトでお悩みの方は、先ほどのリンクに詳しく解説されていますので一読されることをお勧めします。
