//properties and methods needed:
//name
//id
// email
// getName()
//getID()
//getEmail()
//getRole() (Returns Employee)

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }   

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 