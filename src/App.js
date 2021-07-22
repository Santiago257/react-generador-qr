import React, {useState} from 'react'
import QRCode from 'react-qr-code'
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
</style>

function App() {

  const [input, setInput] = useState('');

  const handleChange = e => {
    //Vamos a almacenar el valor de lo que se ingreso en el input
    setInput(e.target.value);
  }



  return (
    <div className="App" >
      <form className="qrForm">
      <h1>Generador de codigo QR</h1>
      <input 
        type="text" 
        placeholder="Ingresa el link" 
        className="inputStyle"
        autoFocus="true"
        onChange={handleChange}
        
      />
      <form className= "qrCode">
         <QRCode 
          //El mensaje del codigo QR
          value={input} 
          //Tamaño del codigo QR
          size="256"
          //Color del fondo
          bgColor="#E8F1F5"
          //Color del codigo
          fgColor="black"
          //Capacidad de poder leer el contenido del QR aunque tenga una parte dañada
          level="H"
            />
      </form>
      
      </form>
    </div>
      
  );
}

export default App;
