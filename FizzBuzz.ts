export class FizzBuzz{
    count(input:number):string {
        if(input % 3 === 0)return "fizz";
        if(input === 5) return "buzz";
       return `${input}`
    }
    
}