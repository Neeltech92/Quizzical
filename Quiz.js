import React, {useState, useEffect} from "react"
import Option from "./Option"

function Quiz(props) {
    const {queset, show} = props
    const [options, setOptions] = useState([])
    
    useEffect(() => {
        setOptions(prevOptions => ([...queset.incorrect_answers, queset.correct_answer]))
        
        // To shuffle the options
        options.sort((a, b) => 0.5 - Math.random())  
    }, [queset])
    
    const optionsHtml = options.map((option, index) => {
        return (
            <Option
                key={index} 
                value={option}
                answer={queset.correct_answer}
                show={show}
            />
        )
    })
    
    
    return (
        <>
            <p>{queset.category}</p>
            <h3>{queset.question}</h3>
            <div className="option-container">
                {optionsHtml}
            </div>
        </>
    )
}

export default Quiz