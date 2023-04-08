import './App.css';
import { useState } from 'react';

function App() {
  const [list, setlist] = useState([]);
  const [element, setelement] = useState("");
  const [editFlag, seteditFlag] = useState([]);

  
  const remove=(id)=>{
    // cons newList=list.filter((item)=>{})
    console.log(id);
    const newList=list.filter((item,id1)=>id1!=id);
    // console.log(newList,"this is")
    setlist(newList);
  }
  const Markdone=(id)=>{

    const newList=[...list];
    newList[id].done=1;
    setlist(newList)
  }
  const Edit=(id)=>{
    let tempEditFlag=[...editFlag];
    tempEditFlag[id]=1;
    seteditFlag(tempEditFlag);
    
    
  }
  const done=(id)=>{
    let tempEditFlag=[...editFlag];
    tempEditFlag[id]=null;

    seteditFlag(tempEditFlag);

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
          <div className="col-10" style={{border:'2px solid black'}}>
            {
              list.length?<div className="container my-2">
                {list.map((elem,id)=>{
                  return(<div key={id}>
                    <p className='my-2'>{id+1}. {elem.element}</p>
                    {editFlag[id]==1?<textarea type='text' value={list[id].element} onChange={(event)=>{
                      let newList=[...list];
                      list[id].element=event.target.value;
                      setlist(newList);
                      
                    }}></textarea>:null}
                    <button className='mx-2' onClick={()=>remove(id)} >Remove</button>  
                   { editFlag[id]==null?<button className='mx-2' onClick={()=>Edit(id)}  >Edit</button>:<button className='mx-2'  onClick={(event)=>{
                    done(id);
                   }}>Done</button>  }
                    
                    <button onClick={()=>Markdone(id)}  disabled={elem.done}>Mark Done</button> 
                    </div>
                  )
                })}
              </div>:<h2>wohooo there is no todo</h2>
            }
            
          </div>
          <div className="row my-2"></div>
          <div className="col-7">

            <input type='text' id='2'  onChange={(event)=>{
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
