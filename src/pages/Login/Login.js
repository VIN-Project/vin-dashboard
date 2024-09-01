import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, facebookProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { routes } from "../routes";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await axios.post("http://localhost:3020/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        message.success("Login successful!");
        localStorage.setItem("TOKEN", email);
        navigate(routes.search)
      }
    } catch (error) {
      if (error.response) {
        message.error(
          error.response.data.message || "An error occurred during login."
        );
      } else {
        message.error("An error occurred. Please try again later.");
      }
    }
  };
  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      console.log('Here');
  
      // Ensure idToken is being sent
      const response = await axios.post(
        "http://localhost:3020/api/social-login",
        {
          idToken, // Send the idToken to the backend
        }
      );
  
      if (response.status === 200) {
        message.success("Login successful!");
        localStorage.setItem("TOKEN", idToken);
        window.location.href = "http://localhost:3000/dashboard";
      }
    } catch (error) {
      console.error(error);
      // Handle different Firebase Auth errors
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          message.error("An account already exists with a different credential. Please try logging in with a different provider.");
          break;
        case 'auth/popup-closed-by-user':
          message.error("The popup was closed before completing the sign in. Please try again.");
          break;
        case 'auth/cancelled-popup-request':
          message.error("A popup request was canceled. Please try again.");
          break;
        case 'auth/popup-blocked':
          message.error("The popup was blocked by the browser. Please unblock the popup and try again.");
          break;
        case 'auth/invalid-credential':
          message.error("The credential is invalid or expired. Please try again.");
          break;
        case 'auth/operation-not-allowed':
          message.error("This operation is not allowed. Please contact support.");
          break;
        case 'auth/email-already-in-use':
          message.error("This email is already in use by another account. Please use a different email.");
          break;
        case 'auth/too-many-requests':
          message.error("Too many requests. Please try again later.");
          break;
        case 'auth/operation-not-supported-in-this-environment':
          message.error("This operation is not supported in this environment. Please try in a different browser or device.");
          break;
        default:
          message.error("An unexpected error occurred. Please try again.");
          break;
      }
    }
  };
  

  const handleGoogleLogin = () => handleSocialLogin(googleProvider);
  const handleFacebookLogin = () => handleSocialLogin(facebookProvider);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form-wrapper">
          <h1 className="login-title">Login with email</h1>
          <Form onFinish={handleLogin}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
              style={{ display: "block" }}
              labelCol={{ span: 24 }}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              style={{ display: "block" }}
              labelCol={{ span: 24 }}
            >
              <Input.Password
                placeholder="Enter your password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <div className="social-login">
            <Button type="primary" block onClick={handleGoogleLogin}>
              Sign in with Google
            </Button>
            <Button
              type="primary"
              block
              onClick={handleFacebookLogin}
              style={{ marginTop: "10px" }}
            >
              Sign in with Facebook
            </Button>
          </div>

          <div className="forgot-password">
            <span>Forgot your password? </span>
            <a href="/members/forgot-password">Reset password</a>
          </div>

          <div className="register-link">
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
              onClick={() => navigate(routes.signup)}
            >
              Register
            </span>
          </div>

          <div className="home-link">
            <a href="https://detailedvehiclehistory.com">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
