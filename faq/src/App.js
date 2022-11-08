import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import './App.css';
import Faq from './components/faq';
import NAVBAR from './components/navbar';
import CONTACT from './components/contact';

// boostrap-libs
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const url = 'http://localhost:8080/'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faq_data: []
    };
  };
  componentDidMount() {
    axios.get(url + 'pull_faq')
      .then(response => {
        let faq_res = response
        this.setState({ faq_data: faq_res.data })
        console.log(this.state.faq_data);
      })
  }
  render() {
    document.title = "FAQ's";
    return (
      <BrowserRouter>
        <NAVBAR />
        <Routes>
          <Route path='/' element={<Faq data={this.state.faq_data} />}></Route>
          <Route path='/contact' element={<CONTACT />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;