module.exports2 = {
    port:process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'song_track',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options : {
            dialect: process.env.Dialect || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.mysql'
        }
    }
}

module.exports1 = {
    port:process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'song_track',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '',
        options : {
            dialect: process.env.Dialect || 'mysql',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.mysql'
        }
    }
}
