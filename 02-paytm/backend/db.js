const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bijjahimanshu05:Explore-MongoDB@cluster0.g0j9e.mongodb.net/paytm-project")

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3,
		maxlength: 30,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 30,
	},
	firstname: {
		type: String,
		required: true,
		trim: true,
		maxlength: 30,
	},
	lastname: {
		type: String,
		required: true,
		trim: true,
		maxlength: 30,
	}
});

const accountSchema = new mongoose.Schema({
    accountId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})


const User = mongoose.model("user", userSchema)
const Account = mongoose.model("account", accountSchema)

module.exports = {
    User,
    Account
}