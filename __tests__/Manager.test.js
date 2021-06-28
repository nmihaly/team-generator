const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Nick', 29, 'Nick@gmail', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Nick', 29, 'nicole@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 