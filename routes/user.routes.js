import {Router} from 'express';
import { getuser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';
const userRouter=Router();
//get/users-get all the users
//get/users/:id-get user by id
userRouter.get('/',getUsers);
userRouter.get('/:id',authorize,getuser);
userRouter.post('./',(req,res)=>{
    res.send({title:'create a new user'});
})
userRouter.put('/:id',(req,res)=>{
    res.send({title:'update a user'});
})
userRouter.delete('/:id',(req,res)=>{
    res.send({title:'delete a user'});
})
export default userRouter;