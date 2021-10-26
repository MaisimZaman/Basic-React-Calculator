import {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function App() {

  const [text, setText] = useState('')
  const [answer, setAnswer] = useState('')


  function calculateAwnser(){
  
    setAnswer(
        String(eval(text)).length > 3 &&
      String(eval(text)).includes(".")
      ? String(eval(text).toFixed(4))
      : String(eval(text))
      )

    
    
  }
  

  return (
    <div className="App" class="center">
      <TextField
      placeholder="Enter the equation here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></TextField>
      <div>
      <Button color="conatined"
              variant="contained"
              onClick={calculateAwnser}
      >calculate Answer</Button>
      </div>
      
      <h2>answer: {answer}</h2>
    </div>
  );
}
