function solve(words, text) {
    arr = text.split(' ');
    words = words.split(', ');
    arr.forEach(word => {
        if (word.startsWith('*')) {
            words.forEach(replaceWord => {
                if (word.length === replaceWord.length) {
                   text = text.replace(word, replaceWord)
                }
            });
        }
    });
    console.log(text);
}
solve('great', 'softuni is ***** place for learning new programming languages')
solve('great, learning', 'softuni is ***** place for ******** new programming languages')