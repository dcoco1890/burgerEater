module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": "kau4i8m5k7hmyda6",
        "password": "cwop0tywcr3uzmrt",
        "database": "rkr2pxcmlbjtu773",
        "host": "zf4nk2bcqjvif4in.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql",
        "operatorsAliases": false
    }
}

// added module.exports at the top and used my env variables to run