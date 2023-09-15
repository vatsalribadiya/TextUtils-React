import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLCSClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (e)=> {
        setText(e.target.value)
    }
   const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.textHeading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLCSClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-2">
        <h2>
            Your Text Summary
        </h2>
        <p>
            Total Words is <b> {text.split(" ").length} </b> and Character is <b> {text.length} </b> 
        </p>
        <p>
            {0.008 * text.split(" ").length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
