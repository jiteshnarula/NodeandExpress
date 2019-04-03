var Emp = require('./lib/employee');
empOne  = new Emp.data(1001,'jitesh',72728);
empTwo =new Emp.data(1002,'paras',747484);
Emp.set(empOne);
// Emp.set(empTwo);
Emp.get()