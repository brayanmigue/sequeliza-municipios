export const useUsers = (Sequelize, type) => {
    return Sequelize.define('user', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: type.INTEGER
  },
  username: type.STRING,
  email: type.STRING,
  password: type.STRING

})
}