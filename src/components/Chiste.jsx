import React, { useEffect, useState } from 'react';
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import imagen1 from '../asset/imagen1.png'
/*
  *Importamos los estilos y los hook
  */

function Chiste() {

  /*
  *Traemos todas las categorias desde la api
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

/*
  *Creamos los option a partir de todas las categorias
  *Verificamos si esta vacio y creamos los componentes
  *de lo contrario no se cargan 
  *esta funcion es llamada en el oneclick del select
  */
  function CargarCategorias() {
    const select = document.getElementById("tiposchistes");
    if (select.length === 0) {
      console.log("cargar "+select.size);
      categoria.map((num) => {
        let opt = document.createElement("option");
        opt.value = num;
        opt.innerHTML = num;
        select.add(opt);
      });
    } 
  }

/*
  *Obtenemos un chiste a partir de la categoria seleccionada en el select
  */
  const [chiste, setChiste] = useState();
  useEffect(() => {
    async function traerchiste(cat) {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`)
      const data = await response.json()
      setChiste(data.value);

    }
    traerchiste(cat);
  })

  /*
  *Cargar en el textArea el chiste que obtuvimos desde la API
  */
  function CargarChiste() {
    document.getElementById("impchiste").innerHTML = chiste;
  }


/*
  *obtenemos la cayegoria seleccionada con esta funcion que es llamada en el oneChange
  */
  const [cat, setCat] = useState("dev");
  function obtenerseleccion(event) {
    setCat(event.target.options[event.target.selectedIndex].text);
  }

  /*
  *Retornamos el componente a app.js
  */
  return (
    <div className='container d-flex justify-content-center align-items-center' >

      <div className='card bg-secondary text-white align-items-center'>
        <img className='img' src={imagen1} alt="imgprincipal"></img>
        <div className='card-body align-items-center'>
          <h1 className='card-title'>Chistes Chuck Norris</h1>
          <p className='card-text'>Cargue y seleccione las diferentes categorias</p>
          <hr></hr>
          {/* <button className="btn1" onClick={CargarCategorias}>Cargar categorias</button> */}
          <div className='container'>
          <button className="btn1" onClick={CargarChiste}>Cargar Chiste</button>
          </div>
          
          <hr></hr>
          <select
            id="tiposchistes"
            onChange={obtenerseleccion}
            onClick={CargarCategorias}
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