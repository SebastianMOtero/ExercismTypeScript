const CORNER = '+';
const VERTICAL_PIPE = '|';
const FLAT_PIPE = '-';

export default class Rectangles{
    static count(diagram: string[]): number {
        let rectangles = 0;
        for (let row = 0; row < diagram.length-1; row++) {
            for (let column = 0; column < diagram[0].length-1; column++) {
                if (diagram[row][column] === CORNER) {
                    this.SearchBottomLeftCorners(diagram, [row,column]).forEach(bottomLeftCorner => {
                        this.SearchBottomRightCorners(diagram, bottomLeftCorner).forEach(bottomRightCorner => {
                            if (this.isThereTopRightCorner(diagram, bottomRightCorner, [row,column]) &&
                            this.rectangleIsClosed(diagram, bottomRightCorner, [row,column]) ) rectangles++;
                        })
                    })
                }
            }
        }
        return rectangles;
    }

    static SearchBottomLeftCorners(diagram: string[], topLeftCorner: number[]): number[][] {
        let bottomLeftCorners = [];
        for (let row = topLeftCorner[0]+1; row < diagram.length; row++) {
            if(diagram[row][topLeftCorner[1]] !== VERTICAL_PIPE) {
                if(diagram[row][topLeftCorner[1]] === CORNER) { bottomLeftCorners.push([row,topLeftCorner[1]]) } 
                else { row = diagram.length; }
            }
        }
        return bottomLeftCorners;
    }

    static SearchBottomRightCorners(diagram: string[], bottomLeftCorner: number[]): number[][] {
        let bottomRightCorners = [];
        for (let column = bottomLeftCorner[1]+1; column < diagram[0].length; column++) {
            if(diagram[bottomLeftCorner[0]][column] !== FLAT_PIPE) {
                if(diagram[bottomLeftCorner[0]][column] === CORNER) { bottomRightCorners.push([bottomLeftCorner[0],column]) } 
                else { column = diagram[0].length; }
            }
        }
        return bottomRightCorners;
    }

    static isThereTopRightCorner(diagram: string[], bottomRightCorner: number[], topLeftCorner: number[]): boolean {
        if (diagram[topLeftCorner[0]][bottomRightCorner[1]] !== CORNER) return false;
        for (let row = topLeftCorner[0]+1; row !== bottomRightCorner[0]; row++) {
            if(diagram[row][bottomRightCorner[1]] !== VERTICAL_PIPE && diagram[row][bottomRightCorner[1]] !== CORNER) {
                return false;
            }
        }
        return true;
    }

    static rectangleIsClosed(diagram: string[], bottomRightCorner: number[], topLeftCorner: number[]): boolean {
        for (let column = topLeftCorner[1]+1; column < bottomRightCorner[1]; column++) {
            if(diagram[topLeftCorner[0]][column] !== FLAT_PIPE && diagram[topLeftCorner[0]][column] !== CORNER) {
                return false;
            }
        }
        return true;
    }
}