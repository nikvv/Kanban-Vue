const bcrypt = require('bcrypt');
const saltRounds = 10;

function encrypt(password){
    return bcrypt.hashSync(password, saltRounds);
}

function compare (password,hashed){
    return bcrypt.compareSync(password, hashed);
}

module.exports = {encrypt,compare}