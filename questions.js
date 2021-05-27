const questionsRaw = [
    {Question:"Alle Menschen sind gleich", Answer: 1},
    {Question:"Menschen sind von Natur aus unkommunikativ und kriegsbereit", Answer: 1},
    {Question:"Konkurenzdenken, Misstrauen und Rumgier liegen in der Natur", Answer: 1},
    {Question:"Jeder Mensch hat immer Angst um sein Leben und sein Eigentum", Answer: 1},
    {Question:"Im Naturzustand besitzt man etwas nur so lange, bis jemand anderes es einem Weg nimmt", Answer: 1},
    {Question:"Das Naturrecht ist die Freiheit, alles für seine Selbsterhaltung zu tun", Answer: 1},
    {Question:"Lebte von 1588 bis 1679", Answer: 1},
    {Question:"Im Naturrecht herscht Krieg - alle gegen alle", Answer: 1},
    {Question:"Man muss dem Frieden nachjagen", Answer: 1},
    {Question:"Zur Gründung eines Staates müssen Menschen auf ihre Freiheiten verzichten", Answer: 1},
    {Question:"Der Mensch ist ein räuberisches, kluges, gefährliches, mächtigstes Tier", Answer: 1},




    {Question:"Lebte von 1712 bis 1778", Answer: 2},
    {Question:"Der Naturzustand ist die Freiheit und Unabhängigkeit der Menschen", Answer: 2},
    {Question:"Es gibt keine sozialen Beziehungen im Naturzustand", Answer: 2},
    {Question:"Im Naturzustand sind alle Menschen gleichgestellt und haben unbegrenzte Willenskraft", Answer: 2},
    {Question:"Der Unterschied zwischen Mensch und Tier ist, dass der Mensch frei handeln kann", Answer: 2},
    {Question:"Die Natürlichkeit des Menschen wird durch keine Vernumpft gebrochen", Answer: 2},
    {Question:"Der Mensch ist weder gut noch böse", Answer: 2},
    {Question:"Durch die Gesellschaft bekommt der Mensch das Verlangen nach Macht", Answer: 2},
    {Question:"Gesellschaften funktionieren nur, wenn Menschen sich gegenseitig helfen und verteidigen", Answer: 2},
    {Question:"Eine Gesellschaft ist eine Kollektivperson", Answer: 2},
    {Question:"Der Mensch kümmert sich normalerweise nur um seine Selbsterhaltung", Answer: 2}

    

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

