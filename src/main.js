const showList=(results=false)=>{
  console.log(results)
  if(results){
    RICKANDMORTY.results=results
  }
  document.getElementById("categories").style.display="none";

document.getElementById("resultItems").innerHTML=''
  Object.keys(RICKANDMORTY.results).forEach(function(item){
    let character=RICKANDMORTY.results[item];
    console.log(RICKANDMORTY.results);
    let htmlElement=document.createElement('section');
    htmlElement.className='category';

    htmlElement.innerHTML='<a href="#characters">'+character.name+'</a><img src="'+character.image+'">';
    document.getElementById("resultItems").appendChild(htmlElement);

  });
  document.getElementById("result").style.display="block";
};
document.getElementById("characters").addEventListener("click", function(){showList()});


const showHome=()=>{
  document.getElementById("result").style.display="none";
  document.getElementById("categories").style.display="block";
};

document.getElementById("homeButton").addEventListener("click", showHome);

const sortList=(order='asc')=>{
  RICKANDMORTY.results.sort(sort('name',order));
  showList(RICKANDMORTY.results);
};

document.getElementById('sortAsc').addEventListener('click',function(){sortList()});
document.getElementById('sortDesc').addEventListener('click',function(){sortList('desc')});

//FILTRADO DE CATEGORIAS

/*const filterData=()=>{
  RICKANDMORTY.results.filter(filter('species',));
  showList(RICKANDMORTY.results);
}*/






//*/INTENTO DE ACTIVACIÓN RADIOBUTTONS  CON SUBMIT
  const filterData = () => {
    let radioForm = document.getElementById("filterFormHtml");
    radioForm.addEventListener("submit", function(event) {
      //  let checked = document.getElementsByTagName("radio")
      let data = new FormData(radioForm);

      let radioValue = "";
      for (const entry of data) {
        radioValue = entry[1];
      };
      let rickandmortylist = RICKANDMORTY.results;
      console.log (rickandmortylist);
      console.log(radioValue);

      let filtered = rickandmortylist.filter(function(el) {
          return el.species == radioValue;
        })

      console.log(filtered);
      event.preventDefault();
    }, false);

  }
  document.getElementById("filterButton").addEventListener("click", filterData);

/*
      let character=RICKANDMORTY.results.character;
      console.log(character);

      let filtering = (character, radioValue) => {
        return character.filter(radioValue);
        };

        console.log(filtering(RICKANDMORTY.character, radioValue));
*/
    /*  const filtering = (array, radioValue) => {
        return (RICKANDMORTY).filter(radioValue);
        };
        */




/*
const filterData = ()=> {
  let filterForm = document.forms["filterFormHtml"];
  let buttonsSelected = "";
  let i;
    for(i=0; i<filterForm.length; i++){
        if(filterForm[i].checked) {
        buttonsSelected = buttonsSelected + filterForm[i].value + " ";
        console.log(buttonsSelected);
      };
    };
};
*/


//document.getElementByClassName("radioButtonsSpecies").addEventListener("click", filterData);








/*
let url = "https://rickandmortyapi.com/api/";
let i = 0;


  let urlCharacter = url += "character/?page=" + i + " ";
    console.log(urlCharacter);
  const showList=()=>{
    document.getElementById("categories").style.display="none";

    fetch (urlCharacter)
    .then(rawApi => {
      console.log(url);
      return rawApi.json();
      })
    .then(showApi => {
      console.log(showApi)
      Object.keys(showApi.results).forEach(function(item){
        let character=showApi.results[item];
        let section=document.createElement('section');
        section.className='category';
        section.innerHTML='<a href="#genders">'+character.name+'</a><img src="'+character.image+'">';
        document.getElementById("result").appendChild(section);
      });
    });


    document.getElementById("result").style.display="block";
}
  document.getElementById("characters").addEventListener("click", showList);
*/

/* FUNCIÓN CON JSON
const showList=()=>{
  document.getElementById("categories").style.display="none";

//en esta parte se intenta crear un array de todas las páginas del objeto character(25)
// con una función do...while
   let url = [];
   let i = 1;
  do {
    url += "https://rickandmortyapi.com/api/character/?page=" + i + " ";
       i++;

  console.log(typeof url);
  console.log(url);
  let urlArray = url.split(" ");
  console.log(typeof urlArray);
  console.log(urlArray);

  //se insertó un fetch dentro de las llaves do (del antes mencionado do..while)
  fetch (urlArray)
    //en la primera parte del fetch se accede al api
    .then(rawApi => {
      console.log(urlArray);
      //con el siguiente .json los datos accedidos se transforman a json
      return rawApi.json();
      })

    //con la función showApi se accede al objeto ya como json.
    .then(showApi => {
      console.log(showApi);
    //se usa Object.keys para indicar la rama del objeto que nos interesa:
    // showApi--- que es como acabamos de nombrar al objeto en nuestra función
    //y dentro de éste, results, que es ele lugar de la api donde están los personajes
    //Después, se itera sobre el objeto con forEach
     Object.keys(showApi.results).forEach(function(item){
    //las siguientes líneas ayudan a establecer enlace con el DOM

        let character=showApi.results[item];
        let section=document.createElement('section');
        section.className='category';
        section.innerHTML='<a href="#genders">'+character.name+'</a><img src="'+character.image+'">';
        document.getElementById("result").appendChild(section);
      });
    });
    document.getElementById("result").style.display="block";
    //aquí está el final de la sentencia do...while, estableciendo el límite que se busca
      } while (i < 26);
};
  document.getElementById("characters").addEventListener("click", showList);
//llamada a caja de input
  document.getElementById("searchButton").addEventListener("click", searchBoxFunction)
}
*/
