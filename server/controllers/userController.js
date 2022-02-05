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
    if (bcrypt.compareSync(password, validUser[0][0].password)) {
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
  },
  registerOne: async (req, res) => {
    let {firstName, lastName, email, password} = req.body
    const checkEmail = await sequelize.query(`SELECT * From users WHERE email = '${email}'`)
    if(checkEmail[1].rowCount !== 0) {
      res.status(500).send("Account with that email already exists")
    } else {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(password, salt)
    await sequelize.query(`
      INSERT INTO users(first_name, last_name, email, password)
      VALUES (
        '${firstName}',
        '${lastName}',
        '${email}',
        '${password}'
      )
    `).catch(err => console.log(err))
    let userInfo = await sequelize.query(`
    SELECT first_name, last_name, id FROM users WHERE email = '${email}'
    `).catch(err => console.log(err))
    res.status(200).send(userInfo[0][0])
  }
}
}