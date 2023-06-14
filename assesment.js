'use strict';
const answers=['###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。'];




const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');
  //ボタンのオブジェクトを取得する。
const assesmentButton = document.getElementById('assesment');
  //入力欄のオブジェクトを取得する。
const userNameInput = document.getElementById('user-name');

assesmentButton.onclick = ()=>{
    //入力欄の値を取得。
  const userName = userNameInput.value;

  //名前が入力されていないときは、処理を終了する。
  if(userName.length===0){
    console.log('処理を抜けました。');
    return;
  }

  //診断機能の結果を表示する。
        //前回の診断結果を削除する。
      resultDivision.innerText = '';

      const result = assesment(userName);

      //TODO 診断結果表示エリアの作成
        //要素のオブジェクトを作成。
      const header = document.createElement('h3');
        //作成したオブジェクトのテキストを入力。
      header.innerText = '診断結果';
        //作成したオブジェクトをresultDivisionの子要素に設定する。
      resultDivision.appendChild(header);

      const paragraph = document.createElement('p');
      paragraph.innerText = result;
      resultDivision.appendChild(paragraph);


  //ツイートボタンを表示する。
      tweetDivision.innerText = '';

      const anchor = document.createElement('a');

      const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      +encodeURIComponent('あなたのいいところ')+
      '&ref_src=twsrc%5Etfw';

      anchor.setAttribute('href',hrefValue)
      //anchor.setAttribute('class','twitter-hashtag-button');
      anchor.className = 'twitter-hashtag-button';
      anchor.setAttribute('data-text',result);
      anchor.innerText = '#あなたのいいところ';

      tweetDivision.appendChild(anchor);

      //ツイートボタンのwidgets.jsスクリプトを設定する。

      const script = document.createElement('script');
      script.setAttribute('src','https://platform.twitter.com/widgets.js');
      tweetDivision.appendChild(script);

};

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
};




/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @returns {string} 診断結果
 */
function assesment(userName){
  //TODO 診断処理を実装する
  let sumOfChars =0;
    //各char文字から文字コードを出して、足していく。
  for(let i=0;i<userName.length;i++){

    sumOfChars += userName.charCodeAt(i);

  }
    //文字コード番号の合計を、回答の数でモッドを取り、添え字を求める。
  const index = sumOfChars%answers.length;

  let result = answers[index];
    //TODO ###userName###をユーザーの名前に置き換える。
  result = result.replaceAll('###userName###',userName);

  return result;
}















