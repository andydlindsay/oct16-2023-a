const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

// console.log('salt:', salt);

const plaintextPassword = 'secret';

const hash = bcrypt.hashSync(plaintextPassword, salt);

// console.log('hash:', hash);

const hashedPassword = '$2a$10$XnaaDNHN5sCkpUAjRLPMkuMrr2ZDIbK0phA/Nbl4LBKOMpNoXzW22';

const result = bcrypt.compareSync('secret', hashedPassword);

console.log('result:', result);
