import React, {useState, useRef} from 'react';
import "./FAQ.scss";

function Collapsable(props){

    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef();

    return(
        <div className="collapsible">
            <button className="btn" onClick={() => setIsOpen(!isOpen)}>{props.question}</button>
            <div className="content-parent" ref={parentRef} 
            style={isOpen ? {
               height: parentRef.current.scrollHeight + "px"
            } : {
                height: "0px"
            }}>
                <div className={"content"}>{props.children}</div>
            </div>    
        </div>
    )
}

function FAQ() {
    return (
        <div>
            <h1>FAQ</h1>
            <Collapsable question="How is my data used and how can I manage it?">
                <h2 className="title">Hellooooo</h2>
                <p className="answer">Do adipisicing Lorem elit cupidatat culpa reprehenderit consectetur minim officia duis 
                id exercitation. Ea qui cillum minim excepteur magna nisi aliquip qui incididunt est
                 cillum voluptate ipsum. Est pariatur dolor sunt duis do nisi officia deserunt culpa
                  enim aliqua magna. Ullamco voluptate culpa est ullamco fugiat non Lorem nostrud 
                  occaecat incididunt Lorem laborum non. Culpa amet voluptate magna elit sit. 
                  Reprehenderit et occaecat et nisi elit eiusmod duis qui consectetur ipsum 
                  mollit exercitation sunt.</p>
            </Collapsable>
            <Collapsable question="Why should I connect my instagram account?" >
                <h2 className="title">Hellooooo</h2>
                <p className="answer">Do adipisicing Lorem elit cupidatat culpa reprehenderit consectetur minim officia duis 
                id exercitation. Ea qui cillum minim excepteur magna nisi aliquip qui incididunt est
                 cillum voluptate ipsum. Est pariatur dolor sunt duis do nisi officia deserunt culpa
                  enim aliqua magna. Ullamco voluptate culpa est ullamco fugiat non Lorem nostrud 
                  occaecat incididunt Lorem laborum non. Culpa amet voluptate magna elit sit. 
                  Reprehenderit et occaecat et nisi elit eiusmod duis qui consectetur ipsum 
                  mollit exercitation sunt.</p>
            </Collapsable>
            <Collapsable question="Is there a paid or gold version?" >
                <h2 className="title">Hellooooo</h2>
                <p className="answer">Do adipisicing Lorem elit cupidatat culpa reprehenderit consectetur minim officia duis 
                id exercitation. Ea qui cillum minim excepteur magna nisi aliquip qui incididunt est
                 cillum voluptate ipsum. Est pariatur dolor sunt duis do nisi officia deserunt culpa
                  enim aliqua magna. Ullamco voluptate culpa est ullamco fugiat non Lorem nostrud 
                  occaecat incididunt Lorem laborum non. Culpa amet voluptate magna elit sit. 
                  Reprehenderit et occaecat et nisi elit eiusmod duis qui consectetur ipsum 
                  mollit exercitation sunt.</p>
            </Collapsable>
            <Collapsable question="Can I access users all over the world?" >
                <h2 className="title">Hellooooo</h2>
                <p className="answer">Do adipisicing Lorem elit cupidatat culpa reprehenderit consectetur minim officia duis 
                id exercitation. Ea qui cillum minim excepteur magna nisi aliquip qui incididunt est
                 cillum voluptate ipsum. Est pariatur dolor sunt duis do nisi officia deserunt culpa
                  enim aliqua magna. Ullamco voluptate culpa est ullamco fugiat non Lorem nostrud 
                  occaecat incididunt Lorem laborum non. Culpa amet voluptate magna elit sit. 
                  Reprehenderit et occaecat et nisi elit eiusmod duis qui consectetur ipsum 
                  mollit exercitation sunt.</p>
            </Collapsable>
        </div>
    )
}

export default FAQ
