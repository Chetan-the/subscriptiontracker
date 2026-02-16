import {Router} from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';
const subscriptionRouter=Router();
subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'get all subscription details'});
})
subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'get subscription detail by id'});
})
subscriptionRouter.post('/',authorize,createSubscription);

subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:'update a subscription'});

})
subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'delete a subscription'});
})
subscriptionRouter.get('/user/:id',authorize,getUserSubscriptions);

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:'cancel subscriptions'});
})
subscriptionRouter.get('upcoming-renewals',(req,res)=>{
    res.send({title:'get all upcoming renewals'});
})
export default subscriptionRouter;