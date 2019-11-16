const express = require('express');
const router = express.Router();
/* GET home page. */
const authcheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/')
    }
    else{next();}
}
router.get('/', (req,res)=>{
    res.render('index',{title:'Home'})
}) ;
router.get('/privacy', (req,res)=>{
    res.render('index',{title:'Home'})
} );
router.get('/terms', (req,res)=>{
    res.render('index',{title:'Home'})
} );
router.get('/dashboard',authcheck,(req,res)=>{
    res.render('dashboard',{title:'Dashboard',user:req.user,logedIn:true})
});
router.get('/about',authcheck, (req,res)=>{
    res.render('index',{title:'Home'})
} );
module.exports = router;

