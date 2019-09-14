+++
draft = false
slug = "Make-usb-installer-osx-el-capitan"
categories = ['Mac']
tags = ['USB', 'el capitan']
date = "2015-10-04T23:22:22+09:00"
title = "OS X El Capitan USB インストーラーを作成"

+++

準備するもの

+ OS X El Capitan (AppStore より) をダウンロード
+ 8GB以上のUSBなど(のリムーバブルメディア or セカンダリの内臓パーティション)

今回の OS X El Capitan は 6GB 使用します。

できれば、USB3.0対応がいいですね。

<!--more-->

## 作成方法

+ その他＞ディスクユーティリティ
+ USBメモリをMacに接続します
+ USBメモリが新品であれば次の作業をスキップして 5. から行ってください。
+ ディスクユーティリティにて、USBメモリを最大限利用できるように内容を消去します
+ USBメモリのボリューム名を「MyVolume」 にします。空白や日本語名称だとUSBメモリを指定できないので名前をつけておきましょう。(ただし、次のコマンドで名称が変わります)
「MyVolume」以外にされた方は次のコードの「MyVolume」の箇所をご自身でつけた名称に変更してください。
+ ターミナルで次のコードを入力します

```
sudo /Applications/Install\ OS\ X\ El\ Capitan.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install\ OS\ X\ El\ Capitan.app --nointeraction
```

+ 最近のUSBメモリは3.0対応が多いので3.0対応であれば転送速度がそこそこ早いのでしばらく待てば出来上がると思います。

#### 参考

Apple サポート

+ {{% external_link href="https://support.apple.com/ja-jp/HT201372" text="OS X の起動可能なインストーラを作成する" %}} 2015/10/09 Apple サポートにて修正されました

Qiita 参考

+ {{% external_link href="http://qiita.com/kei-yamazaki/items/c9bdbb50fbf3950edf50" text="Mac OS X El Capitan ( OS X 10.11 ) インストールUSB作成方法" %}}

Apple サポートのそれぞれの対応ではコマンドの最後に「--nointeraction」を付与していません。
El Capitan のものではありませんが使えました。(最近サポートが``El Capitan``用に書き換えたようです。)

また、このオプションについて検索すると重要であるとの記述があったので一応つけておくことにします。こちらも、このoptionを付与して作成できています。


##### 【 追 記 】

この``createinstallmedia``コマンドは「インストールアプリにしか付属していない」ので通常では使えません。

また、このインストールUSBを利用してクリーンインストールを行う場合は、AirMac Time Capsuleなどの外部ストレージにバックアップを必ず行ってから作業をするようにしてください。

**作業は、ご自身の責任のもと行うようにしてください**


2015.10.22 Mac OS X ( 10.11.1 )

``El Capitan``アナウンス

早速、AppStoreから再ダウンロードしてインストーラのアップデートを行っておきました。
マイナーアップデートなので本体のアップデートはリストアが作動しますので最初からクリーンインストールは行いませんでした。

コマンドは、メジャーアップグレード時同様利用することができました。
