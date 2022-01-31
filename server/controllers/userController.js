const bcrypt = require('bcrypt')
const sequelize = require('../sequelize')

module.exports = {
  loginUser: async (req, res) => {
    //TODO when this is ready to run, this needs to change to req.params
    const {email, password} = req.body
  const validUser = await sequelize.query(`
    SELECT * FROM users WHERE email = '${email}'
  `).catch((err) => console.log(err))
  console.log(validUser)
  if(validUser[1].rowCount === 1) {
    //TODO if (bcrypt.compareSync(password, validUser[0][0].password)) {
    if (password) { //! This line of code needs to be deleted!!
      let object = {
        id: validUser[0][0].id,
        first_name: validUser[0][0].first_name,
        last_name: validUser[0][0].last_name,
        email: validUser[0][0].email
      }
      res.status(200).send(object)
    } else {
      res.status(401).send('Password is Incorrect')
    }
  } else {
    res.status(401).send('Account with that email does not exist.')
  }
  },
  getInfo: async (req, res) => {
    const {user_id} = req.body
    let info = await sequelize.query(`
      SELECT * FROM all_user_info
      WHERE user_id = '${user_id}'
    `)
    res.status(200).send(info)
  }
}