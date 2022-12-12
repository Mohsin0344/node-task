const users = require('../models/users');


module.exports = {
    createUser: async (req, res, next) => {
        try{
            let {firstName, lastName, occupation, phoneNumber} = req.body;
            if(!firstName) {
                return res.send({
                    "status": 400,
                    "message": "First name is required",
                });
            }
            if(!occupation) {
                return res.send({
                    "status": 400,
                    "message": "Occupation is required",
                });
            }
            if(!phoneNumber) {
                return res.send({
                    "status": 400,
                    "message": "Phone number is required",
                });
            }
            if(phoneNumber && phoneNumber.length < 11) {
                    return res.send({
                        "status": 400,
                        "message": "Phone number length should be 11 digits",
                    });
            }
            const user = await users.create({
                first_name: firstName,
                last_name: lastName,
                occupation: occupation,
                phone_number: phoneNumber
            });

            res.send({
                "status" : 200,
                "success": true,
                "message": "User created successfully",
                user
            });
        }catch(error) {
            console.log('Error in creating user' + error);
        }
    },

    getUser: async (req, res, next) => {
        try{
            let userId = req.query.userId;
            if(!userId) {
                return res.send({
                    "status" : 404,
                    "success": false,
                    "message": "Query paramter userId is required",
                });
            }
            const user = await users.findAll({
                where: {
                  id: userId,
                }
              });
    
              if(!user) {
                return res.send({
                    "status" : 404,
                    "success": false,
                    "message": "User not found",
                });
              }
    
              if(user) {
                return res.send({
                    "status" : 200,
                    "success": true,
                    user,
                });
              }
        } catch(error) {
            console.log('get user exception' + error);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const usersList = await users.findAll();
            return res.send({
                "status" : 200,
                "success": true,
                usersList,
            });
        } catch(error) {
            console.log('exception in getAllUsers' + error);
        }
    },
    
    addServicesAgainstUser: (req, res, next) => {
        res.send({
            "message": "Add services against user"
        });
    }
}