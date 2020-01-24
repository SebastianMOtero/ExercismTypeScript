export class TwoBucket {
    _starterBuck: string;
    _goal: number;
    _buckOne: Buck;
    _buckTwo: Buck;
    _goalBucket: Buck;
    _otherBucket: Buck

    constructor(buckOne: number, buckTwo: number, goal: number, starterBuck: string) {   
      this._starterBuck = starterBuck;
      this._goal = goal; 
      this._buckOne = new Buck(buckOne);
      this._buckTwo = new Buck(buckTwo);
      if (starterBuck === 'one') {
        this._goalBucket = this._buckOne;
        this._otherBucket = this._buckTwo;
      } else {
        this._goalBucket = this._buckTwo;
        this._otherBucket = this._buckOne;
      }
    }
  
    isBuckFull(buck: Buck) {
      return buck.buck === buck.buckCapacity;
    }
  
    isBuckEmpty(buck: Buck) {
      return buck.buck === 0;
    }
  
    moves(): number {
      let moves = 0;
      while (this._goalBucket.buck !== this._goal) {
        if (this.isBuckFull(this._otherBucket)) {
          this._otherBucket.buck = 0;
        } else {
          if (this.isBuckEmpty(this._goalBucket)) {
            this._goalBucket.buck = this._goalBucket.buckCapacity;
          } else {
            let capacityAvailable = this._otherBucket.buckCapacity - this._otherBucket.buck;
            if (this._goalBucket.buck <= capacityAvailable) {
              this._otherBucket.buck += this._goalBucket.buck
              this._goalBucket.buck = 0;
            } else {
              this._goalBucket.buck -= capacityAvailable;
              this._otherBucket.buck += capacityAvailable;
            }
          }
        }
        moves++
      }
      return moves;
    }
  
    get goalBucket(): string {
      return this._starterBuck;
    }
  
    get otherBucket(): number {
      return this._otherBucket.buck;
    }
  }
  
class Buck {
    buck: number = 0; 
    buckCapacity: number = 0;

    constructor(cap: number) {
        this.buckCapacity = cap;
    }
}

export const Bucket = {
    One: "one",
    Two: "two"
}