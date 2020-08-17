const db = require('../../Database/mySqlDB');

module.exports = {
    
    addUserData : async function (req,res){
        const name = req.params['firstName'];
        const lastName = req.params['lastName'];
        try {
            const user = await db.User.create({ firstName: name , lastName: lastName });
            console.log(user)
            res.status(200).send('Usuario creado de manera exitosa');
        } catch (error) {
            res.status(404).send(error);
        }
    },

    getUserData : async function (req,res){
        try {
            const users = await db.User.findAll();
            res.status(200).send(JSON.stringify(users));
        } catch (error) {
            res.status(404).send(error);
        }
    }
}