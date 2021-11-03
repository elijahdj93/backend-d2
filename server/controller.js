const realty = require('./db.json');

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(realty)
    },
    deleteHouse: (req, res) => {
        let houseIndex = realty.findIndex((real) => real.id === Number(req.params.id));
        realty.splice(houseIndex, 1)
        res.status(200).send(realty)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;

        let newHouse = {
            'id': realty.length + 1,
            'address': address,
            'price': price, 
            'imageURL': imageURL
        };
        realty.push(newHouse)
        res.status(200).send(realty)
    },
    updateHouse: (req, res) => {
        let requestId = req.params.id;
        let houseIndex = realty.findIndex((real) => real.id === Number(req.params.id));
        
        if (req.body.type === 'plus') {
            realty[houseIndex].price++
        } else if (req.body.type === 'minus') {
            realty[houseIndex].price--
        }
        res.status(200).send(realty);
    }
};