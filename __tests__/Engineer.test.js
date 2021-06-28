const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Nick', 90, 'Nick@gmail', 'nmihaly');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Nick', 90, 'Nick@gmail', 'nmihaly');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
 
test('gets role of employee', () => {
    const engineer = new Engineer('Nick', 90, 'Nick@gmail', 'nmihaly');

    expect(engineer.getRole()).toEqual("Engineer");
});