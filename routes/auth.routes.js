import {Router} from 'express';
const authRouter=Router();
authRouter.post('/signup',(req,res)=>{
    res.send({title:'sign up'});
})
authRouter.post('/signin',(req,res)=>{
    res.send({title:'sign in'});
})
authRouter.post('/signout',(req,res)=>{
    res.send({title:'signout'});
})
export default authRouter;