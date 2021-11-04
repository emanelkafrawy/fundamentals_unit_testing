const say = require("../say");

test.skip("Say Jest Message", () => {
    expect(say()).toBe("hello jest");
});

