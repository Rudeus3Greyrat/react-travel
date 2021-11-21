import React from 'react';
import styles from './App.module.css';
import {HomePage, Register, SignIn, Detail} from "./pages";
import {BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className={styles.App}>
      <Router>
          <Routes>
              <Route path={'/'} element={<Navigate to={'/home'}/>}/>
              <Route path={'/home'} element={<HomePage/>}/>
              <Route path={'/signIn'} element={<SignIn />} />
              <Route path={'/register'} element={<Register />} />
              <Route path={`/detail/:id`} element={<Detail />} />
              <Route path={'*'} element={<h1>404</h1>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
