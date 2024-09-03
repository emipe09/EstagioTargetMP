

function thereIsLetterA(word){
    word = word.toLowerCase();
    console.log(word)
    var count = 0;
    for (let i = 0; i < word.length; i++){
        if(word[i] == 'a'){
            count++;
        }
    }
    return count;
}

console.log(thereIsLetterA("banana")); // 3
console.log(thereIsLetterA("abAcate")); // 3

