const mongoose = require('mongoose');
const Data = mongoose.model('Data')

module.exports = {
    async index(req, res){
        const data = await Data.find({dia : req.params.dataEscolhida},(err, data) => {
            if (err) return res.json({ success: false, error: err });
            // return res.json({ success: true, data: data });
            //console.log(req.params)
            console.log(data)
            return res.json({ success: true, data: data });
          }).sort({hora: 1});
       
    },

    async show(req, res){
        const data = await Data.findById(req.params.id)
        return res.json(data)
    },

    async store(req, res){
        const data = await Data.create(req.body)
        return res.json(data)
    },
    
       
    async update(req, res){
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(req.params)
        console.log(req.body)
        return res.json(data)
    }, 
      
    // async destroy(req, res){
    //     await Data.findByIdAndRemove(req.params.id)
    //     return res.send()

    // }

    async schedule(req, res){
        const data = await Data.find({sid : req.params.sidEscolhida},(err, data) => {
            if (err) return res.json({ success: false, error: err });
            // return res.json({ success: true, data: data });
            //console.log(req.params)
            console.log(data)
            return res.json({ success: true, data: data });
          }).sort({dia: 1});
       
    },

}