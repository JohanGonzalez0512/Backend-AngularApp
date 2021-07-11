const express = require('express')
const cors = require('cors');
const userRouter = require('../routes/user');
const uploadRouter = require('../routes/upload');
const fileUpload = require('express-fileupload')
const { db } = require('../db/connection');
class Server {

    apiPaths = {};

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.apiPaths = {
            usuarios: '/api/usuarios',
            uploads: '/api/uploads'
        }
        this.dbConnection();
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicacion 

        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error (error);
        }
    }


    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());

        //FileUpload
        this.app.use( fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRouter)
        this.app.use(this.apiPaths.uploads,  uploadRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto', this.port);
        })
    }



}

module.exports = Server



