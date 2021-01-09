const handleIntersignin = (req, res, db) => {
    const {fname,email,emotion} = req.body;

// const timestamp = Date.now();

  db('intersignin')
    .returning('*')
    .insert({
        email: email,
        fname: fname,
        emotion: emotion,
        
      })
      .onConflict('email')
      .merge({
        emotion: emotion
      })
    //   .where('fname', '=', fname)
      .then(user => {
        res.json(user[0]);
    })  

}

module.exports = {
    handleIntersignin : handleIntersignin
};
