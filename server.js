const express = require('express');
const app = express();

app.listen(4000,function(error){
   if(error){
    console.log("Servido clashou. não inciado :(");
   }else{
    console.log("Servido inciado com sucesso");
   }
})

