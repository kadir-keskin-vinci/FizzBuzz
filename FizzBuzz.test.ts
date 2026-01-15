import { FizzBuzz } from "./FizzBuzz";

describe('FizzBuzz', () =>{

    describe('demo method', () => {
        it('should return 1', () => {
            let fizzbuzz = new FizzBuzz();

            expect(fizzbuzz.demo()).toBe(1);
        })
    });

    describe('count method', () =>{
        it("should return 1 when given 1", () =>{

            //Arrange
            let fizzBuzz = new FizzBuzz();

            //Act
            let actual = fizzBuzz.count();

            //Assert
            expect(actual).toBe("1");
        })
    })
});