module.exports = function(sequelize, Datatypes) {
    var Burger = sequelize.define("Burger", {
        name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: Datatypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
    return Burger;
};