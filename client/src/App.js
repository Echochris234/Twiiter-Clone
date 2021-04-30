import React, { useEffect, useState }from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./_components/Landing.js";
import Login from "./_components/Login.js";
import Signup from "./_components/Signup.js";
import Home from "./_components/Home.js";
import Bookmarks from "./_components/Bookmarks.js";
import Profile from "./_components/Profile.js";
import Header from './_components/Header.js'
import Sidebar from './_components/sidebar/Sidebar.js'
import Feed from './_components/feed/Feed.js'
import Widgets from './_components/widgets/Widgets.js'
import "./App.css";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import "semantic-ui-css/semantic.min.css";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>

      <Switch>
        <Route path="/home" component={Home} />
      </Switch>

      <Switch>
        <Route path="/login" component={Login} />
      </Switch>

      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>

      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>


      <Switch>
        <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
    </div>


//   var [user, setUser] = useState(localStorage.getItem("userData"));
//   useEffect(() => {
//     if(localStorage.getItem('userData')){
//       setUser(localStorage.getItem("userData"));
//     }else{
//       setUser(null)
//     }
    
//   }, []);

//   const history = useHistory();
//   // const dispatch = useDispatch();
  



//   // return (
// console.log(user);
//     if(user){
     
//       // console.log(JSON.parse(userData).data.result._id)
//       return(
//     <div className="App">
      
        
//           <Switch>
//             <Route exact path="/home"
//               component={() => <Home id={JSON.parse(user).data.result._id}  token={JSON.parse(user).data.token} />}
//             />
//           </Switch>

//           <Switch>
//             <Route path="/profile" 
//               component={() => <Profile id={JSON.parse(user).data.result._id} token={JSON.parse(user).data.token}  />}
//             />
//           </Switch>



//       <div>
//             <Button
//               primary
//               basic
//               onClick={() => {
//                 localStorage.setItem("user", "");
//                 user = "";
//                 history.push("/");
//                 window.location.reload();
//               }}
//             >
//               Logout
//           </Button>
//       </div>
       

//       {/* <Switch>
//         <Route exact path="/" component={Landing} />
//       </Switch>

//       <Switch>
//         <Route path="/login" component={Login} />
//       </Switch>

//       <Switch>
//         <Route path="/signup" component={Signup} />
//       </Switch>

//       <Switch>
//         <Route path="/profile" component={Profile} />
//       </Switch> */}
//     </div>
//       );
//     } else{
//       history.push("/")

//       return(
//         <div className="App">
//       <Switch>
//         <Route exact path="/" component={Landing} />
//       </Switch>


//       <Switch>
//         <Route path="/login" component={Login} />
//       </Switch>

//       <Switch>
//         <Route path="/signup" component={Signup} />
//       </Switch>

//       {/* <Switch>
//         <Route path="/profile" component={Profile} />
//       </Switch> */}
//         </div>

//       );
//     }
   );
}

export default App;
