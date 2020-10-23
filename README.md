# PcdloaderTest

### library
- three
  - npm i three
- three-trackballcontrols
  - npm install three-trackballcontrols

#### Angularプロジェクトでjavascriptライブラリを使用する方法
1.src/assrtsにjsファイルをペースト
2.angular.jsonの”scripts”に上記ファイルパスを追加
>”build”: {
>  (省略)
>  "options": 
>    (省略)
>    "scripts": [
>      "src/assets/hello.js"
>    ]
3.index.htmlファイルでjsファイルを呼び出す(headタブ内)
><script src="assets/hello.js"></script>
4.app.ts内で型定義したのちに、呼び出す
>declare var ChangeItem: any;
# anglar-threejs-test
