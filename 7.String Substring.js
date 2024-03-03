function solve(word, text) {
    let wordArray = text.split(' ');
    let wordFound = false;
    wordArray.forEach(element => {
        if (word.toLowerCase() == element.toLowerCase()){
            wordFound = true;
        }
    });
    if (!wordFound){
        console.log(`${word} not found!`);
    }
    else{
        console.log(word);
    }
}
solve('javascript','JavaScript is the best programming language')
solve('python','JavaScript is the best programming language'	)