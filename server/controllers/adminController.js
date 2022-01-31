const sequelize = require('../sequelize')

module.exports = {
  getClientInfo: async (req, res) => {
    let info = await sequelize.query(`
    SELECT * FROM all_user_info
    `)
    res.status(200).send(info)
  }
}