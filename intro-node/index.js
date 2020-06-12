const express = require('express')
const app = express();

app.get('*',(request,response)=>{
    response.send('<h1>Chanchito feliz</h1>')
})

app.listen(8080,()=>console.log('Nuestro servidor escucha en puerto 8080'))