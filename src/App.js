import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import question from './data/question.json';

function App() {
  console.log(question);
  return (
    <div className='container my-5'>
      <h1>Online Quiz</h1>
      {
        question.map(q=>(
          <div key={q.id}>
            <h5>{q.statement}</h5>
            <ul className="list-group  ">
              {q.option.map(option => <li key={option} className="list-group-item active">
                {option}
              </li>)}
            </ul>
          </div>
        ))
      }
    </div>
  )

}











// import logo from './logo.svg';
// import './App.css';
// 1 name capital;
// 2 return UI(html tag-JSX element);
// 3 <> {expersion} </>
// 4 single root element - Fragment <></>;
// inline css= <h1 style={{....styling...}}></h1>
//external css import
// import { useState } from "react";

// function App() {
//   let[products,setProducts]=useState(
//    [
//     {
//       id:1,
//       title:"laptop",
//       price: 50000,
//       avail: true
//     },
//     {
//       id:2,
//       title:"led",
//       price: 50000,
//       avail: false
//     },
//     {
//       id:3,
//       title:"tv",
//       price: 5000,
//       avail: true
//     }
//    ]
//   )
//     const Increment=(id)=>{
//       let copyProducts=[...products];
//       let index=copyProducts.findIndex(p=>p.id===id);
//       copyProducts[index].price=copyProducts[index].price+=5000;
//       setProducts(copyProducts)
//       //  setProducts(products.map( p => ({...p, price: p.id===id?p.price+5000:p.price})))
//     }
//     const decrement=(id)=>{
//       let copyProducts=[...products];
//       let index= copyProducts.findIndex(p =>p.id===id);
//       copyProducts[index].price=copyProducts[index].price-=5000;
//       setProducts(copyProducts)
//     }
//   return (
//     <>
//       <h1>Products Detail</h1>
//     {
//       products.map(p => {
//         return (
//           < >
//           <h3>id={p.id}</h3>
//           <h3>title={p.title}</h3>
//           <h3 style={{color:p.avail?"green":"red"} }>
//             <button onClick={()=>decrement(p.id)}>-</button>
//              price={p.price}
//             <button onClick={()=>Increment(p.id) } disabled={!p.avail}>+</button></h3>
//           <h3>avail={p.avail?"in stock":"out of stock"}</h3>
//           <hr />
//           </>
//         )
//       })
//     }
      


//     </>
//   )
// }

// function App() {
//   let[product,newProduct]=useState(
//     {
//       id:1,
//       title:"laptop",
//       price: 50000,
//       avail: true
//     }
//   )
//     const handleIncrement=()=>{
//       let copyProduct = {...product};
//       copyProduct.price += 5000;
//       newProduct(copyProduct);
//     }
//     const outOfStock=()=>{
//       newProduct({...product, avail: !product.avail})
//     }
//   return (
//     <>
//       <h1>Product Detail</h1>
//       <h3>id={product.id}</h3>
//       <h3>title={product.title}</h3>
//       <h3 style={{color:product.avail?"green":"red"}}>price ={product.price}</h3>
//       <h3>avail ={product.avail?"in stock":"out of stock"}</h3>
//       <button onClick={handleIncrement} disabled={!product.avail}>increment</button>
//       <button onClick={outOfStock} >stock</button>


//     </>
//   )
// }












































// function App() {
//   let [counter, setCounter] = useState([0, 1, 2, 3, 4, 5]);
//   const decrement = (index) => {
//     let copyCounter =[...counter];
//     copyCounter[index]-=1;
//     setCounter(copyCounter);
//   }
//   const increment = (index) => {
//     let copyCounter =[...counter]; 
//     copyCounter[index]+=1;
//     setCounter(copyCounter);
    
//   }
//   // let [counterX, setCounterX] = useState(0);
//   // const decrementX = () => {
//   //   setCounterX(counterX-=1)
//   // }
//   // const incrementX = (inde) => {
//   //   setCounterX(counterX = counterX + 1)
//   // }
//   return (

//     <div>
//       {
//         counter.map((x,index) => (
//       <>
//         <button onClick={()=>decrement(index)}>decrement</button>
//         < span>
//           {x}
//         </span>
//         <button onClick={()=>increment(index)}>increment</button>
//         <br/>  
//     </>
//   )
//         )
// }
//   </div>
//   )

    






//   // let x=10;
//   // let y=20;
//   // return(
//   //   <>
//   //   <div>
//   //     <h1>simple calculator</h1>
//   //     <h1>sum of x + y is {x + y}</h1>
//   //   </div>
//   //   </>
//   // )

// }

export default App;
