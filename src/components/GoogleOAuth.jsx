import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { registerLoginWithGoogle } from "../redux/actions/auth";

function GoogleOAuth({buttonText}){
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const google = useGoogleLogin({
    onSuccess: (responseGoogle) =>
       dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <div>
      <span>
        <Button variant="outline-danger" onClick={() => google()}>
          <img
            alt=""
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            width="17"
            style={{ marginRight: 8+ "px" , marginBottom: 4+ "px" }}
          />
          {buttonText}
        </Button>
      </span>
    </div>
  );
}

export default GoogleOAuth;