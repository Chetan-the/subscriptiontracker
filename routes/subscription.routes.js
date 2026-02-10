import {Router} from 'express';
const subscriptionRouter=Router();
subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'get all subscription details'});
})
subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'get subscription detail by id'});
})
subscriptionRouter.post('/',(req,res)=>{
    res.send({tile:'create a subscription'});
})
subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:'update a subscription'});

})
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'delete a subscription'});
})
subscriptionRouter.get('/user/:id',(req,res)=>{
    res.send({title:'get all user subscriptions'});
})
subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:'cancel subscriptions'});
})
subscriptionRouter.get('upcoming-renewals',(req,res)=>{
    res.send({title:'get all upcoming renewals'});
})
export default subscriptionRouter;