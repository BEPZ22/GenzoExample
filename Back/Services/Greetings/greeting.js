module.exports = {

    getHelloWorld : async function(req, res) {     
          try {
            res.status(200).send("Hello Perras");
          } catch (error) {
            res.status(404).send(error);
          }
    
        },
}