# スクロール追従ヘッダー表示アニメーション

- スクロールすると上からヘッダーが表示されるスクリプトです。
- JavaScript と CSS で実装しています。

## サンプル

`dist`フォルダにある`index.html`を実行してください。

500px スクロールすると上からヘッダーが上部に張り付いてスクロールに追従します。

![サンプルGif動画](https://raw.githubusercontent.com/wiki/f21wk/FollowingScrollHeader/sample.gif)

## 使い方

### 1. `header`タグに`id="header"`を追加してください。

```html
<header id="header">
  <!-- 各々のHTML -->
</header>
```

### 2. `head`タグの中に`dist`フォルダ内の`css`フォルダ内の`FollowingScrollHeader.min.css`を読み込んでください。

```html
<head>
  <link rel="stylesheet" href="FollowingScrollHeader.min.css" />
</head>
```

### 3.`</body>`の上に`dist`フォルダ内の`js`フォルダ内の`FollowingScrollHeader.min.js`を読み込んでください。

```html
<!-- 既存のHTML -->
<script src="FollowingScrollHeader.min.js"></script>
</body>
```

### 4. `HTML`ファイルを実行してください。

500px までスクロールしてから上からヘッダーが追従するようになります。

<div style="page-break-before:always"></div>

## スクロールに追従させる場所を変える場合

### 1. `dist`フォルダ内の`js`フォルダ内の`FollowingScrollHeader.js`を開いてください。

### 2. 下記の`SCROLL_VAL`の値を変更してください。

```JavaScript
// const SCROLL_VAL = 500;
const SCROLL_VAL = 300;
```

### 3. `</body>`の上に`dist`フォルダ内の`js`フォルダ内の`FollowingScrollHeader.js`を読み込んでください。

```html
<!-- .minの付いたファイルは、コメントアウトするか消してください -->
<!-- <script src="FollowingScrollHeader.mig.js"></script> -->

<!-- ↓を追加 -->
<script src="FollowingScrollHeader.js"></script>

</body>
```
