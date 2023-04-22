import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import{ BrowserRouter as Router, Route, Routes}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import About from './Components/About';

const App = ()=> {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
    return (
      <>
        <Router>
          <Navbar/>
          <LoadingBar
                    height={3}
                    color='#f11946'
                    progress={progress}
          />
            <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
            <Route exact path="/about" element={<About/>}/>

                <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />
                
                <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} />
                
                <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
                
                <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} />
                
                <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} />
                
                <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
                
                <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
            </Routes>
        </Router>
      </>
    )
  }
  export default App;