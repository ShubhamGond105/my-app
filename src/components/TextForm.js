import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text , setText] = useState('Enter Text Here');
  return (
    <div>
        <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea class="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn.primary" onClick={handleUpClick} > Convert To Uppercase </button>
    </div>
  )
}
