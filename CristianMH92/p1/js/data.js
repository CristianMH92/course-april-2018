(function DATOS(document){
    'use strict';
   
   const URL = '../json/data.json';
  
   fetch(URL)
   .then(response=>response.json())
    .then(response=>fillTable(response.data))
    .catch('Error');
    
    const information = (response) => {
        for(const resp in response.data)
            {
                
                let name = response.data[resp].name;
                let color = response.data[resp].color;
                
                document.getElementById("datacontent").innerHTML += `<tr><td>${name}</td><td>${color}</td></tr>`;
            }
    }

})(document);
