import React, { useState } from "react";

export default function TextFroms(props) {
  const handleUpClick = () => {
    // console.log("Uppercase Was Clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!" , "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase Was Clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!" , "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!" , "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!" , "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!" , "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="10" style={{backgroundColor: props.mode === 'dark' ? 'white' : 'white' , color: props.mode === 'dark' ? 'black' : 'black'}}
          ></textarea>
        </div>
        <div className="">
          <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleClearClick}>
            Clear
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleCopy}>
            Copy Text
          </button>
          <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-1 my-1`} onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
