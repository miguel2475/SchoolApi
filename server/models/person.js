
module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define("person",{
        id: { type: DataTypes.NUMBER , primaryKey: true },
        firstName : { type: DataTypes.STRING },
        middleName: { type: DataTypes.STRING },
        surname: { type: DataTypes.STRING },
        birthdate: { type: DataTypes.STRING },
        sex: { type: DataTypes.STRING },
        dni: { type: DataTypes.STRING }
    },{
        timestamps: false,
        tableName: 'person'
    })

    Person.associate = (models) => {
        Person.hasOne(models.user, {
          foreignKey: 'personId',
          onDelete: 'CASCADE',
        });
      };

    return Person
};