const {Router} = require('express');
const router =Router();
router.get('/', (req,res) => {
    res.json({'Title': "Hola mundo"});
   });
   module.exports=router;

   