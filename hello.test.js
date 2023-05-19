const hello = require('./helloworld');

test(outputs the correct string', () -> {
     expect(hello()).toBe("Hello world");
});
