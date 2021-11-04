const filtername = require("../input");

describe.skip("validate the input field", () =>{

   test('check name is empty', () => {
       expect(filtername()).toBe("Unknown")
   })

   test('check for spaces (start + end', () => {
       expect(filtername(' osama ')).toBe("osama")
   })

});