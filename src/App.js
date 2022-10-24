// import ButtonGenerar from './components/ButtonGenerar'
// import ComboboxTipoChiste from './components/ComboboxTipoChiste'
// import TextAreaMostrar from './components/TextAreaMostrar'
import React, { useState, useEffect } from 'react';
function App() {



  const [categorias, setcategorias] = useState();
  const [loaded2, setloaded2] = useState(false);
useEffect(()=>{
fetch("https://api.chucknorris.io/jokes/categories")
.then((res2)=> res2.json())
.then((chiste2)=>setcategorias(chiste2))
.catch(err2=>console.log(err2))
.finally(()=>setloaded2(true));
  },[])

 const ListaCategorias=[];

 for(var i in categorias){
ListaCategorias.push([categorias[i]]);
 }


  //Capturamos la respuesta de la API
  const [chisternd, setchisternd] = useState();
  const [loaded, setloaded] = useState(false);
  //Traemos una respuesta de la api
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res1) => res1.json())
      .then((chiste1) => setchisternd(chiste1))
      .catch(err1 => console.log(err1))
      .finally(() => setloaded(true));
  }, []);


    //Capturamos la respuesta de la API
    const [chisterndcat, setchisterndcat] = useState();
    const [loadedcat, setloadedcat] = useState(false);
    //Traemos una respuesta de la api
    useEffect(() => {
      fetch(`https://api.chucknorris.io/jokes/random?category=${ListaCategorias[i]}`)
        .then((res2) => res2.json())
        .then((chiste2) => setchisterndcat(chiste2))
        .catch(err2 => console.log(err2))
        .finally(() => setloadedcat(true));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chistes aleatorios de chuck Norris</h1>

        <h2>Categoria: {ListaCategorias[1]}</h2>

        <h2>Chiste: {loaded && chisternd.value}</h2>
   
        <h2>Chiste con categorias: {loadedcat && chisterndcat.value}</h2>

        {/* <ComboboxTipoChiste></ComboboxTipoChiste>
        <ButtonGenerar></ButtonGenerar>
        <TextAreaMostrar></TextAreaMostrar> */}
      </header>
    </div>
  );
}

export default App;
