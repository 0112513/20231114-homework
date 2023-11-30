function checkGuess() {
    let guessNumber = document.getElementById('guessNumber').value;
    let answerNum = document.getElementById('answerNum');
    let answer = document.getElementById('answer');

    let a = [];
    let b = [];

    for (let i = 2; i <= guessNumber; i++) {
        a[i] = true;
    }

    for (let j = 2; j <= guessNumber; j++) {
        if (a[j] == true) {
            b.push(j); 
            for (let i = j * j; i <= guessNumber; i += j) {
                a[i] = false;
            }
        }
    }

    answerNum.innerText = "總共 "+ b.length + " 個";
    answer.innerText = b.join(', ');
}

