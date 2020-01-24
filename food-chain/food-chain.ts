const animals: { [key: number]: string[] } = {
  1: ["fly", "I don't know why she swallowed the fly. Perhaps she'll die."],
  2: ["spider", "It wriggled and jiggled and tickled inside her."],
  3: ["bird", "How absurd to swallow a bird!"],
  4: ["cat", "Imagine that, to swallow a cat!"],
  5: ["dog", "What a hog, to swallow a dog!"],
  6: ["goat", "Just opened her throat and swallowed a goat!"],
  7: ["cow", "I don't know how she swallowed a cow!"],
  8: ["horse", "She's dead, of course!"]
}

export default class FoodChain {
    constructor() {
    }
  
    static verse(num: number) {
      let sn: string = `I know an old lady who swallowed a ${animals[num][0]}.\n`;
  
      if (num === 8) {
        sn += `She's dead, of course!\n`;
        return sn;
      }
      
      if (num > 1) {
        sn += `${animals[num][1]}\n`;
  
        for (let i = num; i > 1; i--) {
          if (i === 3) {
            sn += `She swallowed the ${animals[i][0]} to catch the ${animals[i-1][0]} that`
            + `${animals[2][1].slice(2)}\n`
          } else {
            sn += `She swallowed the ${animals[i][0]} to catch the ${animals[i-1][0]}.\n`
          }
        }
      }
      sn += `${animals[1][1]}\n`;
      return sn;
    }
  
    static verses(first: number, last: number) {
      let sn: string = "";
  
      for (let i = first; i <= last; i++) {
        sn += this.verse(i);
        if (i < last) sn += '\n'
      }
      return sn;
    }
  }
  