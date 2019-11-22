const mongoose = require('mongoose');
const Member = mongoose.model('Members')

module.exports = {
    async index(req, res){
        const members = await Member.find()
        return res.json(members)
    }
}