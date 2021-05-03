const mongoose = require('mongoose');
const { get } = require('../routes');
const Log = mongoose.model('Log')

module.exports = {
    async store(req, res){
        const data = await Log.create(req.body)
    return res.json(data)
    },
    
    async index(req, res){
        const data = await Log.find({$or: [ {status: 2},{status: 0}]}).sort({_id: -1})
        return res.json(data)

    },
//findById

}


