+++
draft = false
slug = "webhooks-setting"
categories = ['wercker']
tags = ['github', 'wercker']
date = "2015-11-24T12:53:28+09:00"
title = "Github Webhooks Setting"

+++

## WerckerとGithubを使って自動で静的サイトをdeployするときのgithubの設定は？

各リポジトリの``Settings``に``Webhooks & services``という項目がある
ここで、``Webhooks``の内容を確認してみると**Which events would you like to trigger this webhook?**と書かれたところにイベントを設定するところがある。

<!--more-->

今回は**gh-pages**で``Project Pages``をwerckerを使って自動化したい。
**Branch**を作成、削除する項目があるがそれとは別に``Pages build``が存在する
チェックがなくてもブランチが作られるのか？
