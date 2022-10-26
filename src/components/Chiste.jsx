import React, { useEffect, useState } from 'react';

function Chiste() {

  /*
  *Cargar en una lista todas las categorias
  */
  // const [categoria, setCategoria] = useState();

  // useEffect(() => {
  //   async function traercategorias() {
  //     const response = await fetch(`https://api.chucknorris.io/jokes/categories`)
  //     const data = await response.json()
  //   setCategoria(data);
  //   console.log(categoria)
  //   }
  //   traercategorias();
  // },[])

  // const array=[];
  // for (const i in categoriachiste) {
  //   array.push(categoriachiste[i].name);
  // }

  // function cargar_tipo_Chiste() {

  //   addOptions("tiposchistes", array);
  // }
  // function addOptions(domElement, array) {
  //   var select = document.getElementsByName(domElement);

  //   for (const i in array) {
  //     var option = document.createElement("option");
  //     option.text = array[i];
  //     select.add(option);
  //   }

  // }
  // cargar_tipo_Chiste();

  /*
  *C=================================
  */

  /*
    *trer categoria seleccionada
    */



  /*
  *cargar el chiste
  */




  const [chiste, setChiste] = useState();

  useEffect(() => {
    async function traerchiste(cat) {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${cat}`)
      const data = await response.json()
      setChiste(data.value);
      // console.log(chiste)
    }

    traerchiste(cat);
  })

  function CargarChiste() {
    document.getElementById("impchiste").innerHTML = chiste ;
    

  }

  function limptextarea() {
    document.getElementById("impchiste").innerHTML = " ";
  }

  const [cat, setCat] = useState("dev");
  function obtenerseleccion(event) {
   setCat(event.target.options[event.target.selectedIndex].text); 
  }

  //  var op = document.getElementsByName("tiposchistes").text;
  //   console.log(op+" hoa")

  return (
    <div>
      <select
        name="tiposchistes"
        onChange={obtenerseleccion}
      >
        <option>animal</option>
        <option>career</option>
        <option>celebrity</option>
        <option>dev</option>
        <option>explicit</option>
        <option>fashion</option>
        <option>food</option>
        <option>history</option>
        <option>money</option>
        <option>movie</option>
        <option>music</option>
        <option>political</option>
        <option>religion</option>
        <option>science</option>
        <option>sport</option>
        <option>travel</option>
      </select>
      <hr></hr>
      <button onClick={CargarChiste}>Cargar Chiste</button>
      <hr></hr>
      <button onClick={limptextarea}>Limpiar Chiste</button>
      <hr></hr>
      <textarea id="impchiste"></textarea>
    </div>
  );
}


export default Chiste;