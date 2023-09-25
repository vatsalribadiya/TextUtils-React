import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLCSClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleCapital = () => {
    let capitalTxt = text.replace(/\b\w/g, (l) => l.toUpperCase());
    setText(capitalTxt);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("exampleFormControlTextarea1").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };
  const [text, setText] = useState("");
  let textCount = text.match(/[\w\d\\'-]+/gi);
  let totalCount = textCount ? textCount.length : 0;
  return (
    <>
      <div className="container">
        <h2 id="textHeading">{props.textHeading}</h2>
        <div className="mb-3">
          <textarea
          className="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleOnChange}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Upper case
        </button>
        <button className="btn btn-primary m-2" onClick={handleLCSClick}>
          Lower Case
        </button>
        <button className="btn btn-primary m-2" onClick={handleCapital}>
          Capitalize
        </button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleDownload}>
          Download Text
        </button> 
        <button className="btn btn-primary m-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-2">
        <p>
          Words Count: <b> {totalCount} </b> Character Count:{" "}
          <b> {text.length} </b> Reading Time:{" "}
          <b> {0.008 * totalCount} </b>
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
