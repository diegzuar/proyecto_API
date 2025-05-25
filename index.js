
const express =require('express');
const app=express();
const morgan =require('morgan');
app.set('PORT', process.env.PORT || 13000);
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());//
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.listen(app.get('PORT'), () => {
    console.log(`Server on Port ${app.get('PORT')}`);
    });