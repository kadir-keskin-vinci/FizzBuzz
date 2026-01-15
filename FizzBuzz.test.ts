import { FizzBuzz } from "./FizzBuzz";

describe('FizzBuzz', () =>{


    describe('count method', () =>{
        it("should return 1 when given 1", () =>{

            //Arrange
            let fizzBuzz = new FizzBuzz();

            //Act
            let actual = fizzBuzz.count(1);

            //Assert
            expect(actual).toBe("1");
        });

         it("should return 2 when given 2", () =>{
            let fizzBuzz = new FizzBuzz();
            let actual = fizzBuzz.count(2);

            expect(actual).toBe("2");
        });
    });
});