const handleregister = (req, res, db, bcrypt) => {
	const { email, fname, password,lname,gender,age,songpref } = req.body;
	if(!email || !fname || !password) {
		return res.status(400).json('Please fill the details...')
	}
    const hash = bcrypt.hashSync(password);
    
	 db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('loginuser1')
			.returning('email')
			.then(loginEmail => {
				return trx('signupuser1')
					.returning('*')
					.insert({
						email: loginEmail[0],
						fname: fname,
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
        .catch(err => res.status(400).json('Email already linked with another account.please try using different account...'))
	
};

module.exports = {
	handleregister: handleregister
};