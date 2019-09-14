+++
draft = false
slug = "not-found-wercker"
date = "2015-11-24T11:02:32+09:00"
categories = ['wercker']
tags = ['github', 'wercker']
title = "Not found wercker yaml file"

+++

## Automated deployments with Wercker

当初は、Hugoにかかれている通りにしたのだがビルドさえもワークしていないことに気づいた。
とりあえず、ビルドが通るように``wercker.yml``ファイルを色々と変えてみるもダメ。

**tab-space**を４にするのが**wercker**の条件だと書いてあったのでそのようにするもダメ。
他の方のをコピー＆ペーストして自分の環境に合うよう変更してもダメ。

<!--more-->

ただ、一度ワーク下のだがちょっとしたビルドが失敗したので修正したらワークしなくなった。
またまた、ダメ。

通常では、リモートのファイルを直接操作することはないのだけれど、**github**にログインして直接ファイルを変更した。
それは、エディタでスペースを**４**に設定していたはずなのに**github**上のそれはスペースが**２**になっていた。

そのため、直接githubのエディタでスペースを**４**に変更。
commit すると**wercker**が走り出し``wercker.yml``ファイルを見つけてくれた。
ビルドが通り、ブランチが作成されやっとのことでホストされた！！

下記がその``wercker.yml``ファイルとなります。
``theme``部分は適宜変更してください。

[{{% figure src="https://farm6.staticflickr.com/5819/22966233010_0c00f111f4.jpg" alt="wercker yaml file" caption="wercker yaml file" %}}](https://www.flickr.com/photos/t-723hamm/22966233010/in/dateposted/)

```yaml
box: debian
build:
  steps:
    - arjen/hugo-build:
        version: "0.15"
        theme: twentyfourteen
        flags: --disableSitemap=true

deploy:
  steps:
    - install-packages:
        packages: git ssh-client
    - lukevivier/gh-pages@0.2.1:
        token: $GIT_TOKEN
        basedir: public

```
``wercker.yaml``で重要なのは**-**ダッシュの前のタブスペースが**４**に設定されていること。
そして、そのあとに続く処理も同様になっていないと認識してくれないようです。

また、Hugo公式では**Adding steps**としてyamlファイルを探せとあるが上記のコードで良いのでこれをタブスペースに気をつけてコピー＆ペーストすれば大丈夫です。
私の場合は、``deploy``項目で``domain``を設定していませんがこの後設定するつもりです。
この状態だと``[your_github_account].github.io/[repo_name]``で公開されると思います。

ドキュメントをしっかりと読まなかった私が悪いのですが、ハマりました。

後一つきになることがあるのでそれをこの記事のポストで確かめてみます。

### 【 追 記 】
2015.12.04

+ Hugoのバージョンが上がりましたので上記コードを下記のように変更しました。

変更前
```yaml
version: "0.14"
```
変更後
```yaml
version: "0.15"
```

本文内のコードはhugoに合わせバージョンを**"0.15"**に変更してあります。

