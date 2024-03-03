function solve(text) {
    let result = text.split(' ')
    result.forEach(word => {
        if (word.length > 1 && word.startsWith('#')) {
            if(!/[0-9]/.test(word)){
                console.log(word.slice(1));
            }
        }
    });

}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')