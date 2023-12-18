const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "tellmewheredowedrawtheline?", (err, user) => {
            if (err) {
                res.status(400).json("Token is not valid!");
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated!");
    }
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        // console.log(req.params.id);
        console.log(req.user);
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(402).json("You are not admin!");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAdmin };
