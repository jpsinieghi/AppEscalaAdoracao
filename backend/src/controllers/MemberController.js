const mongoose = require('mongoose');
const Member = mongoose.model('Members')

module.exports = {
    async index(req, res){
        
        const members = await Member.find().sort({status: -1, nome: 1})
        return res.json(members)

        // const members = await Member.find((err, data) => {
        //     if (err) return res.json({ success: false, error: err });
        //     // return res.json({ success: true, data: data });
        //     console.log(req.params)
        //     return res.json({ success: true, data: data });
        //   }).sort({nome: 1});
        //og.find({$or: [ {status: 2},{status: 0}]}).sort({_id: -1})
    },

    async update(req, res){
        const data = await Member.findByIdAndUpdate(req.params.id, req.body, {new: true})
        //console.log(req.params)
        //console.log(req.body)
        return res.json(data)
    }, 
}