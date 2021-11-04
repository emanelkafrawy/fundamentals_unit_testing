const all = require("../all");

describe("check array", ()=>{

    describe.skip("new test",()=>{
        test("check array contains 6 elements", ()=>{
            expect(all.length).toBe(5);
        })
        test.skip("check array contains 6 elements", ()=>{
            expect(all).toHaveLength(5);
        })
        test.skip("check array not contains specific number", ()=>{
            expect(all).not.toContain(6); 
        })
        test.skip("check array not contain 0", ()=>{
            for(let i =0; i< all.length; i++){
                expect(all[i]).not.toBe(0); 
            }
        })
        test.skip("check array contain only numbers", ()=>{
            for(let i =0; i< all.length; i++){
                expect(isNaN(all[i])).toBe(false);  //is not a number
            }
        })
        test.skip("check array contain only numbers", ()=>{
            for(let i =0; i< all.length; i++){
                expect(isNaN(all[i])).toBeFalsy();  //is not a number == toBe(false)
            }
        })
        test.skip("check array contain only numbers", ()=>{
            for(let i =0; i< all.length; i++){
                expect(isNaN(all[i])).not.toBeTruthy();  //is not a number == toBe(false)
            }
        })
        test.skip("check array greater than number", ()=>{
                expect(all[0]).toBeGreaterThan(0); 
        })
        test.skip("check array greater than number", ()=>{
                expect(all[0]).toBeGreaterThanOrEqual(1); 
        })
        test.skip("check array greater than number", ()=>{
                expect(all[0]).toBeLessThan(5); 
        })
        test.only("check value undefined", ()=>{
            let a ;
                expect(a).toBeUndefined(); 
        })

    })

    describe.skip("new new  test",()=>{
        it("check for a char in word", ()=>{
            let wordd = "eman mohamed";
            expect(wordd).toMatch(/mohamed/)
        })
        it("obj", ()=>{
            let obj = {
                name:"eman",
                age: 22
            }
            // expect(obj).toHaveProperty("age")  //key only
            expect(obj).toHaveProperty("age", 22) //key and value
        })
    })

    expect.extend({
        toBeLargerThan(recievednum, target){
            const pass = recievednum > target;
            if(pass){
                return {
                    message: ()=> `Expected ${recievednum} To be Larger than ${target}`,
                    pass: true
                }
            }else{
                return {
                    message: ()=> `Error Expected ${recievednum} To be Larger than ${target} but not`,
                    pass: false
                }
            }
        }
    })

    test.skip("check larger or not",()=>{
        expect(10).toBeLargerThan(9)
    })

    expect.extend({
        toBeBetween(recieved, start, end){
            const pass = recieved > start && recieved < end;
            if(pass){
                return {
                    message: ()=> ` Expected ${recieved} to be between ${start} and ${end}`,
                    pass: true
                }
            }else{
                return {
                    message: ()=> `Error Expected ${recieved} to be between ${start} and ${end}`,
                    pass: false
                }
            }
        }
    })

    test.skip("num between two nums",()=>{
        expect(5).toBeBetween(4,10);
    })

    test.skip("expect any thing",()=>{
        expect(1).toEqual(expect.anything()); //any thing except undefined or null
    })

    //expect any constructor 
    test("expect any thing",()=>{
        // expect(1).toEqual(expect.any(Number)); //number is constructor means that 1 is number from Number
        expect('eman').toEqual(expect.any(String)); 
    })

    test("array to match in another arrray",()=>{
        expect([1,2,3,4]).toEqual(expect.arrayContaining([3,1]))
    });


})