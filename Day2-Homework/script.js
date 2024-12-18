const MyDiv = () =>{
    return(
        <div className= "mainDiv">
            <h1>Topics covered</h1>
            <div className="firstPara">
                <p>The following is a list of all the topics we cover in the MDN learning area.</p>
            </div>
            <div className="secPara">
                <a>Getting started with the web</a>
                <p>Provides a practival introduction to web development for complete beginners.</p>
            </div>
            <div className="thirdPara">
                <a>HTML - Structuring the web</a>
                <p>HTML IS the language that we use to structure the different parts of our contet and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
            </div>
            <div className="fourthPara">
                <a>CSS - Styling the Web</a>
                <p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
            </div>
        </div>
    )
}

const rootDiv = document.querySelector(".root");
const root = ReactDOM.createRoot(rootDiv);

root.render(
    <MyDiv/>,
    rootDiv
);