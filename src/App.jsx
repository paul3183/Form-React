import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import About from './pages/about';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutLink from './components/AboutLink';

function App() {

  const [input, setInput] = useState('');

  const handleInput =(e) => {
    setInput(e.target.value);
  }

  const [text, setText] = useState('');

  const handleSubmit = () => {
    setText(input);
  }

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Form handleInput={handleInput} handleSubmit={handleSubmit} text={text}/>
              </>
            }
          ></Route>

          <Route path='/about' element={<About />}></Route>
        </Routes>
        <AboutLink />
      </div>
    </Router>

  )
}

export default App;
