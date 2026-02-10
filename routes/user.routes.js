import {Router} from 'express';
const userRouter=Router();
//get/users-get all the users
//get/users/:id-get user by id
userRouter.get('/',(req,res)=>{
    res.send({title:'get all users'});

})
userRouter.get('/:id',(req,res)=>{
    res.send({title:'get user detail'});
})
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