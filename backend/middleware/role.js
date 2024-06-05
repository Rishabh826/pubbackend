const requireClientRole = (req, res, next) => {
    if (req.user.role !== 'client') {
        return res.status(403).send({ error: "Access denied: Clients only" });
    }
    next();
}

module.exports = requireClientRole;
