
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";
import CreatePost from "./components/CreatePost.jsx" ; 
import PostList from "./components/PostList.jsx";
import {useState} from "react";

function App() {
        
     const [SelectedTab, setSelectedTab] = useState("CreatePost");
  return (
   
       <div class="app-container">
        <SideBar 
        selectedTab={SelectedTab}
        setSelectedTab={setSelectedTab}
         ></SideBar>
        <div className="content">
            <Header></Header>
            {SelectedTab === "Home" ? (
               <PostList></PostList>
          )
              : 
             (
             <CreatePost></CreatePost>
             )}
       <Footer></Footer>
        </div>
       </div>
      
  );
}

export default App
