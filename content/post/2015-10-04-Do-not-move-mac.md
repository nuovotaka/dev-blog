+++
draft = false
slug = "Do-not-move-mac"
categories = ['Mac']
tags = ['mac', 'safe mode']
date = "2015-10-04T06:06:07+09:00"
title = "Mac が起動しない"

+++

## こんなことはありませんか？

Mac が立ち上がらない、電源が入らない、「じゃーん」っと鳴らない。

Macで電源ボタンを押しても起動しない。音信不通状態。
実は、今回のMac OSアップデートで一度焦ってしまった。

<!--more-->

``El Capitan``のインストールが終了していないのに、途中で終わったと思いこみ電源ボタンを押していた。
スリープがかかったのか何なのかはわからないが、ダウンロードも長いがインストも長いので離席している間に終わったと思い込んだのがそもそもの問題の始まりでした。

そもそもOSのインストールなので再起動が勝手にかかるようにできている。

幸いなことに復旧できたのでそのTipsをシェアしたいと思います。


## OSのセーフモード(セーフブート)

OSのインストール作業を行っている時なのでSMU(システム管理ユニット)またはPMU(電源管理ユニット)をリセットなどの対処方法に該当しない。


アップルのサポートより

+ {{% external_link href="https://support.apple.com/ja-jp/HT1149" text="電源の確保がされているか？" %}}
+ {{% external_link href="https://support.apple.com/ja-jp/HT204267" text="コンピュータの電源が入らない" %}}
+ {{% external_link href="https://support.apple.com/ja-jp/HT201262" text="OSのセーフモードを試す" %}}
+ {{% external_link href="http://www.apple.com/jp/retail/storelist/" text="Apple直営店" %}} or {{% external_link href="https://locate.apple.com/country" text="サービスプロバイダー" %}} に問い合わせる


### OSのセーフモードの方法

電源が落ちている(電源ボタンを10秒以上長押ししても起動しない) などの状態であれば。。。
「SHIFT + 電源」(SHIFTキーを押しながら 電源ボタンを押してください)
画面にアップルロゴが 表示されたら手を離してください。

インスト途中などであれば電源の確保とインターネット回線の接続をしてください。
処理が継続していきます。

#### ことわり

OSのインストを途中で中断したものを現在使用しているわけではありません。
AppStoreからダウンロード＆インストール作業中に起こったハプニングです。

最新のOSは{{% external_link href="https://support.apple.com/ja-jp/HT201314" text="リカバリーモード" %}}からSSDの削除とOSの再インストを行っております。

