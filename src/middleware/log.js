const logRequest = (req, res, next) => {
        console.log('Log path: ', req.path);
        next();
}

module.exports = logRequest;