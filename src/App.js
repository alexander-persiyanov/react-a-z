import React, { useEffect, useState } from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LayoutMain from './components/layout/LayoutMain';
import PostItemInfo from './components/PostItemInfo';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/UI/navbar/Navbar';
import { AuthContext } from './context/context';

import  './styles/App.css'
import About from './views/about';
import Home from './views/home';
import Login from './views/login';
import NotFoundPage from './views/notFoundPage';
import Posts from './views/posts';
import PostsLoading from './views/postsLoading';



function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem('auth')?localStorage.getItem('auth'):false);
  
  useEffect(()=>{
    
    if(localStorage.getItem('auth')){
    
      setIsAuth(true);
    }
  },[])
  
  // const prova  =()=>{
  //   alert("prova");
  // }

  return (
    <div className="App">
      {isAuth ? "isAuth":'---' }
      <AuthContext.Provider value={{isAuth,setIsAuth}}>
       
        <BrowserRouter>
        
        
            <Routes>
            <Route path="/" element={ <LayoutMain />} >
              <Route index element={<PrivateRoute component={<Home></Home>}/> } />
              <Route path="posts" element={  <PrivateRoute component={ <Posts />}/> } />
              <Route path="postsloading" element={  <PrivateRoute component={ <PostsLoading />}/> } />
              
            
            
              <Route path="posts/:id" element={<PrivateRoute component={<PostItemInfo/>}/> } />
            
              <Route path="about" element={  <PrivateRoute component={<About />}/>   } />
              <Route path="login" element={<Login/>} />
            
              {/* <Route path="" element={<Navigate replace to="/" />} /> */}
            
              <Route path="*" element={<NotFoundPage></NotFoundPage>} />
              
            </Route>
            
              
            
            </Routes>
          
      </BrowserRouter>
    </AuthContext.Provider>     
      
   </div>
  );
}

export default App;
