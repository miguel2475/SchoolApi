
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user",{
        id: { type: DataTypes.INTEGER, primaryKey: true },
        personId: { type: DataTypes.INTEGER },
        email : { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        datetime: { type: DataTypes.STRING }
    },{
        timestamps: false,
        tableName: 'user'
    })

    User.associate = (models) => {
        User.belongsTo(models.person, {
            foreignKey: 'personId',
            as: 'person',
        })
    }

    return User
}