import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Extends/Header';
import Footer from './Extends/Footer';
import reportWebVitals from './reportWebVitals';
import About from "./Views/About/Index";

class Main extends React.Component {
  render() {
    return (
  <BrowserRouter basename="/killer-club-house">
  <div className='overlay'>
  <header className='pageheader'>
      <Header />
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
    </Routes>
    <footer>
      <Footer />
    </footer>
  </div>
  
  </BrowserRouter>
  // document.getElementById('root')
);
}
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
