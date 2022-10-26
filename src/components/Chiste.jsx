import React, { useEffect, useState } from 'react';
import '../styles/styles.css'

function Chiste() {

  /*
  *Cargar en una lista todas las categorias
  */
  const [categoria, setCategoria] = useState();
  useEffect(() => {
    async function traercategorias() {
      const response = await fetch(`https://api.chucknorris.io/jokes/categories`)
      const data = await response.json()
      setCategoria(data);
    }
    traercategorias();
   
  }, [])
  

  function CargarCategorias() {
    const select = document.getElementById("tiposchistes");
    for (let i = 0; i < categoria.length; i++) {
      let opt = document.createElement("option");
      opt.value = categoria[i];
      opt.innerHTML = categoria[i];
      select.add(opt);
    } 
  }


  const [chiste, setChiste] = useState();
  useEffect(() => {
    async function traerchiste(cat) {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`)
      const data = await response.json()
      setChiste(data.value);

    }

    traerchiste(cat);
  })

  function CargarChiste() {
    document.getElementById("impchiste").innerHTML = chiste;

  }

 

  const [cat, setCat] = useState("dev");
  function obtenerseleccion(event) {
    setCat(event.target.options[event.target.selectedIndex].text);
  }

  return (
    <div className='contenedor'>
      <select
        id="tiposchistes"
        onChange={obtenerseleccion}
      >
      </select>
      <hr></hr>
      <button className="btn" onClick={CargarCategorias}>Cargar categorias</button>
      <hr></hr>
      <button className="btn" onClick={CargarChiste}>Cargar Chiste</button>
      <hr></hr>
      <textarea id="impchiste"></textarea>
    </div>
  );



}


export default Chiste;