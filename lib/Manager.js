const Employee = require("./Employee");

function Manager(name, id, email, officeNumber) {
    super (name, id, email);
    this.officeNumber = officeNumber;
    }

Manager.prototype.getRole = function() {
    return Manager;
}

Intern.prototype.getOfficeNumber = function() {
    return this.officeNumber;
}

module.exports = Manager;