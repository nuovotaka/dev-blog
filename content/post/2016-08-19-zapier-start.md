+++
draft = false
slug = "zapier_integrations"
categories = ["integrations"]
tags = ["integrations", "zapier"]
date = "2016-08-19T15:43:53+09:00"
title = "zapier で連携してみた"

+++

今回は先日稼働させた getsitecontrol と slack を連携したいと思います。
## zapierの始め方
{{% external_link href="https://zapier.com" text="zapierのサイト" %}}

### sign up
[{{% figure src="https://c6.staticflickr.com/9/8612/28463357133_3ccd6c5d30_b.jpg" alt="zapier home" caption="zapier home画面" %}}](https://www.flickr.com/photos/t-723hamm/28463357133/in/dateposted/)
[{{% figure src="https://c3.staticflickr.com/9/8142/28794897290_1c9c411a37.jpg" alt="zapier sign up" caption="zapier sign up 画面" %}}](https://www.flickr.com/photos/t-723hamm/28794897290/in/photostream/)

### Login
[{{% figure src="https://c1.staticflickr.com/9/8392/28794899440_c86a66b910.jpg" alt="zapier Login" caption="zapier Login 画面" %}}](https://www.flickr.com/photos/t-723hamm/28794899440/in/photostream/)

Login し連携できるアプリケーションを選択する

### 連携の方法
まずは検索する
[{{% figure src="https://c4.staticflickr.com/9/8145/28463366243_8260bf37ec.jpg" alt="search" caption="検索する画面" %}}](https://www.flickr.com/photos/t-723hamm/28463366243/in/photostream/)
 + getsitecontrol を探す
[{{% figure src="https://c7.staticflickr.com/9/8330/29048448686_dc09ce566b.jpg" alt="search getsitecontrol" caption="getsitecontrol を検索する画面" %}}](https://www.flickr.com/photos/t-723hamm/29048448686/in/photostream/)
 + slack を探す
[{{% figure src="https://c8.staticflickr.com/9/8069/28463378343_c3cd409993.jpg" alt="search slack" caption="slack を検索する画面" %}}](https://www.flickr.com/photos/t-723hamm/28463378343/in/photostream/)

いろいろと表示されますが一番下にあるもので行います。

 + 点の部分でクリックすると下図のように表示されるので「Make A Zap」をクリックする
[{{% figure src="https://c4.staticflickr.com/9/8074/28463378123_85d9ee8f27.jpg" alt="make a zap" caption="Zapを作成する画面" %}}](https://www.flickr.com/photos/t-723hamm/28463378123/in/photostream/)

 + getsitecontrol を選択
[{{% figure src="https://c3.staticflickr.com/9/8205/29048448506_a4ea56f3d6.jpg" alt="select getsitecontrol" caption="getsitecontrol を選択" %}}](https://www.flickr.com/photos/t-723hamm/29048448506/in/photostream/)
 + getsitecontrol Trigger 設定
[{{% figure src="https://c2.staticflickr.com/9/8313/28463378073_2cd9d1589d.jpg" alt="getsitecontrol Trigger" caption="Triggerの設定" %}}](https://www.flickr.com/photos/t-723hamm/28463378073/in/photostream/)
 + getsitecontrol account チェック
[{{% figure src="https://c1.staticflickr.com/9/8051/29048448016_c433ddcb95.jpg" alt="getsitecontrol account" caption="accountのチェック" %}}](https://www.flickr.com/photos/t-723hamm/29048448016/in/photostream/)
 + getsitecontrol Submission 設定
[{{% figure src="https://c2.staticflickr.com/9/8131/29004589801_ae3992d83f.jpg" alt="getsitecontrol Submission" caption="Submissionの設定" %}}](https://www.flickr.com/photos/t-723hamm/29004589801/in/photostream/)
 + getsitecontrol Submission Site URLを選択する
[{{% figure src="https://c4.staticflickr.com/9/8369/28463377963_96c5565690.jpg" alt="set site url" caption="Site URL を設定" %}}](https://www.flickr.com/photos/t-723hamm/28463377963/in/photostream/)
 + contact widget を選択する
[{{% figure src="https://c7.staticflickr.com/9/8251/28976000542_5296f2b00b.jpg" alt="select contact widget" caption="contact widgetを選択" %}}](https://www.flickr.com/photos/t-723hamm/28976000542/in/photostream/)
 + getsitecontrol のテストを終了させ次へ
[{{% figure src="https://c2.staticflickr.com/9/8379/29004589681_e110e66e54.jpg" alt="test getsitecontrol" caption="getsitecontrolをテスト" %}}](https://www.flickr.com/photos/t-723hamm/29004589681/in/photostream/)

 + slack を選択する
[{{% figure src="https://c7.staticflickr.com/9/8421/28976000422_995f7aa659.jpg" alt="select slack" caption="slackを選択" %}}](https://www.flickr.com/photos/t-723hamm/28976000422/in/photostream/)
 + slack の動作を設定する
[{{% figure src="https://c1.staticflickr.com/9/8032/29048447496_82a41e9127.jpg" alt="select slack action" caption="slackの動作の設定" %}}](https://www.flickr.com/photos/t-723hamm/29048447496/in/photostream/)
 + slack accountのチェック
[{{% figure src="https://c8.staticflickr.com/9/8605/29004589471_1e75a5ed15.jpg" alt="check slack account" caption="slack accountのチェック" %}}](https://www.flickr.com/photos/t-723hamm/29004589471/in/photostream/)
 + slack のチャンネル メッセージの設定
[{{% figure src="https://c2.staticflickr.com/9/8889/29004589561_ba4aef9973.jpg" alt="Set up slack channel message" caption="slackのチャンネルメッセージ設定" %}}](https://www.flickr.com/photos/t-723hamm/29004589561/in/photostream/)
 + slack チャンネル メッセージの設定方法
[{{% figure src="https://c1.staticflickr.com/9/8078/29048447256_8afcdbe11c.jpg" alt="Set up slack channel message" caption="slackのチャンネルメッセージ設定方法" %}}](https://www.flickr.com/photos/t-723hamm/29048447256/in/photostream/)
 + slack チェンネル メッセージの設定例
[{{% figure src="https://c1.staticflickr.com/9/8067/28976000232_de6ec78e06.jpg" alt="Set up slack channel message" caption="slackのチャンネルメッセージ設定例" %}}](https://www.flickr.com/photos/t-723hamm/28976000232/in/photostream/)
 + slack チェンネル メッセージの設定をして次へ
[{{% figure src="https://c6.staticflickr.com/9/8517/29004589341_9b46e7ba52.jpg" alt="Set up slack channel message" caption="slackのチャンネルメッセージ設定" %}}](https://www.flickr.com/photos/t-723hamm/29004589341/in/photostream/)
 + slackのテスト
[{{% figure src="https://c1.staticflickr.com/9/8422/28976000112_ff4e2ffd1d.jpg" alt="test slack" caption="slackのテスト" %}}](https://www.flickr.com/photos/t-723hamm/28976000112/in/photostream/)
 + slackの設定完了
[{{% figure src="https://c5.staticflickr.com/9/8611/29048446756_b0219d3706.jpg" alt="Set up slack" caption="slackの設定完了" %}}](https://www.flickr.com/photos/t-723hamm/29048446756/in/photostream/)

### 作成した連携を動作させる
 + 動作状態にするには ON にするだけです。
[{{% figure src="https://c5.staticflickr.com/9/8721/28976000052_70145060d3.jpg" alt="activate" caption="Zapの動作状態画面" %}}](https://www.flickr.com/photos/t-723hamm/28976000052/in/photostream/)


### getsitecontrol の設定
 + edit で integrations を選択
[{{% figure src="https://c6.staticflickr.com/9/8046/29004589141_d27cd976b7.jpg" alt="make a zap" caption="Zapを作成する画面" %}}](https://www.flickr.com/photos/t-723hamm/29004589141/in/photostream/)
 + emailからの通知のチェックを外す
[{{% figure src="https://c3.staticflickr.com/9/8034/28975999962_c000d30ba5.jpg" alt="make a zap" caption="Zapを作成する画面" %}}](https://www.flickr.com/photos/t-723hamm/28975999962/in/photostream/)

これで、メールではなく slack へメッセージが飛んでくることになる。
メッセージはダウンロードも可能でxlsx形式なので表計算ソフトに対応しているため
一覧で見ることも可能だ。
