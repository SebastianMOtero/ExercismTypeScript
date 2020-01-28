export default class PigLatin{
    static translate(input: string){
        return input.split(" ").map((word:string) => this.convert(word)).join(" ");
    }

    static convert(input: string) {
        if (input.match(/^[aeiou]|(xr)|(yt)/)) { return input+"ay"; }

        if( input.match(/^\wy/)) { return input.slice(1)+input[0]+"ay"; }

        if(input.match(/^[^aeiou]{1,3}qu/)) {
            let aux: string = (input.match(/^[^aeiou]{1,3}qu/) || "").toString();
            return input.replace(aux, "")+aux+"ay";
        }

        if (input.match(/^qu|^[^aeiou]{1,3}/)) {
            let aux: string = (input.match(/^qu|^[^aeiou]{1,3}/) || "").toString();
            return input.replace(aux, "")+aux+"ay";
        }
    }
}