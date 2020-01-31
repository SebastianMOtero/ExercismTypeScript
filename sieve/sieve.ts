export default class Sieve{
    static primes(num: number){
        let nums: number[] = [...Array(num+1).keys()]
        nums.shift()
        nums.shift()
        
        let aux = 2;
        while (aux < nums[nums.length-1] ) {
            nums = this.filteredList(nums, aux);

            nums = nums.filter(n => n===aux || n%aux !== 0);
            aux = nums[nums.indexOf(aux)+1]
        }

        console.log(nums)
    }

    static filteredList(list: number[], aux: number) {
        return list.filter(n => n>aux && n%aux !== 0);
    }
}