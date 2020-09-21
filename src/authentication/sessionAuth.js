const userAuth = async (req, res, next) => {
    if (!req.session.user) {
        res.send("Not Auth");
    }
    next();
}

const staffAuth = async (req, res, next) => {
    if (!req.session.staff) {
        res.send("Not Auth");
    }
    next();
}

const generalAuth = async (req, res) => {
    if (!req.session.staff && !req.session.user) {
        res.send("Not Auth");
    }
}

module.exports = { userAuth, staffAuth, generalAuth }