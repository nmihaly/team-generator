//properties and methods needed:
//name
//id
// email
// getName()
//getID()
//getEmail()
//getRole() (Returns Employee)

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return "Emmployee";
}

module.exports = Employee;