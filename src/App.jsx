
// Arquivos
import { Outlet } from 'react-router-dom'
import './App.css'
import { GetAll, Set, Remove } from "../manager"
import { useState } from 'react'
import Buttons from './Components/Buttons'
import Forms from './Components/Forms'

function App() {

  const [dados, setDados] = useState([])  

  return (
    <div className="App">
      <div className='card'>        
        <div className='input'>
          <Forms name="name"/> 
        </div>        
        <div className='btn'>
          <Buttons name="add" class="add" method={Set}/>
        </div>  
      </div>

      <div className='card card-returned'>
        <div className="find">
          <Buttons name="find" class="find" method={GetAll} result={(dado)=> { setDados(dado) }}/>
        </div>

        <div className='line'> </div>
        
        <div className='found'>          
            {(dados.length != 0) ? (
              dados.map((item) => (
                <div className="item" id={item.id} key={item.id}>
                  <p>{item.nome}</p>
                  <div onClick={(event) => {                     
                      Remove(event.currentTarget.parentElement.id)
                      setTimeout(async()=>{
                        setDados(await GetAll())
                      },300)
                    }}>
                    <i></i>
                  </div>
                </div>
              ))
            ) : (
              <div className="item">
                <p>Not Found</p>                
              </div>
            )}            
        </div>
      </div>
    </div>
  )
}

export default App
