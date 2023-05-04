import React,{useState, useEffect} from "react"
import Quiz from "./Quiz"
import Header from "./Header"
import Option from "./Option"
import CheckButton from "./CheckButton"

function App(props) {
    const [quiz, setQuiz] = useState([])
    const [quizArray, setQuizArray] = useState([])
    const [show, setShow] = useState(false)
    const [next, setNext] = useState(0)
    const [startGame, setStartGame] = useState(false)
    
    function renderPage() {
        setQuizArray(prevQuiz => {
            return (
                quiz.map((queset,index) => {
                    return (
                        <Quiz key={index} queset={queset} show={show}/>
                    )
            }))
        })
    }
    
    function initiateGame() {
        setStartGame(true)
        renderPage()
    }
    
    function nextSet() {
        setNext(prevState => prevState + 1)
        setShow(false)
        console.log("next button clicked")
    }
    
    function toggleShow() {
        setShow(true)
        renderPage()
        console.log("check button clicked")
    }
    
    async function getQuiz() {
        fetch("https://opentdb.com/api.php?amount=5&category=22")
            .then(res => res.json())
            .then(data => {
                setQuiz(prevQuiz => data.results)
            })
        console.log("set changed!")
        console.log(quiz)
        renderPage()
    }
    
    useEffect(() => getQuiz(),[next])
    
    return (
        <div>
        { startGame ?
            
            <div>
                <Header />
                <div className="quiz-container">
                    {quizArray || <h1>Loading....</h1>}
                </div>
                <CheckButton toggleShow={toggleShow}/>
                <button onClick={nextSet}>Next set</button>
                <h1>{next + 1}</h1>
            </div>
            
            :
            
            <div>
            <h1>Start Game?</h1>
            <button onClick={initiateGame}>Start</button>
            </div>
        }
        </div>
    )
    
}

export default App