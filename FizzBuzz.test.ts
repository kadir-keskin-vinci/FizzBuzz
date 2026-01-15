import { FizzBuzz } from "./FizzBuzz";

describe('FizzBuzz', () =>{


    describe('count method', () =>{
        it("should return 1 when given 1", () =>{

            //Arrange
            let fizzBuzz = new FizzBuzz();

            //Act
            let actual = fizzBuzz.count();

            //Assert
            expect(actual).toBe("1");
        });
    });
});