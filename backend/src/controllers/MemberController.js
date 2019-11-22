const mongoose = require('mongoose');
const Member = mongoose.model('Members')

module.exports = {
    async index(req, res){
        
        const members = await Member.find().sort({nome: 1})
        return res.json(members)

        // const members = await Member.find((err, data) => {
        //     if (err) return res.json({ success: false, error: err });
        //     // return res.json({ success: true, data: data });
        //     console.log(req.params)
        //     return res.json({ success: true, data: data });
        //   }).sort({nome: 1});
        
    }
}