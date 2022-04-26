//routes
const app = require("./Modules/Routes/index.js");
//ORM/Databse
// const Clinic = require('./Modules/ORM/clinic.model');
// const Company = require('./Modules/ORM/company.model');
// const EmployeeRecord = require('./Modules/ORM/empRecord.model');
// const MC = require('./Modules/ORM/mc.model');
// const CurrentVisit = require('./Modules/ORM/currentVisit.model');
// const Person = require('./Modules/ORM/person.model');
// const NextOfKin = require("./Modules/ORM/nextOfKin.model");
// const FullMedicalRecord = require("./Modules/ORM/fullMedicalRecord.model");
// const User = require("./Modules/ORM/user.model.js");

const User = require("./Modules/ORM/ambrosial/user-model");
const MenuItem = require("./Modules/ORM/ambrosial/menuitem-model");
const Order = require("./Modules/ORM/ambrosial/order-model");
const Receipt = require("./Modules/ORM/ambrosial/receipt-model");
const PaymentInvoice = require("./Modules/ORM/ambrosial/paymentinvoice-model");



//Sync database
User.sync();
MenuItem.sync();
Order.sync();
Receipt.sync();
PaymentInvoice.sync();
// Person.sync();
// Clinic.sync();
// Company.sync();
// EmployeeRecord.sync();
// MC.sync();
// CurrentVisit.sync();
// NextOfKin.sync();
// FullMedicalRecord.sync();
// User.sync();

app.get('/', (req, res) => {
    res.json("Test");
})

//port number
const PORT = process.env.PORT || 5000;

//app to run at this port number
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});