const handlesignin = (req, res, db, bcrypt) => {
	const { email, password } = req.body;
	if(!email || !password) {
		return res.status(400).json('Please fill the details...')
	}
	  db.select('email', 'hash').from('loginuser1')
		.where('email', '=', email)
		.then(data => {
			const isValid = bcrypt.compareSync(password, data[0].hash);
			console.log(isValid);
			if (isValid) {
				return db.select('*').from('signupuser1')
					  	.where('email', '=', email)
					  	.then(user => {
							res.json(user[0])
						})
						.catch(err => res.status(400).json('Unable to get user'))
			} else {
				res.status(400).json('Invalid credentials...')
			}
		   })
			.catch(err => res.status(400).json('Invalid credentials/Account doesnot exist. please create one!'))
}

module.exports = {
	handlesignin: handlesignin
};