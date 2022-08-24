import './App.css';
import { React, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from "./Components/List"

function App() {
  const [inputText, setInputText] = useState('');
  let inputHandler = (e) => {
    if (!e.target.value.length) {
      return;
    } 
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="App">
      <h1>React Search</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
              <TextField 
              id="outlined-search" 
              label="Search field" 
              type="search"
              onChange={inputHandler}
            />
          </div>
        </Box>
        <List input={inputText} />
    </div>
  );
}

export default App;
