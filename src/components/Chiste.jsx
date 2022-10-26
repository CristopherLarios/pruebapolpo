import React, { useEffect, useState } from 'react';
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagen1 from '../asset/imagen1.png'


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
    <div className='container d-flex justify-content-center align-items-center' >

      <div className='card bg-secondary text-white align-items-center'>
        <img className='img' src={imagen1} alt="imgprincipal"></img>
        <div className='card-body align-items-center'>
          <h1 className='card-title'>Chistes Chuck Norris</h1>
          <p className='card-text'>Cargue y seleccione las diferentes categorias</p>
          <hr></hr>
          <button className="btn1" onClick={CargarCategorias}>Cargar categorias</button>
          <button className="btn2" onClick={CargarChiste}>Cargar Chiste</button>
          <hr></hr>
          <select
            id="tiposchistes"
            onChange={obtenerseleccion}
            className=''
          >
          </select>
          <hr></hr>
          <textarea className='textchiste' id="impchiste"></textarea>

        </div>






      </div>



    </div>
  );



}


export default Chiste;