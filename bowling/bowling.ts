export default class Bowling{
    rolls: number[];
    points: number = 0;
    strike: number = 0;
    spare: number = 0;
    frames: number[][] = [];
    rollBonus: number[] = [];

    constructor(rolls: number[]) {
        this.rolls = rolls;
        this.getFrames();
    }

    getFrames() {
        for (let currThrow = 0; currThrow < this.rolls.length; currThrow++) {
            if (this.rolls[currThrow] === 10) { this.frames.push([10]); } 
            else {
                if (currThrow === this.rolls.length-1) {
                    this.frames.push([this.rolls[currThrow]])
                } else {
                    this.frames.push([this.rolls[currThrow], this.rolls[currThrow+1]]);
                    currThrow++;
                }
            }
        }
        this.rollBonus = this.frames.slice(10).flat();
    }
    
    getValueFrame(frame: number[]): number {
        return frame.reduce((acc: number, curr: number) => acc+curr, 0)
    }

    isStrike(frame: number[]): boolean {
        return this.getValueFrame(frame) === 10;
    }

    isSpare(frame: number[]): boolean {
        return this.getValueFrame(frame) === 10;
    }
    
    score(): number {
        console.log(this.frames)
        console.log(this.rollBonus);
        this.isValid();
        
        console.log(this.frames);
        console.log(this.frames.slice(0,10).flat())
        //sum all points
        this.points += this.rolls.reduce((acc, curr)=> acc+curr, 0);
        //sum all strikes
        this.frames.slice(0,10).flat().forEach((n,i) => {if (n===10) {this.points+=this.rolls[i+1] + this.rolls[i+2] }});
        //sum al spares
        this.frames.forEach((frame, i) => {if (this.getValueFrame(frame) === 10 && frame.length === 2 && i < 9) {this.points+= this.frames[i+1][0]} })
        // for (let rolls = 0; rolls < this.frames.length; rolls++) {
        //     let throwOne = this.frames[rolls][0];
        //     let throwTwo = this.frames[rolls][1];

        //     if (this.strike > 0) {
        //         this.points += throwOne;
        //         if (throwTwo === undefined) { this.points += this.frames[rolls+1][0] }
        //         else { this.points += throwTwo; }
        //         this.strike = 0;
        //     }
    
        //     if (this.spare > 0) {
        //         this.points += throwOne;
        //         this.spare = 0;
        //     }

        //     if (throwOne === 10) {
        //         this.strike = 2;
        //         this.points += 10;
        //     } else {
        //         if(throwTwo + throwOne === 10) {
        //             this.spare = 1;
        //         }
        //         this.points += throwTwo + throwOne;
        //     }
        // }
        return this.points;
    }

    isValid() {
        //Pins must have a value from 0 to 10
        if (this.rolls.some((num: number) => num < 0 || num > 10)) { throw new Error('Pins must have a value from 0 to 10'); }

        //Pin count exceeds pins on the lane
        if (this.frames.some((frame:number[]) => frame.reduce((acc, curr) => acc+curr) > 10 )) {
            throw new Error('Pin count exceeds pins on the lane');
        }

        //Score cannot be taken until the end of the game
        if (this.frames.length < 10) { throw new Error('Score cannot be taken until the end of the game'); }

        if (this.frames.length === 10 && this.getValueFrame(this.frames[9]) === 10) {
            throw new Error('Score cannot be taken until the end of the game');
        }

        if (this.frames.length > 10) {
            for (let i = 9; i < this.frames.length-1; i++) {
                if (this.getValueFrame(this.frames[i]) !== 10) { throw new Error('Should not be able to roll after game is over'); }
            }
            //if(this.frames[9][0] === 10 && this.rollBonus.length !== 2 ) { throw new Error('Score cannot be taken until the end of the game'); }
           // if(this.frames[9][0] !== 10 && this.rollBonus.length !== 2 ) { throw new Error('Score cannot be taken until the end of the game'); }
            
            
            if( this.getValueFrame(this.frames[this.frames.length-1]) === 10) { 
                throw new Error('Score cannot be taken until the end of the game'); 
            }

            if(this.frames[this.frames.length-2].length === 1 &&  this.frames[this.frames.length-1].length !== 2) {
                throw new Error('Score cannot be taken until the end of the game'); 
            }

            if(this.frames[this.frames.length-2].length === 2 &&  this.frames[this.frames.length-1].length !== 1) {
                throw new Error('Score cannot be taken until the end of the game'); 
            }
        }
    }
}