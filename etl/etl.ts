export default function transform(old: {[key: string]: string[]}) {
    let newScore: {[key: string]: number} = {};
    Object.keys(old).forEach(score => {
        old[score].forEach(letter => {
            newScore[letter.toLowerCase()] = parseInt(score);
        })
    });
    return newScore;
}