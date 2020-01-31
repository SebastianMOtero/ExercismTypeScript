const DIRECTIONS: string[] = ['north', 'east', 'south', 'west'];
const MOVEMENTS: { [key: string]: number[] } = {
    'north': [0, 1],
    'east': [1, 0],
    'south': [0, -1],
    'west': [-1, 0]
};
const INSTRUCTIONS: { [key: string]: keyof Robot } = {
    L: "turnLeft",
    R: "turnRight",
    A: "advance"
};

export default class Robot{
    bearing: string;
    coordinates: number[] = [];

    constructor(x: number = 0, y: number = 0, currentDirection: string = DIRECTIONS[0]) {
        this.coordinates[0] = x;
        this.coordinates[1] = y;
        this.bearing = currentDirection;
    }

    orient(currentDirection: string) {
        if (DIRECTIONS.indexOf(currentDirection) === -1) { return ('Invalid Robot Bearing'); }
        this.bearing = currentDirection;
    }

    turnRight(){
        this.bearing = DIRECTIONS[ (DIRECTIONS.indexOf(this.bearing)+1)%4 ];
    }

    turnLeft(){
        this.bearing = DIRECTIONS[ (DIRECTIONS.indexOf(this.bearing)+3)%4 ];
    }

    at(x: number, y: number){
        this.coordinates[0] = x;
        this.coordinates[1] = y;
    }

    advance(){
        let x = this.coordinates[0] + MOVEMENTS[this.bearing][0]
        let y = this.coordinates[1] + MOVEMENTS[this.bearing][1]
        this.at(x, y);
    }

    instructions(ins: string): string[] {
        return ins.split("").map(instruction => INSTRUCTIONS[instruction])
    }

    evaluate(ins: string) {
        this.instructions(ins).forEach((instruction: string) => {
            instruction === "turnLeft" ? this.turnLeft() :
            instruction === "turnRight" ? this.turnRight() : this.advance()
        })
    }
}