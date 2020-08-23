const hello = require('../Services/Greetings/greeting');
const user = require('../Services/Users/userLogic');
const product = require('../Services/Products/productLogic');

module.exports = {

    assignRoutes : function(app){

        app.get('/', hello.getHelloWorld);

        app.post('/db/User', user.addUserData);

        app.get('/db/User', user.getUserData);

        app.get('/mongo/Product', product.getProductData);

        app.post('/mongo/Product', product.addProductData);
        
    }
}