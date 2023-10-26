
import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] =useState('black')

  const handleColor = (colour) =>{
    setColor(colour);
  }
  return (
    <>
     <div  style={{backgroundColor:color, width:'100%',height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center' >
       <marquee scrollAmount={25}>
        <h1 style={{color:'white'}}>BACKGROUND COLOR CHANGE</h1>
       </marquee>
       <div className='d-flex justify-content-center'>
          <button onClick={()=>handleColor('red')} style={{width:'100px',color:'white'}} className=' rounded m-1 bg-dark'>RED</button>
          <button onClick={()=>handleColor('green')} style={{width:'100px',color:'white'}} className='rounded m-1 bg-dark'>GREEN</button>
          <button onClick={()=>handleColor('blue')} style={{width:'100px',color:'white'}} className='rounded m-1 bg-dark'>BLUE</button>
          <button onClick={()=>handleColor('yellow')} style={{width:'100px',color:'white'}} className='rounded m-1 bg-dark'>YELLOW</button>
          <button onClick={()=>handleColor('orange')} style={{width:'100px',color:'white'}} className='rounded m-1 bg-dark'>ORANGE</button>
       </div>
     </div>
    </>
  );
}

export default App;
