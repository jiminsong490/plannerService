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
                created_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: 'User',
                tableName: 'users',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        )
    }

    static associate(db) {
        db.User.hasMany(db.Group, {
            foreignKey: 'group',
            sourceKey: 'id',
        })
        db.User.hasMany(db.Plan, {
            foreignKey: 'plan',
            sourceKey: 'id',
        })
    }
}
