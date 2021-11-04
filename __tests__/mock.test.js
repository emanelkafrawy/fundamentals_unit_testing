const mocker  = require("../mock")

test("mock function ", ()=>{

    const mocker = jest.fn((name)=> `hello ${name}`); //hevaior of fn
    expect(mocker("osama")).toBe("hello osama");
    expect(mocker).toHaveBeenCalled(); // how many time called fn mocker
    expect(mocker).toHaveBeenCalledTimes(1); // اتنادت كام مره واحط الرقم عشان اتشك
    // expect(mocker).toHaveBeenCalledWith('eman'); //called with eman or not 
    expect(mocker).toHaveBeenLastCalledWith('osama'); //called with eman or not 

})