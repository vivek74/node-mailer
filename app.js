const nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
			type: 'OAuth2',
			user:'vivekshakrawar74@gmail.com',
			clientId:'473193405731-ukeha6935ohggvuml1dbcfesa1216iun.apps.googleusercontent.com',
			clientSecret:'dibUKPl-qVoNWXW4FiV1gAAG',
			refreshToken:'1/bAAQ7oovNoEGdrqynb9Mqx5ixL_-sE-UPzGwJcrxBic',
			accessToken:'ya29.GlszBWuXvRIAeXuOThN21T6TbErteiJ5yg6uWJxOCBqDKWT9QAxNrchcRITDkfvroCt9NEXYulggbf7LzotkfgXdSKuQic23kEbN8RQz6UtGme_siMckaUe3fbn4'
	},
})

var mailOptions={
	from:'vivek <vivekshakrawar74@gmail.com>',
	to:'vivekkumar74@yahoo.in',
	subject:'nodemailer test',
	text:'hello world'
}

transporter.sendMail(mailOptions, function(err,res){
	if(err){
		console.log('Error');
	} else {
		console.log('Email sent');
	}
})
