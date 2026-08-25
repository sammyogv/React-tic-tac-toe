import './App.css'
import {useState} from 'react'


    





export default function App() {


    function handleClick(){
    // alert("You clicked me!")
    return setCount(count + 1);

    }

    const products = [
        {title: 'Cabbage', isFruite: false, id: 1}, 
        {title: 'Garlic', isFruit:false, id: 2},
        {title: 'Apple', isFruit:true, id: 3}
    ];


    const listItems = products.map(i => 
        <li key={i.id} style={{color: !i.isFruit ? "blue" : "green"}}
        
        > {i.title} 
        </li>
    );

    const [count, setCount] = useState(0);


  return(
    <>
        <ul>
            {listItems}
        </ul>

       <Mybutton count={count} onClick={handleClick}/>
       <Mybutton count={count} onClick={handleClick}/>

    </>
  )
}

function Mybutton({count, onClick}){
    return(
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}





