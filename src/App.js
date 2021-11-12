import React from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LayoutMain from './components/layout/LayoutMain';
import PostItemInfo from './components/PostItemInfo';
import Navbar from './components/UI/navbar/Navbar';

import  './styles/App.css'
import About from './views/about';
import Home from './views/home';
import NotFoundPage from './views/notFoundPage';
import Posts from './views/posts';



function App() {

  return (
    <div className="App">
      
     
      <BrowserRouter>
       
       
          <Routes>
          <Route path="/" element={<LayoutMain />} >
            <Route index element={<Home></Home>} />
            <Route path="posts" element={<Posts />} >
             
            </Route>
            <Route path="posts/:id" element={<PostItemInfo/>} />
          
            <Route path="about" element={<About />} />
          
            <Route path="" element={<Navigate replace to="/" />} />
            <Route path="*" element={<NotFoundPage></NotFoundPage>} />
             
          </Route>
           
            
          
          </Routes>
        
    </BrowserRouter>
      
   </div>
  );
}

export default App;
