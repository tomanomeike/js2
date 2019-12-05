// 2 uzduotis: Kadangi siek tiek apsilom su js, kita uzduotis bus siek tiek sudetingesne. Vel tas pats tekstas ir principas panasus, 
// bet dabat output'as turetu buti toks [{word: 'the', wordLengh: 3, count: 7 }, ...] 
// Jei pries tai buvo objectas {the: 7}, dabar turetu buti array'us [], ir jo viduje objetkas, 
// kuris savyje turi 3 dalykus: koks tai zodis, koks zodzio ilgis, ir kiek kartu jis buvo tekste

const paragraph = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."


function textArray(text){

    const wordCounts = []; // <- cia turetu buti objektas, o ne masyvas. 
    const myArray = [];
    const text1 = text.toLowerCase();
    const words = text1.replace(/[.,\/;:]/g,"")
                      .replace(/\d+/g, '')
                      .replace(/\s{2,}/g," ")
                      .split(" ")

    words.forEach((word) =>{
        if(!wordCounts[word]){ // <- Objekta galima pasiekti per `key` {myKey: myValue}; o  masyvus galima pasiekti per ju indeksus const a = ['a', 'b', 'c'] => a[0] === 'a' 
            wordCounts[word]=1;
        }
        else{
            wordCounts[word]++;
            const wordLenght = word.length;
            const count = wordCounts[word];
            const textObject = {word: `${word}`, wordLenght: `${wordLenght}`, count:`${count}`};
            myArray.push(textObject);     
        }
    
    // console.log(wordLenght);
    // console.log(word);
    // console.log(wordCounts);
    })  
    // console.log(myArray);
    return myArray;
}
const counts = textArray(paragraph);


function getWords(text) {
    const words = text.toLowerCase()
                    .replace(/[.,\/;:]/g,"")
                    .replace(/\d+/g, '')
                    .replace(/\s{2,}/g," ")
                    .split(" ")

    const counts = {};

    words.forEach((word) => {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
    });

    const mappedWords = Object.entries(counts)
        .map(([word, count]) => ({
            word,
            wordLengh: word.length,
            count,
        }));
    
    return mappedWords;
}

const mappedWords = getWords(paragraph);
console.log(mappedWords)

