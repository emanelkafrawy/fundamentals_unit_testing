const sum = require("../sum");

//test(name, function, timeout) equal to elease name
//it(name, function, timeout)

//describe(name, fn) بينظم الكود مش اكتر
describe.skip("Check the total number", ()=>{
    it.skip("return 0", ()=>{
        expect(sum()).toBe(0);
    })

    it.skip("sum of numbers", ()=>{
        expect(sum(10)).toBe(10);
    })

    it("sum of two number", ()=>{
        expect(sum(15,25)).toBe(40);
    })

    it("sum of three number", ()=>{
        expect(sum(10,20,30)).toBe(60);
    })
});
