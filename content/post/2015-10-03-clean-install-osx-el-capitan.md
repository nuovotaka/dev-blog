+++
draft = false
slug = "clean-install-osx-el-capitan"
categories = ['Mac']
tags = ['mac', 'el capitan']
date = "2015-10-03T16:21:59+09:00"
title = "OS X El Capitan クリーンインストールが１日作業となりました"

+++

## Xcode使ってアプリ開発を行う方、開発用に使われる方

{{% external_link href="http://brew.sh/index_ja.html" text="Homebrew" %}}はもちろん、OSアプデの前にやるが吉。

Homebrew は rubyのバージョン管理をする rbenv などコマンドラインの管理を行います。

※ Homebrewのインストールで、Xcodeを求められたら AppStore からインストし、``Xcode command line Tool ( xcode-select --install ) ``をインストすること。

のちほど削除することになりますが、XcodeとOS X が対になっているようなので仕方ありません。Homebrew をインストールするために必要になるのでまずは時間の確保を。

<!--more-->

とにかくダウンロードするデータ量が大きい＆世界中で「今だ！」っと思っている人たちとリソースの取り合いをしなければいけないので、AppleのCDNがもってくれるか(サーバーダウンしないか)どうか？
それが、問題です。

## クリーンインストールの作業開始！バックアップを取る

AirMac Time Capsule などを使ってバックアップをとります。
デスクトップの整理やらいらないアプリの削除とバックアップに追加しなくてはいけない項目が増えたので最初から行ったため時間を要しました。

AppStoreより OS X ( El Capitan ) ( 6GBあり2h少々時間がかかりました。 ) をダウンロード＆インストします。

> {{% external_link href="http://wayohoo.com/mac/tips/how-to-clean-install-os-x-el-capitan.html" text="Mac OS X ( El Capitan ) のクリーンインストール" %}}を参考にさせていただきました。

## 移行アシスタントを使ってバックアップデータの移行作業

El Capitan となった新しい OS X へデータの移行を行いますが、appも移行されます。
( 宅内有線LANで1h以内でした。MBPR13inch 256GB 1/4 - 1/3 程度の使用量です。

また、有線LAN回線は光回線1G対応にスター接続されたギガバイト対応Ethernetにしてあります。)
El Capitan 用のXcodeはバージョンが７にあがっているのでこの点を対処しないといけません。

{{% external_link href="http://wayohoo.com/mac/beginners/how-to-use-migration-assistant-for-os-x-el-capitan.html" text="Mac OS X ( El Capitan ) にバックアップデータの移行" %}}とりあえず、ここまでの状態で新しい OS にデータが移行され使えるようになります。
あと一息です。

## アプリのアップデート

AppStore にてアップデートするアプリがあった場合は、appのアップデートをしてください。
Yosemite より前の方は iPhoto.app がアップデートで残ります。
写真.app に移行統合された場合は、次で紹介する AppCleaner というアプリで削除しても大丈夫です。

**写真.app に移行しない状態での削除はデータが消える可能性があるのでご注意を！！**

## 古いXcodeを削除し、新しいXcodeをダウンロード＆インストールする

古いXcodeの削除に AppCleaner というアプリを使いました。
新しいXcodeのダウンロード＆インストールを行います。

次にXcodeのライセンス契約を行います。(コマンドラインから行う方法もあるようですが、先にアプリを立ち上げてしまったので契約条項が出て確認を取った次第です。)

Xcode コマンドライン ツールを一応インストしました。

## brew doctor を試してみる

すると

{{% figure src="https://farm1.staticflickr.com/614/21909450215_150a34a8a6.jpg" alt="brew doctorコマンドの結果と対処方法の画像" caption="brew doctorコマンドの結果と対処方法の画像" %}}

エラーメッセージというか注意が表示された

メッセージの内容は、Homebrew で使用されている ``/usr/local`` が使用できないようになっている。

El Capitan から
{{% external_link href="https://en.wikipedia.org/wiki/System_Integrity_Protection" text="System Integrity Protection (SIP、別名 rootless" %}} の関係で ``/System, /bin, /sbin, /usr`` は ``sudo``でも変更ができないようになっている。
その関係上`` /usr/local ``ディレクトリ以下のオーナー変更により使用が許可されるというものです。

上記画像の赤字で囲ってある部分のメッセージがその許可の変更を行うコマンドになります。
そのままターミナルから行えば先ほどのコマンドが通るようになります。
（ブログシステム上コードを記載できないので先ほどのをチェックしてください。もしくは、後に記載する回避策を確認してください。）

{{% figure src="https://farm6.staticflickr.com/5698/21721376020_be0fe631ce.jpg" alt="ディレクトリ以下のオーナーが変更された画像" caption="ディレクトリ以下のオーナーが変更された画像" %}}

ディレクトリ以下の*オーナー変更コマンド*を行うと*ディレクトリ以下のオーナー*が変更されたのがわかる。

``brew doctor`` を行うといつも通りの状態になりました。


【 感 想 】
なんだかんだで１日作業になってしまいました。
OS X ( El Capitan ) = 6GB, Xcode7 = 3GB 程度。Yosemiteにしていなかったので標準Appのダウンロード＆インストールで時間が必要でした。


私の場合は、作業前にデスクトップからバックアップのデータなどを整理してからバックアップの取り直しをしたので時間が必要となった次第です。
写真、動画データなどが 少なかったのが幸いしました。

次は、ansible で環境作業を楽にしたいと思います。
Macでの移行作業は初めてでしたが、Apple ID が紐付いているのと iCloud がいい仕事しますね。
Windowsから重い腰を上げての完全移行組ですが、Unix系の流れを汲んでいるだけありデータの散らばりがなく楽です。

win の今を知らないのでわかりませんけれど。

何か開発したい人は Homebrew
をまず入れるべきです。
OS X ( El Capitan ) からスタートする場合は、
{{% external_link href="https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/El_Capitan_and_Homebrew.md" text="回避策を行う必要がある" %}}({{% external_link href="http://www.softantenna.com/wp/mac/os-x-el-capitan-and-homebrew/" text="日本語翻訳版" %}})ようです。
別ディレクトリを作ってそちらで運用を考えているようですが、本家の解決策を待ちましょう。

#### 最後に

今回の作業は全て有線LANにて作業を行いました。

#### 【 追 記 】

実は、事前にこちらのサイトの内容をチェックしていて「ディスクのアクセス権の修復」を行っております。

> {{% external_link href="http://itea40.jp/technic/mac-beginners/os-x-el-capitan/os-x-el-capitan-is-officially-released-on-october-1-2015/" text="「OS X El Capitan」明日リリース！アップデートに失敗しないための5つの準備" %}}

アクセス権の修復はOSアップデート時のお作法のようなので記載をしておきます。
今回のOS X El Capitan 以降のアップデートでは必要なくなる模様です。

2015.10.09 追加
Macに移行してから初めてのOSアップデートでググった結果この方法を選んだわけですが、{{% internal_link href="http://blog.nuovotaka.com/2015/10/make-usb-installer-osx-el-capitan/" text="インストールUSB" %}}を利用すると初回のOSインストールを省くことができます。

*「コマンド+R」*: OS X での復元
再起動を行うときに起動オプションとして「コマンド+R」 キーを同時に押していることで、復元モードでMacを起動することができます。

Apple サポート

> {{% external_link href="https://support.apple.com/ja-jp/HT201314" text="OS X での復元について" %}}

よって”復元、再インストール”なのでOSアップデートの場合は、一旦ダウンロード & アップデートインストールが必要になります。（クリーンインストールを考えている場合は時間がかかる）

インストールUSBからクリーンインストールする方法
必ずバックアップ後に行ってください。復旧できなくなります。
