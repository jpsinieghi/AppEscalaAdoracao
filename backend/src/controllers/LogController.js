const mongoose = require('mongoose');
const Log = mongoose.model('Log')

module.exports = {
    async store(req, res){
        const data = await Log.create(req.body)
    return res.json(data)
    }
}


