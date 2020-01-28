export default class WordSearch {
  input: string[];
  words: string[] = [];
  sn: { [key: string]: ({ [key: string]: number[] } | undefined) } = {};

  constructor(input: string[]){
    this.input = input;
  }

  public find(words: string[]): { [key: string]: ({ [key: string]: number[] } | undefined) } {
    words.forEach(word => this.words.push(word));

    this.words.forEach(word => this.searchInRow(word));
    this.words.forEach(word => { 
      for (let row = 0; row < this.input.length; row++) {
        for (let column = 0; column < this.input[0].length; column++) {
          if (this.input[row][column] === word[0]) {
            this.searchToBottom(word, row, column);
            this.searchToTop(word, row, column);
            this.searchToBottomRight(word, row, column);
            this.searchToBottomLeft(word, row, column);
            this.searchToTopRight(word, row, column);
            this.searchToTopLeft(word, row, column);
          }
        }
      }
    })
    return this.sn
  }

  searchToBottomLeft(word: string, row: number, column: number) {
    if(row + word.length > this.input.length) return;
    if(column - word.length < 0) return;
    for (let i = 1; i < word.length; i++) {
      if(word[i] !== this.input[row+i][column-i]) return;
    }
    this.sn[word] = { 
      start: [row+1, column+1], 
      end: [row+word.length, column-word.length+2]
    }
  }

  searchToTopRight(word: string, row: number, column: number) {
    if(row - word.length < 0) return;
    if(column + word.length > this.input[0].length) return;
    for (let i = 1; i < word.length; i++) {
      if(word[i] !== this.input[row-i][column+i]) return;
    }
    this.sn[word] = { 
      start: [row+1, column+1], 
      end: [row-word.length+2, column+word.length]
    }
  }

  searchToBottomRight(word: string, row: number, column: number) {
    if(row + word.length > this.input.length) return;
    if(column + word.length > this.input[0].length) return;
    for (let i = 1; i < word.length; i++) {
      if(word[i] !== this.input[row+i][column+i]) return;
    }
    this.sn[word] = { 
      start: [row+1, column+1], 
      end: [row+word.length, column+word.length]
    }
  }
  
  searchToTopLeft(word: string, row: number, column: number) {
    if(row - word.length < 0) return;
    if(column - word.length < 0) return;
    for (let i = 1; i < word.length; i++) {
      if(word[i] !== this.input[row-i][column-i]) return;
    }
    this.sn[word] = { 
      start: [row+1, column+1], 
      end: [row-word.length+2, column-word.length+2]
    }
  }

  searchToBottom(word: string, row: number, column: number) {
    if(row + word.length > this.input.length) return;
    for (let i = 1; i < word.length; i++) {
      if(word[i] !== this.input[row+i][column]) return;
    }
    this.sn[word] = { 
      start: [row+1, column+1], 
      end: [row+word.length, column+1]
    }
  }

  searchToTop(word: string, row: number, column: number) {
    if(row - word.length < 0) return;
    for (let i = 1; i < word.length; i++) {
      if(word[i] !== this.input[row-i][column]) return;
    }
    this.sn[word] = { 
      start: [row+1, column+1], 
      end: [row-word.length+2, column+1]
    }
  }

  searchInRow(word: string) { 
    let reversedWord = word.split("").reverse().join("");
    //console.log(`${word} y ${reversedWord}`);

    this.input.forEach((row,i) => {
      if ( row.match(word) ) {
        this.sn[word] = { 
          start: [i+1, row.indexOf(word[0])+1], 
          end: [i+1, row.indexOf(word[0]) + word.length]}
      }
      if ( row.match(reversedWord) ) {
        this.sn[word] = { 
          start: [i+1, row.indexOf(word[0])+1], 
          end: [i+1, row.indexOf(word[0]) - word.length+2]}
      }
    })
  }
}
