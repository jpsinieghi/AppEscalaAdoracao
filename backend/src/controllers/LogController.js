const mongoose = require('mongoose');
const { get } = require('../routes');
const Log = mongoose.model('Log')

module.exports = {
    async store(req, res){
        const data = await Log.create(req.body)
    return res.json(data)
    },
    
    async index(req, res){
        const data = await Log.find().sort({_id: -1})
        return res.json(data)

    },


}


