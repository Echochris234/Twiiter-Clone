import React, { useState, useEffect } from 'react';
import { Form, Grid, Segment, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../_actions/auth";
import "../App.css";

export default function Login() {
  const [userData, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  // const account = useSelector((state) => console.log(state.login));
  // const posts = useSelector((state) => state.handlePost)

  useEffect(() => {
    dispatch(login(userData));
  }, [localStorage.getItem("userData"), dispatch]);

  


  return (
    <div className="App">
      <Segment basic padded textAlign="center">
        <Grid centered>
          <Form
            onSubmit={(e) => {
              
             dispatch(login(userData));
              
              history.push("/");
              window.location.reload();
              
            }}
          >
            <Form.Group>
              <Form.Input
                type="email"
                value={userData.email}
                placeholder="Enter your E-mail"
                onChange={(event) =>
                  setUser({ ...userData, email: event.target.value })
                }
              />
              <Form.Input
                type="password"
                value={userData.password}
                placeholder="Enter your Password"
                onChange={(event) =>
                  setUser({ ...userData, password: event.target.value })
                }
              />
            </Form.Group>
            <Button>Login</Button>
          </Form>
        </Grid>
      </Segment>
    </div>
  );
}
