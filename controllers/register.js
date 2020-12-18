const handleregister = (req, res, db, bcrypt) => {
	const { email, name, password,lname,gender,age,songpref } = req.body;
	if(!email || !name || !password) {
		return res.status(400).json('incorrect form submission')
	}
    const hash = bcrypt.hashSync(password);
    
	 db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('loginuser')
			.returning('email')
			.then(loginEmail => {
				return trx('signupuser')
					.returning('*')
					.insert({
						email: loginEmail[0],
						fname: name,
						lname:lname,
						gender:gender,
						age:age,
						songpref:songpref
					}).then(user => {
						res.json(user[0]);
					})
			})
			.then(trx.commit)
			.catch(trx.rollback)
        })
        .catch(err => res.status(400).json('Unable to Register'))
	
};

module.exports = {
	handleregister: handleregister
};