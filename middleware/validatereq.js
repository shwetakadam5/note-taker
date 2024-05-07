// Custom middleware that logs out the type and path of each request to the server that is not found
const validatereq = (req, res, next) => {


    res.status(404).json({
        "Error": `Route NOT FOUND`,
        "Route": `${req.method} request to ${req.path}`
    }
    );

};

exports.validatereq = validatereq;
