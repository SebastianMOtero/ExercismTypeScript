const ROMAN: {[key: number]: string} = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
}

class RomanNumerals {
  static roman(num: number): string {
    return num.toString().split("").reverse().map((n, i) => this.convert(Number(n), Math.pow(10,i))).reverse().join("");
  }

  static convert(num: number, multiplier: number) {
    let aux: string[] = [];
    let base: number = 1*multiplier;
    let mid: number = 5*multiplier;
    let roof: number = 10*multiplier;
    switch(num) {
      case 3: aux.push(ROMAN[base]);
      case 2: aux.push(ROMAN[base]);
      case 1: aux.push(ROMAN[base]);
        break;
      case 4: aux.push(ROMAN[base]);
      case 5: aux.push(ROMAN[mid]);
        break;
      case 8: aux.push(ROMAN[base]);
      case 7: aux.push(ROMAN[base]);
      case 6: aux.push(ROMAN[base]);
        aux.push(ROMAN[mid]);
        aux = aux.reverse();
        break;
      case 9: aux.push(ROMAN[base]);
        aux.push(ROMAN[roof])
        break;
    }
    return aux.join("");
  }
}

export default RomanNumerals
