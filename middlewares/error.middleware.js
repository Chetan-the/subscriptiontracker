const errorMiddleware=(err,req,res,next)=>{
    try{
        let error={...err};
        error.message=err.message;
        console.error(err);
        //mongoose bad objectID
        if(err.name==='CastError'){
            const message='source not found';
            error=new Error(message);
            error.statuscode=404;


        }
        //mongoose duplicate key
        if(err.code===11000){
            const message='duplicate field value entered';
            error=new Error(message);
            error.statuscode=400;
        }
        //mongoose validation error
        if(err.name==='ValidationError'){
            const message=Object.values(err.errors).map(val=>val.message);
            error=new Error(message.join(', '));
            error.statuscode=400;



        }
        res.status(error.statuscode || 500).json({success:false,error:error.message || 'server error'});
    }catch(error){
        next(error);
    }
    
};
export default errorMiddleware;
//create a subscription->middle ware(check for renewal date)->middleware(check for errors)->controllers