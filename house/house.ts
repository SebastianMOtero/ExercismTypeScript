export const song: { [key: number]: string[] }  = {
    1: ["house that Jack built.", "lay in"],
    2: ["malt", "ate"],
    3: ["rat", "killed"],
    4: ["cat", "worried"],
    5: ["dog", "tossed"],
    6: ["cow with the crumpled horn", "milked"],
    7: ["maiden all forlorn", "kissed"],
    8: ["man all tattered and torn", "married"],
    9: ["priest all shaven and shorn", "woke"],
    10: ["rooster that crowed in the morn", "kept"],
    11: ["farmer sowing his corn", "belonged to"],
    12: ["horse and the hound and the horn"]
  }
  
  export default class House {
    static verse(num: number) {
      let sn: string[] = [];
      sn.push(`This is the ${song[num][0]}`);
  
      for (let i = num-1; i > 0; i--) {
        sn.push(`that ${song[i][1]} the ${song[i][0]}`);
      }
      return sn;
    }
  
    static verses(start: number, end: number) {
      let sn: string[] = [];
      for (let i = start; i <= end; i++) {
        sn = sn.concat(this.verse(i));
        sn.push('')
      }
      sn.pop();
      return sn;
    }
  }
  