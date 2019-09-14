+++
draft = false
slug = "dle-control-code"
categories = ["blog"]
tags = ["hugo", "wercker"]
date = "2016-01-08T13:48:54+09:00"
title = "DLE control codeが編集で入りエラーとなった"

+++

## vscodeでDLE制御コードが見えないので注意
普段、Visual Studio Code で記事を書いています。

いつもは``hugo server -w -D``で記事を読み確認をしてからGitHubへプッシュしている。

### 原因は？
``vscode``の見た目をチェックできる機能で確認した。

``hugo server``を立ち上げてエラーの確認をしなかった。

### エラーとなった要因は？
記事のヘッド部分に制御コード(DLE)が入っていた

前の記事のヘッド部分をコピーしたため

### GitHubへプッシュする前の注意事項

``vscode``では``DLE``の制御コードが表示されない。(私の設定のためなのか不明)

``hugo server``で表示されることの確認
``sublime text``などで制御コードがないことを確認する。

