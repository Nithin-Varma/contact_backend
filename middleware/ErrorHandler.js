import { constants } from "../constants.js";

const ErrorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : constants.Server;
    switch (statusCode) {
        case constants.ValidationError:
            res.json({
                title : "Validation Failed",
                message: err.message,
                stackTrace : err.stack
            })
            break;

        case constants.NotFound:
            res.json({
                title : "Not Found",
                message: err.message,
                stackTrace : err.stack
            })
            break;

        case constants.Forbidden :
            res.json({
                title : "Forbidden Error",
                message: err.message,
                stackTrace: err.stack
            })
            break;

        case constants.UnAuthorized :
            res.json({
                title : "UnAuthorized",
                message: err.message,
                stackTrace: err.stack
            })
            break;
        
        case constants.Server :
            res.json({
                title : "Server Error",
                message: err.message,
                stackTrace: err.stack
            })
            break;
    
        default:
            console.log("No Error Found")
            break;
    }
}

export default ErrorHandler;