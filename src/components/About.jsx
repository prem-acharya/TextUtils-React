import React from "react";

export default function About(props) {
  // const [mystyle, setMystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle ={
    color: props.mode === "dark" ? "white" : "#262525",
    backgroundColor: props.mode === "dark" ? "rgb(38 37 37 / 86%)" : "white",
  }

  return (
    <div className="container">
      <h1 className="my-3" style={{color: props.mode === "dark" ? "white" : "#262525"}}>About Us</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body" style={mystyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or minutes read etc.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body" style={mystyle}>
            TextUtils is a free character counting utility that offers real-time word and character counts for a given text. The quantity of words and characters is reported by TextUtils. As a result, it is appropriate for writing content that has a word or character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body" style={mystyle}>
            Any online browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera, can use this word counter programme. It is appropriate to count characters in Facebook posts, blogs, books, excel spreadsheets, PDF documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-dark">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
