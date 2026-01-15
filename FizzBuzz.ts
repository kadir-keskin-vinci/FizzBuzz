export class FizzBuzz{
    count(input:number):string {
        if(this.isMultipleOfThree(input))return "fizz";
        if(input === 5) return "buzz";
       return `${input}`
    }
    

    private isMultipleOfThree(input: number): boolean {
        return input % 3 === 0;
    }
}