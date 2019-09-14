+++
draft = false
slug = "USE-usb-install-osx-el-capitan"
categories = ['Mac']
tags = ['USB', 'El Capitan']
date = "2015-10-09T13:56:53+09:00"
title = "OS X El Capitan インストールUSBよりクリーンインストール"

+++

2015.10.09(現在)
Mac OS X 10.11 El Capitan が最新のOSとなり、AppStoreよりダウンロード可能になっています。

WindowsからのMac移行組はOSアップデート後の処理がWinより楽です。
ただし、しっかりとバックアップを取っていることが必須です。

MacのOSは良くできていて最新OSインストール後それまでの環境を移行することができます。

動画データなどある場合は、時間がかかるかもしれませんが数十GB程度ならば多少の時間を確保するだけで移行作業が終了するので 試す価値はあるかと思います。

Yosemiteへのアップデート時に起こった長時間移行問題は解消しているようです。
ただし、OSのダウンロードに時間が必要となるので悪しからず。

今回は、インストールUSBを作成しそれを使ってクリーンインストールする方法を書きます。

<!--more-->

USB 3.0対応の8GB以上のUSBを用意してください。

## 準備

+ AppStore から El Capitan をダウンロードする
+ AirMac Time Capsule または 外部ストレージにバックアップをとります。
+ {{% internal_link href="http://blog.nuovotaka.com/2015/10/make-usb-installer-osx-el-capitan/" text="インストールUSBディスクを作成" %}}

## クリーンインストールの開始

+ 作成したインストールUSBをMacにさす
+ Startup Manager ( option ) モードで起動する

#### 方法は次の通り

+ 左上のアップルロゴから再起動``option``キーを押しながらMacが起動するのを待つ
+ ディスク選択画面が表示されたら「Install Mac OS X El Capitan」を選択し``return``を押下
+ Apple ロゴが表示された後 OS X Utilities (ユーティリティ) が起動する
+ Disk Utility (ディスク ユーティリティ) を選択しOS XをインストするSSD内容を消去する
+ Install OS X (OS再インストール) を選択し再起動されるのを待つ


## データ移行

+ 移行アシスタントでデータ移行

> {{% external_link href="http://wayohoo.com/mac/beginners/how-to-use-migration-assistant-for-os-x-el-capitan.html" text="Mac OS X ( El Capitan ) にバックアップデータの移行" %}}

移行データがTB(テラバイト)ある場合はそれなりの時間を覚悟しないといけません。
また、移行元のSSD or HDD の性能により時間もそれぞれです。
アプリを再インストールする選択もできますので それによってもかわります。

## アップデートについて

+ アプリでインストールUSBを作成するものもありますが種々の問題がありましたので、ターミナルからコマンドで作成する方法を勧めます。(ターミナル操作に理解のある方のみ行ってください。)
+ Windowsの時よりもあっという間に終了しますので、常に使われているappの最新OSへの対応をチェックしてアップデートを検討してみてください。

##### 《 ご注意 》

*この作業は既存データの消去作業を伴うため確実なバックアップを。また、すべての作業は自己責任で行ってください*

####【 追 記 】

**参 考**

{{% external_link href="http://ipod.item-get.com/2015/10/os_x_el_capitan.php" text="OS X El Capitan のクリーンインストール" %}}
