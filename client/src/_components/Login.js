import React, { useState} from 'react';
import { Form, Grid, Segment, Button } from "semantic-ui-react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../_actions/auth";
import "../App.css";

export default function Login() {
  const [userData, setUser] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const history = useHistory();
  


  return (
    <div className="App">
      <Segment basic padded textAlign="center">
        <Grid centered>
          <Form
            onSubmit={(e) => {
              
             dispatch(login(userData));
              
              history.push("/");
              
              

              
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
