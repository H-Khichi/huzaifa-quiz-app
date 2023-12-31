import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import question from './data/question.json';
import './App.css'

function App() {
    let [quiz, setQuiz]=useState(question);

    const getOptonClass=(q ,option)=>{
      let style=`list-group-item`;
      if(q.selection === option){
        style+= q.answer === option ? " green" :" red";
      }


      return style;

    }


    const onoptionclick=(qid,option)=>{
     let copyquiz=[...quiz];
     const index= copyquiz.findIndex(question => question.id === qid);
     copyquiz[index].selection = option;
     setQuiz(copyquiz);

    }
    return (
      <div className='container my-5'>
        <h1>Online Quiz</h1>
        {
          quiz.map(q=>(
            <div key={q.id}>
              <h5 class="que">{q.statement}</h5>
              <ul className="list-group  ">
                {q.option.map(option => 
                <li key={option} 
                className={getOptonClass(q, option)}
                onClick={()=>onoptionclick(q.id ,option)
                  }>
                  {option}
                </li>)}
              </ul>
            </div>
          ))
        }
      </div>
    )

  }
















  // function App() {
  //   console.log(question);



  //   let [selectedoptions, setselectedoptions] = useState('');

  //   const getOptonClass = (q, option) => {
  //     let style = "list-group-item";
  //     for (let i = 0; i < selectedoptions.length; i++) {
  //       if (selectedoptions[i].qid === q.id && selectedoptions[i].option === option) {
  //         if (q.answer === option) {
  //           style = style + " bg-success";
  //         }
  //         else {
  //           style = style + " bg-danger";
  //         }
  //       }
  //     }
  //     return style;

  //   }


  //   const onoptionclick = (qid, option) => {
  //     const ans = { qid, option };
  //     let copyArr = [...selectedoptions];
  //     copyArr.push(ans);
  //     setselectedoptions(copyArr);
  //     console.log(copyArr)
  //   }
  //   return (
  //     <div className='container my-5'>
  //       <h1>Online Quiz</h1>
  //       {
  //         question.map(q => (
  //           <div key={q.id}>
  //             <h5>{q.statement}</h5>
  //             <ul className="list-group  ">
  //               {q.option.map(option =>
  //                 <li key={option}
  //                   className={getOptonClass(q, option)}
  //                   onClick={() => onoptionclick(q.id, option)}>
  //                   {option}
  //                 </li>)}
  //             </ul>
  //           </div>
  //         ))
  //       }
  //     </div>
  //   )

  // }
  












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
