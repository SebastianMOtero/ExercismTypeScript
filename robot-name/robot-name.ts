export default class RobotName {
    public name: string = "";
    private list: Set<string> = new Set<string>();
    constructor() {
        this.createName()
    }

    createName() {
        let aux = "";
        do {
            aux = String.fromCharCode(Math.floor(Math.random() * 25 + 65), 
                                     Math.floor(Math.random() * 25 + 65))
    
            for (let i=0 ; i<3 ; i++) {
                aux += Math.floor(Math.random() * 10).toString()
            }
        } while(this.list.has(aux))
        this.list.add(aux);
        this.name = aux;
    }
    
    resetName() {
        Math.random()
        this.createName();
    }

}