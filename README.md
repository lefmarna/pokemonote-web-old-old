# Pokemonote

[Pokemonote](https://pokemonote.com/)は、『ポケットモンスター』シリーズのゲームを遊ぶ上で便利なツールを公開している**Web アプリケーション**です。

## プログラミング言語

**JavaScript**のフレームワークである「**Vue.js**」をベースにして作られています。UI フレームワークは「**[Vuetify](https://vuetifyjs.com/)**」を採用。必要に応じて自分で**SCSS**も書いています。

また、**TypeScript**も導入し安全性の高いコードに仕上げています。Vue.js との相性もあり、導入にはそこそこ苦戦する結果とはなりました。ですが、型が明確になることのメリットは大きく、曖昧な JavaScript を書き直す過程で学ぶことはとても多かったです。

過去には、「プレーンな JavaScript」や「jQuery」、「[Bootstrap](https://getbootstrap.jp/)」を使って書いていた時期もあり、新しい知識を身につけるたびに、それを活かす形で何度もリニューアルを繰り返しています。今後は、Axios を使って API の取得やログイン認証などの機能も実装していきたいと考えています。

## コードの整形

**ESLint**でエラーチェックとコードの整形を行っています。

[Visual Studio Code](https://code.visualstudio.com/)というエディタソフトを使用しており、「settings.json」に色々と記載して、フォーマットルールを自分好みに少しカスタマイズしていたりもします。

## デプロイを自動化

「**Github Actions**」により、リモートリポジトリに push することでビルドが走り、自動的に**Firebase**の Hosting サービスにデプロイされるようになっています。

元々はローカルリポジトリで開発、Firebase に直接デプロイしていました。GitHub は定期的にバックアップするような形で利用していたのですが、この作業を簡略化したく自動化に挑戦してみました。当初は yml ファイルを全く書いたことがなかったのもあり、だいぶ失敗もしましたが、今となっては良い思い出です。

試行錯誤の末、無事にデプロイを自動化させることに成功しましたが、将来的にはここからさらに拡張して「Twitter に更新情報を投稿」なども自動化していきたいと考えています。

## SPA に対応

SPA（シングルページアプリケーション）という技術を用いているため、ページ遷移の際に読み込みが行われず、快適なブラウジング体験をすることが可能です。SPA での制作には多くの壁がありましたが、その分学ぶことも多かったです。

### リロードすると 404 エラーが出てしまう問題を解決した

元々は「**GitHub Pages**」を利用して、このアプリを公開していました。しかし、リロードすると 404 エラーが発生してしまう問題が発生。404 ページにリダイレクトの処理を記載するなどして、一時的に対応していました。しかしながら、リダイレクトの処理ではトップページへ飛ばすことしかできず、長らく悩んでいました。

そんなある日のこと、以前に勉強していた**Firebase**の Hosting サービスを思い出し、デプロイ先を変更することにしました。デプロイ先を変えるだけで解決する問題とは考えていませんでしたが、[こちらのページ](https://router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B)を参考にすることで、リロード時に 404 エラーが出てしまう問題を無事に解決することができました。

### meta タグの切り替えに対応し、SEO 対策もバッチリ！

SPA では JavaScript によってページの表示を切り替える仕組みとなっているため、通常の設定では meta タグの切り替えが行われず、ブックマークに登録してもらう際などにページのタイトルが反映されません。また、メタディスクリプションも同じになってしまうため、このままでは SEO 的にも問題があります。

そこで、ページの遷移を監視するようにし、ページが切り替わったタイミングで meta タグを書き換える処理を記述しました。meta タグの取得方法であったり、vue-router からタイトルやディスクリプションを引っ張ってくるやり方など、苦戦する箇所も少しありましたが、最終的には無事に切り替え機能を実装することができました。

また、**sitemap.xml**や**robots.txt**も設置しており、検索流入もしっかり意識した作りとなっています。

### 初期描画を高速に！

SPA は最初に全てのリソースを読み込もうとするため、「**初期描画が遅い**」というデメリットがありました。しかし、Vue.js には「最初の 1 ページだけ表示させ、残りはアイドルタイムを利用して裏での読み込みを行う」といった機能があります。これを積極的に活用しているため、読み込み時間に関してはかなり最適化されています。
