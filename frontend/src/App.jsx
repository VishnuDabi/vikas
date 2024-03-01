import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './component/Card';
import Header from './component/Header';
import ProdDes from './pages/ProdDes';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Home from './pages/Home';
import Quates from '../src/component/Quates';
import Page from '../src/pages/Page'
import ShopAll from './pages/ShopAll';
import BasqMagzine from './pages/BasqMagzine';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './component/Cart';

function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <ShopAll />
              <Quates />
              <Card/>
              <Page />
              <BasqMagzine />
            </>
          } />
          {/* <Route exact path='/cart' element ={<Cart/>}/> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signUp' element={<SignUp/>} />
          <Route exact path='/:productId' element={<ProdDes />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}


export default App;
