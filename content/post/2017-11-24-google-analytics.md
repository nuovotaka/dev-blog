+++
draft = false
slug = "google-analytics"
categories = ['blog']
tags = ['hugo', 'twentyfourteen']
date = "2017-11-24T13:30:00+09:00"
title = "google analytics"

+++

## Google Analyticsを設置してみた
私の使っているテーマ(twentyfourteen)には、google analyticsが設定できるようになっていなかったので設置してみた。

<!--more-->

色々と探してみるとgoogle analyticsのtemplateなるものが存在するようだ。

[Internal Templates](https://gohugo.io/templates/internal/#google-analytics)

comfig.tomlに```googleAnalytics```のパラメータを設置してそこにuserIDを設定する。

```
googleAnalytics = "UA-123-45"
```

次に下記のコードを```/body```タグの直前などに設置する。

```
{{ template "_internal/google_analytics_async.html" . }}
```

これでgoogle analyticsが設定されている場合とされていない場合でそれぞれよしなに対応してくれる。

```with```を使って行う方法もあるが私は上記を利用するようにした。

