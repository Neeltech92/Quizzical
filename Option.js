import React, {useState, useEffect} from "react"

export default function Option(props) {

    const [option, setOption] = useState({})
    const [theme, setTheme] = useState("option")
    
    useEffect(() => {
        setOption(prevOption => ({
            value: props.value, 
            isSelected: false,
            isCorrect: props.value === props.answer ? true : false 
        }))
    }, [props.value])
    
    function toggleSelect() {
        setOption(prevState => ({
            ...prevState,
            isSelected: !prevState.isSelected
        }))
    }
    
    useEffect(() => {
        if (props.show){            
            if(option.isCorrect) {
                setTheme("correct option")
            } else if(option.isSelected){
                setTheme("wrong option")
            } else {
                setTheme("option")
            }
        } else if(option.isSelected){
            setTheme("option select")
        } else {
            setTheme("option")
        }
    }, [props.show, option.isSelected])
    
    return (
        <div
            onClick={toggleSelect}
            className={theme}
        >
            {option.value}
        </div>
    )
}