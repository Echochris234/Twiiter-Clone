import React, {useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {logout} from "./../_actions/auth.js"
import Login from "./Login"
import { getPosts, deletePost, likePost, getAllPosts } from "./../_actions/getPosts";
export default function Landing() {
  // let loggedIn;
  // let userName = "";
  // let userData = localStorage.getItem("userData");
  // if (userData) {
  //   loggedIn = true;
  //   userName += `, ${JSON.parse(userData).data.result.name}`;
  // } else {
  //   loggedIn = false;
  // }

  // let history = useHistory();
  // const history = useHistory();
  // const dispatch = useDispatch();
  // var [user, setUser] = useState(localStorage.getItem("user"));
  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     setUser(localStorage.getItem("user"));
  //   } else {
  //     setUser(null)
  //   }

  // }, []);

  // // const history = useHistory();
  // // const dispatch = useDispatch();

  // console.log(user)

  // if (user) {
  //   alert("hello")
  //   return (
  //     <div>
  //       <Container>
  //         <Segment basic padded="very">
  //           <h3>Welcome back to TweTwe{JSON.parse(user).data.result.name}</h3>
  //         </Segment>
  //         <Button primary basic>
  //           <Link to="/home">Profile</Link>
  //         </Button>
  //         <Button
  //           primary
  //           basic
  //           onClick={(e) => {
  //             dispatch(logout(JSON.parse(user).token))
  //             history.push("/")
  //             // localStorage.setItem("userData", "");
  //             // userData = "";
  //             // history.push("/");
  //           }}
  //         >
  //           Logout
  //         </Button>
  //       </Container>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Segment basic padded="very">
  //         <h3>Welcome to TweTwe!</h3>
  //       </Segment>
  //       <Button primary basic>
  //         <Link to="login">Login</Link>
  //       </Button>
  //       <Button primary basic>
  //         <Link to="/signup">Signup</Link>
  //       </Button>
  //     </div>
  //   );
  // }



  var [user, setUser] = useState(localStorage.getItem("userInfo"));
  useEffect(() => {
    
    setUser(localStorage.getItem("userInfo"));
  }, []);


  // NEXT STEPS:
  //   Work on setting max min width to not allow minimization on desktop
  //   Work on liking post
  //   Work on bookmarks 
  //   maybe give up


  // let userData = localStorage.getItem("userInfo");
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(user);
  if (user) {

 
      dispatch(getAllPosts());


   
      dispatch(getPosts(JSON.parse(user).result._id));
   

    return (
      <div>
        <Container>
          <Segment basic padded="very">
            <h3>{JSON.parse(user).result.name}</h3>
            <Button 
              primary
              basic
              onClick={(e) => {
                dispatch(getAllPosts());
              }}
              >
              <Link
                to={{
                  pathname: "/home",
                  state: {
                    tabName:"Home",
                    id: JSON.parse(user).result._id,
                    token: JSON.parse(user).token,             
                  },
                }}
              >
                Home
              </Link>
            </Button>
            <Button 
              primary 
              basic
              onClick={(e) => {
                dispatch(getPosts(JSON.parse(user).result._id));
                
              }}
              >
              <Link
                to={{
                  pathname: "/profile",
                  state: {
                    tabName: "Profile",
                    id: JSON.parse(user).result._id,
                    token: JSON.parse(user).token,
                  },
                }}
              >
                Profile
              </Link>
            </Button>
            <Button
              primary
              basic
              onClick={(e) => {
                dispatch(logout(JSON.parse(user).token));
                // window.location.reload();
                history.push("/");
                
              }}
            >
              Logout
            </Button>
            <Button primary basic>
              <Link
                to={{
                  pathname: "/bookmarks",
                  state: {
                    id: JSON.parse(user).result._id,
                    token: JSON.parse(user).token,
                  },
                }}
              >
                Bookmarks
              </Link>
            </Button>
          </Segment>
        </Container>
        {/* <Profile
          id={JSON.parse(user).result._id}
          token={JSON.parse(user).token}
        /> */}
      </div>
    );
  } else {
    return (
      <div>
        <Segment basic padded="very">
          <h3>Welcome to TweTwe!</h3>
        </Segment>
        <Button primary basic>
          <Link to="login">Login</Link>
        </Button>
        <Button primary basic>
          <Link to="/signup">Signup</Link>
        </Button>
        {/* <Login /> */}
      </div>
    );
  }
}

