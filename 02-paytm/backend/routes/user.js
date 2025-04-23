const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

function jwtSign(user, res) {
	try {
		const token = jwt.sign(
			{
				userId: user._id,
			},
			JWT_SECRET
		);
		return res.json({
			success: true,
			token,
		});
	} catch (err) {
		return res.json({
			success: false,
			msg: "Incorrect Jwt password/ unable to sign Id",
			err: err.message,
		});
	}
}

const signupValidation = zod
	.object({
		username: zod.string().min(3).max(30).trim(),
		password: zod.string().min(3),
		firstname: zod.string().max(30),
		lastname: zod.string().max(30),
	})
	.strict();

router.post("/signup", async (req, res) => {
	const result = signupValidation.safeParse(req.body);
	console.log(result);
	if (!result.success) {
		return res.status(400).json({
			success: false,
			msg: "Incorrect/invalid inputs",
			err: result.error.format(),
		});
	}

	const duplicateUser = await User.findOne({ username: req.body.username });
	if (duplicateUser) {
		return res.status(409).json({
			success: false,
			msg: "Email already taken/ Incorrect inputs",
		});
	}

	try {
		const user = await User.create(req.body);
		const account = await Account.create({
			accountId : user._id,
			balance : Math.floor(Math.random() * 10000)
		})
		jwtSign(user, res);
	} catch (err) {
		return res.status(500).json({
			success: false,
			err: err.message,
		});
	}
});

const signinValidation = zod
	.object({
		username: zod.string().min(3).max(30).trim(),
		password: zod.string().min(3),
	})
	.strict();
router.post("/signin", async (req, res) => {
	const result = signinValidation.safeParse(req.body);
	if (!result.success) {
		return res.status(400).json({
			success: false,
			msg: "Incorrect/ Invalid inputs",
		});
	}

	let user;
	try {
		user = await User.findOne({
			username: req.body.username,
			password: req.body.password,
		});
	} catch (err) {
		return res.json({
			success: false,
			err: err.message,
		});
	}

	if (!user) {
		return res.json({
			success: false,
			msg: "Incorrect username/ Password",
		});
	}

	jwtSign(user, res);
});

router.get("/bulk", authMiddleware ,async (req, res) => {
	const filter = req.query.filter || "";
	try {
		const users = await User.find(
			{
				$or: [
					{
						username: {
							$regex: filter,
						},
					},
					{
						firstname: {
							$regex: filter,
						},
					},
					{
						lastname: {
							$regex: filter,
						},
					},
				],
			},
			"-password"
		);
		res.json({
			success: true,
			users,
		});
	} catch (err) {
		return res.json({
			success: false,
			msg: "User.find failed",
			err: err.message,
		});
	}
});

module.exports = router;
