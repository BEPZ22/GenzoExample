const hello = require('../Services/Greetings/greeting');
const user = require('../Services/Users/userLogic');

module.exports = {

    assignRoutes : function(app){

        app.get('/', hello.getHelloWorld);

        app.get('/db/User/:firstName/:lastName', user.addUserData);

        app.get('/db/User', user.getUserData);
        
    }
}