import React, {useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {logout} from "./../_actions/auth.js"

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
  var [user, setUser] = useState(localStorage.getItem("user"));
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem("user"));
    } else {
      setUser(null)
    }

  }, []);

  const history = useHistory();
  const dispatch = useDispatch();

  console.log(user)

  if (user) {
    alert("hello")
    return (
      <div>
        <Container>
          <Segment basic padded="very">
            <h3>Welcome back to TweTwe{JSON.parse(user).data.result.name}</h3>
          </Segment>
          <Button primary basic>
            <Link to="/profile">Profile</Link>
          </Button>
          <Button
            primary
            basic
            onClick={(e) => {
              dispatch(logout(JSON.parse(user).token))
              history.push("/")
              // localStorage.setItem("userData", "");
              // userData = "";
              // history.push("/");
            }}
          >
            Logout
          </Button>
        </Container>
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
      </div>
    );
  }
}
