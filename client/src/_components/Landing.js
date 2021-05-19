import React, {useEffect,useState} from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import {logout} from "./../_actions/auth.js"
export default function Landing() {



  var [user, setUser] = useState(localStorage.getItem("userInfo"));
  useEffect(() => {
    
    setUser(localStorage.getItem("userInfo"));
  }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  
  if (user) {

    

   

    return (
      <div>
        <Container>
          <Segment basic padded="very">
            <h3>{JSON.parse(user).result.name}</h3>
            <Button 
              primary
              basic
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
                setUser(null);
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

