const {Router} = require('express'); 
const res=require('express/lib/response');
const router =Router();
const_ = require('underscore') ;
const movies = require('../sample.json'); 
console.log(movies); 
router.get('/', (req,res) => {
    res.json(movies);
});
router.post('/', (req,res) => {
    //console.log(req.body);
    const {nombre, director, years, genero, premiaciones} = req.body;
    if(nombre && director && years && genero && premiaciones){
        const id = movies.length + 1;
        const newMovie ={...req.body, id};
        console.log(newMovie);
        movies.push(newMovie);
        res.json(movies);
 }else{
 res.status(500).json({error:'no se admite este error'});
 }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; 
    let indexToRemove = -1;
    movies.forEach((movie, i) => {
        if (movie.id == id) {
            indexToRemove = i;
        }
    });
    if (indexToRemove !== -1) {
        movies.splice(indexToRemove, 1);
        res.json({ message: 'eliminacion exitosa' });
    }else {
        res.status(404).json({ error: 'pelicula inexistente' });
        }
       });
       module.exports =router;
