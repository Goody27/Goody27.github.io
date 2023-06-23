

function butotnClick(){
    key = keyText.value;
    if (key.indexOf('血液') == 0){
        msg.innerText = '血液型は' + 'B型' + 'Deth';
    }else if (key.indexOf('名前') == 0){
        msg.innerText = '本名は語りたくないのでGoodyとでもいっておきましょう';
    }else if (key.indexOf('星座') == 0){
        msg.innerText = '蠍座';
    }else if (key.indexOf('年') == 0){
        msg.innerText = '二十一世紀少年の最初の少年たちの一人';
    }else if (key.indexOf('芸人') == 0){
        msg.innerText = 'ラランドが好きです！ナンバーワンはアンタッチャプルです！';
    }else if (key.indexOf('友達') == 0){
        msg.innerText = '最近は毎日のように友達と遊んでいます！本当に幸せで楽しい毎日を過ごさせてもらって折尾駅';
    }else if (key.indexOf('趣味') == 0){
        msg.innerText = '趣味は自分自身を非検体として実験を繰り返すことでふ。\n最近はテニスやバド、二郎系などのスポーツを楽しんでます。';
    }else if (key.indexOf('住') == 0){
        msg.innerText = '今は大学の方に週5で泊まっています。一人暮らしがしたいという欲がそうさせてるみたいです';
    }else if (key.indexOf('憧れ') == 0){
        msg.innerText = '憧れはアイアンマンです。でも人間味としてはスパイダーマンがめっちゃ好きです。';
    }else if (key.indexOf('夢') == 0){
        msg.innerText = '夢は自由に生きること！好きなように料理(二郎？家系？)を作り、好きな人や子供、友達と一緒に食事をするそんな感じの感じです\nそのためにとりあえず社長になって世界でもぶん回してやろうかと思ってます。';
    }else if (key.indexOf('映画') == 0){
        msg.innerText = '好きな映画はアベンジャーズシリーズです。特にアイアンマンとスパイダーマンが好き。';
    }else if (key.indexOf('経験人数') == 0){
        msg.innerText = 'どうなんでしょうか。0.325とでもいっておきましょうか。人類的には？っていう話ですかね？';
    }else if (key.indexOf('タイプ') == 0){
        msg.innerText = '好きなタイプは火属性です。。。\nあと笑顔が素敵な方が好きですね';
    }else if (key.indexOf('歌') == 0){
        msg.innerText = '最近はクリープハイプやちょいシンガーズハイ、vaundy、マイヘア、インディゴあたりを聞いてます。乗れる歌が基本好き';
    }else if (key.indexOf('彼女') == 0){
        msg.innerText = '彼女は持ってません。そろそろ購入しようかなって思ってるんですがどこに売ってるんですか？\n知ってる人いたら教えてください。';
    }else if (key.indexOf('学校') == 0){
        msg.innerText = '北九州私立大学の情報システム工学科で芋芋しています。\n今は学校に住んでいます。';
    }else if (key.indexOf('誕生日') == 0){
        msg.innerText = '11月16日';
    }else if (key.indexOf('本') == 0){
        msg.innerText = '本はそこそこ読みまして、脳科学系の本を読むことが好きですね~~~~~\n最近はど貧乏なので栄養学の本を読んで生きながらえてます。';
    }else if (key.indexOf('おちんぽこ') == 0){
        msg.innerText = 'なかなかのしもしもでありながらお上品な言い方をするお方ですね！お友達になりましょう！';
    }else if (key.indexOf('出身') == 0){
        msg.innerText = '福岡県の右の方の田舎っぺ育ちです';
    }else if (key.indexOf('アニメ') == 0){
        msg.innerText = '最近好きなのはワンピースでヒロアカとかも良くて、Re0とかも好きですね〜';
    }else if (key.indexOf('漫画') == 0){
        msg.innerText = 'ワンピースですね〜人生の教訓になっている漫画で言ったら陰の実力者になりたくてなんかは教訓だす。';
    }else if (key.indexOf('好きな人') == 0){
        msg.innerText = 'あなたかもしれません。連絡待ってます❤️';
    }else if (key.indexOf('好き') == 0){
        msg.innerText = '好きなものは機械類、でamazonのおすすめもパソコンとか機械機械していますね。\n好きな食べ物は二郎系ラーメン!\nそろそろ二郎で鍛え上げたワシワシで髪型もワシワシになってしまうのではないかと心配に心肺が追いつく頃合いだと思われます。';
    }else {
        msg.innerText = 'そちらは設定しておりませんなのか特殊すぎる文字すぎると思われます。';
    }
keyText.value = '';
}

let keyText = document.getElementById('keyText');

let msg = document.getElementById('msg');

let checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', butotnClick);