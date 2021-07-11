const { DataTypes } = require('sequelize');
const { db } = require('../db/connection');
const User = db.define('user',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    lastname:{
        type: DataTypes.STRING(50),
        allowNull: false,
        validate:{
            notEmpty:true
        }
    },
    avatar:{
        type: DataTypes.STRING(200),
        defaultValue : ""
        
    },
    
},{
    timestamps : false,
})

module.exports= User;