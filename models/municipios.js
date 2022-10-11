export const useMunicipio = (Sequelize, type) => {
    return Sequelize.define('municipios', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: type.INTEGER
  },
  nombre: type.STRING,
  departamento: type.STRING

})
}