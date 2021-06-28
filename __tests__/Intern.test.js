const Intern = require('../lib/Intern');
 
test('creates an Intern object', () => {
    const intern = new Intern('Nick', 90, 'Nick@gmail', 'USD');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Nick', 90, 'Nick@gmail', 'USD');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Nick', 90, 'Nick@gmail.com', 'USD');

    expect(intern.getRole()).toEqual("Intern");
}); 