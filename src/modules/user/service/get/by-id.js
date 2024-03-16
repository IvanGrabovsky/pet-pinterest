const db = require("../../../../common/database");

function getById(id) {
    return db.User.findByPk(id);
};

module.exports = getById;