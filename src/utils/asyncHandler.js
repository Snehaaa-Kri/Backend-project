//method 1 : try and catch approach
//method 2 : promises approach - (will be using!)
//step2 : export 

const  asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }

}

export default asyncHandler;



//this is a wrapper function which will be used aage kaafi jagh!

//method 1 : try and catch approach

/*
const asyncHandler = (fn) => async(err, req, res,next) => {
    try{
        await fbn(err, req, res, next); //arg function execute
    }
    catch(err){
        res.status(err.code || 500).json({
            success : false,
            message : err.message
        })
    }
}
*/