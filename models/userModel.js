const pg = require('../util/postgresql');

const userModelControls = {
    getUserRole : (email) => {
    console.log(email);
    return new Promise((resolve, reject) => {
        pg.query(
            `SELECT role from users WHERE email = '${email}'`)
            .then((res, err) => {
            if (err) {
                reject(err);
            }
            console.log(res.rows);
            resolve(res.rows);
        });
    });
    }
}
module.exports = userModelControls;