export default class Beer {
    static verse(number: number) { 
      if (number > 1) {
        return `${number} bottles of beer on the wall, ${number} bottles of beer.\n`+
        `Take one down and pass it around, ${number-1} ${number-1 === 1 ? "bottle" : "bottles"} of beer on the wall.\n`
      } else if (number === 1) {
        return `1 bottle of beer on the wall, 1 bottle of beer.\n`+
        `Take it down and pass it around, no more bottles of beer on the wall.\n`
      } else {
        return `No more bottles of beer on the wall, no more bottles of beer.\n`+
        `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
      }
    }
  
    static sing(start: number = 99, end: number = 0) {
      let sn: string = "";
      for (let i = start; i >= end; i--) {
        sn += this.verse(i);
        if (i !== end) { sn += '\n' }
      }
      return sn;
    }
  }