import { auth, provider } from "./firebase";
import { useState } from "react";
import Data from "./Data";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {

  const [user, setUser] = useState(null);

  const signIn = ()=>{
    auth.signInWithPopup(provider).then(({user})=>{
        setUser(user);
     }).catch(error=>{
        alert(error);
    })
}

  return (
    <>
    {
      user ? (
        <>
          <Header photoURL={user.photoURL}/>
          <div className="App">
            <Sidebar/>
            <Data/>
          </div>
        </>
    ) : (
     <div className="loginWrap">
       <img src="https://firebasestorage.googleapis.com/v0/b/post-v2.appspot.com/o/Screenshot_2022-01-05_180239-removebg-preview.png?alt=media&token=da7a5026-5969-48ac-9f9b-ba9d3a06ca76"/>
       <button onClick={signIn}>Login to POST</button>
     </div>
    )
    }
    
    </>
  );
}

export default App;
