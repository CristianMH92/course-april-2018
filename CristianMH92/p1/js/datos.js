(function DATOS(document){
    'use strict';
   
   const URL = '../json/datos.json';
  
   fetch(URL)
   .then(response=>response.json())
    .then(response=>datos(response))
    .catch('Error');
    
    const datos = (response) => {
        for(const resp in response.data)
            {
                
                let nombre = response.data[resp].nombre;
                let mascota = response.data[resp].mascota;
                
                document.getElementById("contenidoDatos").innerHTML += `<tr><td>${nombre}</td><td>${mascota}</td></tr>`;
            }
    }

})(document);
