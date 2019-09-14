+++
draft = false
slug = "change-box"
categories = ['wercker']
tags = ['github', 'wercker']
date = "2016-01-27T21:43:05+09:00"
title = "Wercker yaml file の boxを変更してみた"

+++

## deploy 時に install package で失敗する
ベースの box を変更するとどうなるか試してみたところ。
同じ状態で失敗した。

``script``に変更して動作しているのでそのままにすることにする

``box``は**debian**から**ubuntu**に変更してみた。

```
box: ubuntu
build:
  steps:
    - arjen/hugo-build:
```

### GISTS について
サイドにgistsを表示してみました。

当然ですが、このサイトは動的なサイトではないので日々の記事をアップした時点で直近５項目
の公開に設定されているものを取得してページが生成されます。
