import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      Login<br></br>
      <TextField
        label="Email Id"
        type="email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        variant="contained"
        // className={classes.signInButton}
        type="submit"
        // disabled={isLoading}
      >
        Sign In
      </Button>
    </div>
  );
}

export default Login;
