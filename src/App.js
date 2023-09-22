import './App.css';
import logoClics from './img/logoclics.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState, useEffect } from 'react';

function App() {

  //aqui usamos los hooks
  //useState
  const [numClics, setNumClics] = useState(0); //a esos valores le asignamos el valor retornado de useState, le pasamos el valor inicial del contador

  //contador automatico
  const [contadorAutomatico, setContadorAutomatico] = useState(10);

  //Habilitar y deshabilitar los botones de click
  const [botonesDeshabilitados, setBotonesDeshabilitados] = useState(false);

  const manejarClicSuma = () => {
    if(!botonesDeshabilitados){
      setNumClics(numClics + 1);
    }
    
  };

  const manejarClicResta = () => {
    if(!botonesDeshabilitados){
      setNumClics(numClics - 1);
    }
    
  };

  const reiniciarContador = () => {
    setNumClics(0);
    //Para la funcionalidad de deshabilitar los botones cuando llegue a 10 seg
    setContadorAutomatico(10);
    setBotonesDeshabilitados(false);
  };


  //Para el contador automatico
  useEffect(() => {

    if (contadorAutomatico <= 0) {
      setBotonesDeshabilitados(true);
    } else {
      setBotonesDeshabilitados(false);
    }

    const interval = setInterval(() => {
      if (contadorAutomatico > 0) {
        setContadorAutomatico(contadorAutomatico - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [contadorAutomatico]);

  return (
    <div className='App'>
      
      <div className='logo-contenedor'>
        <img className='logo' src={logoClics} alt='Logo de la app'/>
      </div>

      <div className='contenedor-principal'>

        <Contador numClics={numClics} />
        <h1 className='contador-automatico'>Contador Automático: {contadorAutomatico} segundos</h1>
        <div className='button-container'>
        <Boton 
          texto='Clic+'
          esBotonDeClic={true}
          esBotonSuma={true}
          manejarClic={manejarClicSuma}//asigna la funcion manejarClicSuma al propot manjeraClic
        />
        <Boton 
          texto='Clic-'
          esBotonDeClic={true}
          esBotonSuma={false}
          manejarClic={manejarClicResta}//asigna la funcion manejarClicResta al propot manjeraClic
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          esBotonSuma={false}
          manejarClic={reiniciarContador}//asigna la funcion reiniciarContador al propot manjeraClic
        />
        </div>
      </div>
      
    </div>
  );
}

export default App;
