const Employee = require("../lib/Employee");

jest.mock('../lib/Employee');

test("Employee", () => {
    it("Creates an Employee object", () => {
        const employee = new Employee('Nick, 29, nick@gmail.com');
        expect(typeof(e)).toBe("object");

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });

    test('employee name', () => {
        const employee = new Employee('Nick, 29, nick@gmail.com');

        expect(employee.getName()).toEqual(expect.any(String));
    });

    test('employee id', () => {
        const employee = new Employee('Nick, 29, nick@gmail.com');

        expect(employee.getId()).toEqual(expect.any(Number));
    });

    test('employee email', () => {
        const employee = new Employee('Nick, 29, nick@gmail.com');

        expect(employee.getEmail()).toEqual(expect.any(String));
    });

    test('employee role', () => {
        const employee = new Employee('Nick, 29, nick@gmail.com');

        expect(employee.getRole()).toEqual("Employee");
    });
});