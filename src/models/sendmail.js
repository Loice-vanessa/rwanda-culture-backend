require('dotenv'),config();
const nodemail = require(nodemail);
//step 1
let transporter = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});
//step 2
let mailOption = {
    from:'icyezavanessa@gmail.com',
    to:'vanessaicyeza@gmail.com',
    subject:'Testing and Testing',
    text:'project work'
};
// step3
transporter.sendMail(mailOption, function(err, data){
    if (err) {
        console.log('error Occurs',console.erro);
    } else {
        console.log('Email sent!!!!!');
    }
})