export class FizzBuzz{
    count(input:number):string {
        if(this.isMultipleOfThreeAndFive(input))return "fizzbuzz";
        if(this.isMultipleOfThree(input))return "fizz";
        if(this.isMultipleOfFive(input)) return "buzz";
       return `${input}`
    }
    

    private isMultipleOfThreeAndFive(input: number) {
        return this.isMultipleOfThree(input) && this.isMultipleOfFive(input);
    }

    private isMultipleOfFive(input: number):boolean {
        return input % 5 === 0;
    }

    private isMultipleOfThree(input: number): boolean {
        return input % 3 === 0;
    }
}