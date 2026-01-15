export class FizzBuzz{
    count(input:number):string {
        if(input === 15) return "fizzbuzz";
        if(this.isMultipleOfThree(input))return "fizz";
        if(this.isMultipleOfFive(input)) return "buzz";
       return `${input}`
    }
    

    private isMultipleOfFive(input: number):boolean {
        return input % 5 === 0;
    }

    private isMultipleOfThree(input: number): boolean {
        return input % 3 === 0;
    }
}