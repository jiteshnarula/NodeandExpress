var database = (function(){
    var arrayID = [];
    var empId,empName,empSalary;

    var Employee = function(id,name,salary){
        this.empId = id,
        this.empName = name,
        this.empSalary = salary
    };

    setData = function(emp){
        arrayID.push(emp);
        console.log(arrayID.toString());
    }


    getAllData=function(){
        for(x in arrayID){
            console.log("ID is "+arrayID[x].empId);
            console.log("Name is "+ arrayID[x].empName);
            console.log("Salary is "+ arrayID[x].empSalary);
        }
    }

    return {
        set : setData,
        get :getAllData,
        data : Employee
    }

})();

module.exports = database