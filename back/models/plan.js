const { Model, DataTypes } = require('sequelize')

module.exports = class Plan extends Model {
    static init(sequelize) {
        return super.init(
            {
                planTime: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                planName: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Plan',
                tableName: 'plans',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        )
    }

    static associate(db) {
        db.User.belongsTo(db.User)
    }
}
