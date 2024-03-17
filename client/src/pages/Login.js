import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate('/')
        // window.location.replace('http://localhost:3000/') 
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (

    <div className="form-container ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          {/* <!-- Logo (replace the src attribute with your logo image URL) --> */}
          <a class="navbar-brand" href="your_logo_link_here">
            {/* <img src="your_logo_image_url_here" alt="Logo" width="50"> */}
          </a>

          {/* <!-- Navbar links --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about_us_link_here">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login_with_google_link_here">Login with Google</a>
              </li>
              {/* <li class="nav-item">
              //
                        <a class="nav-link" href="http://localhost:5173/">Video Call</a>
                    </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="abc">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login</h3>

          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login

          </button>


        </Form>
      </div>
    </div>
  );
};

export default Login;