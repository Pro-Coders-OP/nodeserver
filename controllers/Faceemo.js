const handleFaceemo = (req, res, db) => {
    const {name,gender,age,songpref,emotion } = req.body;

    db('surveyusers2')
    .returning('*')
    .insert({
        name:name,
        gender:gender,
        age:age,
        songpref:songpref,
        emotion:emotion
    }).then(res.json("success"))        
    
    // return db.select('*').from('surveyusers1')
    //           .returning('*')
    //           .where('email', '=', email)
    //           .then(user => {
    //            res.json(user[0])
    //         })
    


    // db.insert({
    //         name:name,
    //         email:email,
    //         gender:gender,
    //         age:age,
    //         songpref:pref_song,
    //         emotion:emotion
    //         })
    //        .into('surveyusers')
    //        .then(user => {
    //            consloe.logres.send(user)
    //        })
        //    .returning('*')
        //    .then(console.log)
        //    .then(user => {
            
        //    res.json(user[0])
    // })  
};

module.exports = {
    handleFaceemo : handleFaceemo
};
