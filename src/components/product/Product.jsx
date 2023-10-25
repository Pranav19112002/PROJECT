import React, { useState } from 'react'
import './Product.css'
const Product = () => {
    const [pid,setPid]=useState('');
    const [pn,setPn]=useState('');
    const [pr,setPr]=useState('');
    const [pq,setPq]=useState('');
    const [pt,setPt]=useState('');

    const readproductid =(event) =>{
        setPid(event.target.value);
        console.log(event.target.value);
    }

    const readproductname =(event) =>{
        setPn(event.target.value);
        console.log(event.target.value);
    }

    const readproductprice =(event) =>{
        setPr(event.target.value);
        console.log(event.target.value);
    }

    const readproductquantity =(event) =>{
        setPq(event.target.value);
        console.log(event.target.value);
    }

    const readproducttotal =(event) =>{
        setPt(event.target.value);
        console.log(event.target.value);
    }

  return (
    <div  className='po'>
      <h1>Product</h1>
      <form>
        Product id:<input type='text' onChange={readproductid}></input><br/><br/>
        Name      :<input type='text' onChange={readproductname}></input><br/><br/>
        Price     :<input type='text' onChange={readproductprice}></input><br/><br/>
        Quantity  :<input type='number' onChange={readproductquantity}></input><br/><br/>
        Total     :<input type='text' onChange={readproducttotal}></input><br/><br/><br/>
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default Product
