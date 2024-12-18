const MyDiv = () =>{
    return(
        <div className= "mainDiv">
            <h1>Learn Web Development</h1>
            <div className="firstPara">
                <p>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.</p>
            </div>
            <div className="secPara">
                <p>The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making you way, learning from <a>the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.</p>
            </div>
            <div className="thirdPara">
                <p>if you are a complete beginner, web development can be challenging -- wewill hold your hand and e and l arn thedetail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on you own or as part of class), a teacher looking for class materials, a hobbyist, of someone who just wants to uderstand more about how web technologies work.</p>
            </div>
        </div>
    )
}

const rootDiv = document.querySelector(".root");
const root = ReactDOM.createRoot(rootDiv);

root.render(
    <MyDiv/>
);