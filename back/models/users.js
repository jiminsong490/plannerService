const { Model, DataTypes } = require('sequelize')

module.exports = class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                phonenumber: {
                    type: DataTypes.STRING(11),
                    allowNull: false,
                },
                provider: {
                    type: DataTypes.STRING(10),
                    allowNull: false,
                    defaultValue: 'local',
                },
                snsId: {
                    type: DataTypes.STRING(30),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'User',
                tableName: 'users',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        )
    }

    static associate(db) {
        db.User.hasMany(db.Group)
        db.User.hasMany(db.Plan)
    }
}
