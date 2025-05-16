let shows = [2, 0, 3, 1, 4];
let totalShows =0

for (let i = 0; i < shows.length; i++) {
    totalShows += shows[i];
}

console.log("Exercícios 6")
console.log("Total de shows assistidos ", totalShows);
if (totalShows > 8) {
    console.log("Você é super fã")
} else{
    console.log("Aproveite mais os shows")
}

console.log("-----------------")