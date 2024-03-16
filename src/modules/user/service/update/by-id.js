const { User } = require("../../../../common/database")

function updateById(id, params) {
    return User.update(params, {
        where: {
            id,
        },
    })
}

module.exports = updateById