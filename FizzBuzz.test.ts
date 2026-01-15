import { FizzBuzz } from "./FizzBuzz";

describe('FizzBuzz', () =>{
let fizzBuzz = new FizzBuzz();

    describe('count method', () =>{
        it("should return 1 when given 1", () =>{

            //Arrange

            //Act
            let actual = fizzBuzz.count(1);

            //Assert
            expect(actual).toBe("1");
        });

         it("should return 2 when given 2", () =>{
            
            let actual = fizzBuzz.count(2);

            expect(actual).toBe("2");
        });
        it("should return fizz when given 3", () =>{
            
            let actual = fizzBuzz.count(3);
            expect(actual).toBe("fizz");
        })
    });
});