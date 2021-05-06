const questionsRaw = [
    {Question:"Alle Menschen sind gleich", Answer: 1},
    {Question:"Menschen sind von Natur aus unkommunikativ und kriegsbereit", Answer: 1},
   
   /* {Question:"Alle Menschen sind gleich", Answer: 1},
    {Question:"Alle Menschen sind gleich", Answer: 1},
    {Question:"Alle Menschen sind gleich", Answer: 1},
    */

]


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
 function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
const questions = shuffle(questionsRaw)

