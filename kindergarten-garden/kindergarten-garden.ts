const DEFAULT_STUDENTS: string[] = ["alice", "bob", "charlie", "david", "eve", "fred", "ginny", "harriet",
"ileana", "joseph", "kincaid", "larry"];

const PLANTS: { [key: string]: string } = {
    "G": "grass",
    "C": "clover",
    "R": "radishes",
    "V": "violets"
};

export default class Garden{
    private plants: string[];
    [name: string]: string[];
    
    constructor(plants: string, students: string[] = DEFAULT_STUDENTS){
        this.plants = plants.split("\n");
        students.sort().forEach((student, i) => this[student.toLowerCase()] = [
            PLANTS[this.plants[0][i*2]], PLANTS[this.plants[0][i*2 + 1]], 
            PLANTS[this.plants[1][i*2]], PLANTS[this.plants[1][i*2 + 1]]
        ]);
    }
}

