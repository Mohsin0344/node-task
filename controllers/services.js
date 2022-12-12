const services = require('../models/services')

module.exports = {
    addService: async (req, res, next) => {
        try {
            let {userId, service} = req.body;

            if(!userId) {
                return res.send({
                    "status": 400,
                    "success": false,
                    "messave": "User id is required to add servcie"
                });
            }
            if(!service) {
                return res.send({
                    "status": 400,
                    "success": false,
                    "messave": "Service is requried"
                });
            }
            
            const userServcies = await services.create({
                service_name: service,
                fk_user_id: userId
            });
    
            const getAllServices = await services.findAll({
                where: {
                    fk_user_id: userId
                }
            });
            
            return res.send({
                "status": 200,
                "success": true,
                "messave": "Service added successfully",
                getAllServices
            });
        } catch (error) {
            console.log('Create service exception '+ error);
        }
    },

    getServices: async (req, res, next) => {
        try {
            let {userId} = req.body;
            if(!userId) {
                return res.send({
                    "status": 400,
                    "success": false,
                    "messave": "User id is required"
                });
            }

            const userServices = await services.findAll({
                where: {
                    fk_user_id: userId
                }
            });

            res.send({
                "status": 200,
                "success": true,
                "messave": "Service retreived successfully",
                userServices
            });
        } catch (error) {
            console.log('Get service exception' +  error);
        }
    }
}