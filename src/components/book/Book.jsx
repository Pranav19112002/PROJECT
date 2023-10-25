import React,{useState} from 'react'
import './Book.css'
const Book = () => {
    const [bid,setBid]=useState('');
    const [bn,setBn]=useState('');
    const [ba,setBa]=useState('');
    const [bpr,setBpr]=useState('');
    const [bpd,setBpd]=useState('');

    const readbookid =(event) =>{
        setBid(event.target.value);
        console.log(event.target.value);
    }

    const readbookname =(event) =>{
        setBn(event.target.value);
        console.log(event.target.value);
    }

    const readbookauthor =(event) =>{
        setBa(event.target.value);
        console.log(event.target.value);
    }

    const readbookprice =(event) =>{
        setBpr(event.target.value);
        console.log(event.target.value);
    }

    const readbookpublisheddate =(event) =>{
        setBpd(event.target.value);
        console.log(event.target.value);
    }

  return (
    <div className='bo'>
      <h1>Book</h1>
      <form>
        Book id:<input type='text' onChange={readbookid}></input><br/><br/>
        Name          :<input type='text' onChange={readbookname}></input><br/><br/>
        Author        :<input type='text' onChange={readbookauthor}></input><br/><br/>
        Price         :<input type='text' onChange={readbookprice}></input><br/><br/>
        Published date:<input type='date' onChange={readbookpublisheddate}></input><br/><br/><br/>
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default Book
