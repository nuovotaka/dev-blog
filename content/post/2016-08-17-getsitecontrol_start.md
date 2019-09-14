+++
draft = false
slug = "getsitecontrol_start"
categories = ["analytics"]
tags = ["analytics", "getsitecontrol"]
date = "2016-08-17T19:24:43+09:00"
title = "GetSiteControlをgoHugoで始めてみた"

+++

Hugoは静的サイト生成ツール。私のサイトはこれで生成をしGitHub上で運用している。

GetSiteControlは私のサイトの様な動的でない静的なサイトに非同期の解析ツール、プロモーションポップアップなどを
追加するためのいわゆるツールになります。

これをコードを埋め込んだだけで実現できてしまうのは便利すぎる!!

## GetSiteControlの始め方

{{% external_link href="https://getsitecontrol.com/" text="GetSiteControlのサイト" %}}

+ あなたの名前
+ メールアドレス
+ パスワード
+ 対象とする Webサイト(あとで変更できるので大丈夫です。無論、必要なコードが埋め込まれていることが大前提です。)

これらを先程のリンクから入力しサインアップしてください。

## インストール方法
インストールと言ってもコードをHTMLのbodyタグの前に設置すれば大丈夫です。

ただし、生の埋め込みコードをそのままboyタグの直前に設置しても動きません。

goHugoの場合で記述していますので悪しからず。

今回は partials の下に ```getsitecontrol.html``` ファイルを作ってそこへ表示されるコードを記述
しておきました。
呼び出し側は

```
{{ partial getsitecontrol.html . }}

```

これで作動するはずです。

### サインアップ後の Widget の設定

1. ウィジットを作成する
[{{% figure src="https://c1.staticflickr.com/9/8644/29024407776_a09f55a43d.jpg" alt="Create widget" caption="Create widget 画面" %}}](https://www.flickr.com/photos/t-723hamm/29024407776/in/dateposted/)
 + プロモーション広告やSNSフォロー、シェアなどの項目が表示されるのでどれかをクリック
[{{% figure src="https://c4.staticflickr.com/9/8439/28439527883_ff0ec9fd08.jpg" alt="Select widget" caption="widget の選択" %}}](https://www.flickr.com/photos/t-723hamm/28439527883/in/photostream/)
 
2. プロモーション広告 widget の作り方
 + 先ほどの画面で Promo を選択
 + Widget を表示する位置や色などを変更
[{{% figure src="https://c5.staticflickr.com/9/8127/29024409836_76c9777ff6.jpg" alt="Create Promo widget" caption="Promo widget 制作画面" %}}](https://www.flickr.com/photos/t-723hamm/29024409836/in/photostream/)
 + Widget の文言を変更
[{{% figure src="https://c7.staticflickr.com/9/8243/29024410806_d1d00c708f.jpg" alt="Create content" caption="widget の文言変更画面" %}}](https://www.flickr.com/photos/t-723hamm/29024410806/in/photostream/)
 + 表示される頻度を変更
[{{% figure src="https://c1.staticflickr.com/9/8558/28770972360_c60351a6a7.jpg" alt="add behavior" caption="widget の表示頻度の設定画面1" %}}](https://www.flickr.com/photos/t-723hamm/28770972360/in/photostream/)
[{{% figure src="https://c3.staticflickr.com/9/8389/28770975130_b0475263be.jpg" alt="add behavior" caption="widget の表示頻度の設定画面2" %}}](https://www.flickr.com/photos/t-723hamm/28770975130/in/photostream/)
 + 対象とするターゲットの選択(無料の場合は制限あり)
[{{% figure src="https://c3.staticflickr.com/8/7777/28770976410_00d0319f32.jpg" alt="Targeting" caption="widget の対象先の設定画面" %}}](https://www.flickr.com/photos/t-723hamm/28770976410/in/photostream/)
 作成の流れはこんな感じになります。

 すべての設定が終了したらokをクリックして設定を保存してください。

+ 表示させたくないページを設定することができます。
[{{% figure src="https://c3.staticflickr.com/9/8277/28770977410_c27be6cdb6.jpg" alt="Not widget" caption="widget を非常時設定項目" %}}](https://www.flickr.com/photos/t-723hamm/28770977410/in/photostream/)


3.Widgetを動作させるサイトの変更方法

 + Site settings から General の Nameに正しい URL を入れてください
[{{% figure src="https://c3.staticflickr.com/9/8220/29024423866_12fe58b9d0.jpg" alt="Site settings" caption="Site settings の画面" %}}](https://www.flickr.com/photos/t-723hamm/29024423866/in/photostream/)

4.goHugoへコードをインストール

 + hugoへのインストールは直接コードを記述しただけではダメなので patials フォルダ以下へファイルを作りその中へ埋め込みコードを入れてください。
 呼び出し方法は先に記述してありますので参考までに。
[{{% figure src="https://c3.staticflickr.com/9/8296/29024423706_7249a3e2dd.jpg" alt="Install widget" caption="Install widget 画面" %}}](https://www.flickr.com/photos/t-723hamm/29024423706/in/photostream/)
 
5.各種インテグレーション
[{{% figure src="https://c5.staticflickr.com/9/8496/29024423516_45ffbae947.jpg" alt="integrations" caption="各種連携 画面" %}}](https://www.flickr.com/photos/t-723hamm/29024423516/in/photostream/)

6.widgetの動作状況

 + Activate を確認してください。
[{{% figure src="https://c3.staticflickr.com/9/8372/29024423386_d3c8a710c4.jpg" alt="Activate widget" caption="Activate widget 設定項目" %}}](https://www.flickr.com/photos/t-723hamm/29024423386/in/photostream/)

7.ダッシュボードのサンプル画面(現在稼働中)
[{{% figure src="https://c1.staticflickr.com/9/8486/29024423336_13e46a83b1.jpg" alt="sample widget" caption="sample widget 画面" %}}](https://www.flickr.com/photos/t-723hamm/29024423336/in/photostream/)


## GetSiteControlの始め方

{{% external_link href="https://getsitecontrol.com/" text="GetSiteControlのサイト" %}}
アフィリエイトではありませんので直接クリックされて大丈夫です。

T-シャツ販売中につき応援よろしくお願いします。
