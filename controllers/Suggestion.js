const handleSuggestion = (req, res, db) => {
    const {name,email,profession,suggestion} = req.body;

    db('suggestions1')
    .returning('*')
    .insert({
        name:name,
        email:email,
        profession:profession,
        suggestion:suggestion,
    }).then(res.json("success")) 
};

module.exports = {
    handleSuggestion : handleSuggestion
};
       