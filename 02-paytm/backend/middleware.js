const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;
	const word = authHeader.split(" ")[0];
	const token = authHeader.split(" ")[1];
	if (word != "Bearer") {
		return res.json({
			success: false,
			msg: "No valid user authorization schema provided",
		});
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET);

		req.userId = decoded.userId;

		if (decoded.userId) {
			next();
		} else {
			res.json({
				success: false,
				msg: "Invalid token",
			});
		}
	} catch (err) {
		return res.json({
			success: false,
			msg: "Token verification failed",
			err: err.message,
		});
	}
}

module.exports = {
	authMiddleware,
};
