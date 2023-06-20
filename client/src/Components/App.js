import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Indexpage from "./Indexpage";
import Loginpage from "./Loginpage";
import Registerpage from "./Registerpage";
import {UserContextProvider} from "./UserContext";
import CreatePost from "./CreatePost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Indexpage />} />
            <Route path={"/login"} element={<Loginpage />} />
            <Route path={"/register"} element={<Registerpage />} />
            <Route path={"/create"} element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path={"/edit/:id"} element={<EditPost />} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
       
    
  );

}

export default App;