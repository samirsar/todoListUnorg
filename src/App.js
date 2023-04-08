import './App.css';
import { useState } from 'react';

function App() {
  const [list, setlist] = useState([]);
  const [element, setelement] = useState("");
  
  const remove=(id)=>{
    // cons newList=list.filter((item)=>{})
    console.log(id);
    const newList=list.filter((item,id1)=>id1!=id);
    // console.log(newList,"this is")
    setlist(newList);
  }
  const done=(id)=>{

    const newList=[...list];
    newList[id].done=1;
    setlist(newList)
  }
  return (
    <div>
      <div className="container "  style={{display:'flex',justifyContent:'center'}}>
        <div className="row">
          <div className="col-12">
            <h2>Samir's Todo list</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-7" style={{border:'2px solid black'}}>
            {
              list.length?<div className="container my-2">
                {list.map((elem,id)=>{
                  return(<div key={id}>
                    <p className='my-2'>{id+1}. {elem.element}</p>
                    <button className='mx-2' onClick={()=>remove(id)} >remove</button>  
                    
                    <button onClick={()=>done(id)}  disabled={elem.done}>Done</button> 
                    </div>
                  )
                })}
              </div>:<h2>wohooo there is no todo</h2>
            }
            
          </div>
          <div className="row my-2"></div>
          <div className="col-7">

            <input type='text' onChange={(event)=>{
               setelement(event.target.value)

            }} value={element} />
            <button className='mx-2' onClick={(event)=>{
              let tempList=[...list];
              tempList.push({id:list.length,element:element,done:0});
              setlist(tempList);
            }}>Add todo</button>
          </div>
        </div>
      </div>
     
      
      
    </div>
  );
}

export default App;
