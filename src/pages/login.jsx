import { useState } from "react";
import PageTitleSection from "../components/pageTitleSection";
import { Link } from "react-router-dom";
import Input from "../components/ui-components/input";
import axios from "../api/axios";
import Button from "../components/ui-components/button";
import { decodeToken } from "react-jwt";
import Spinner from "../components/spinner";



export default function Login() {


  const [email, setEmail] = useState({
    value: "",
    errorMsg: ""
  })

  const [password, setPassword] = useState({
    value: "",
    errorMsg: ""
  })

  const [errorMsg, setErrorMsg] = useState()

  const [isLoad , setIsLoad] = useState(false)

  let handelEmailChange = ({ target }) => {
    setEmail({
      ...email,
      value: target.value
    });
  }

  let handelPasswordChange = ({ target }) => {
    setPassword({
      ...password,
      value: target.value
    });
  }


  let onSubmitLogin = (e) => {
    e.preventDefault();
    async function sendRequest() {
      setIsLoad(true)
      try {
        const response = await axios.post("/space/api/auth/login", JSON.stringify({
          email: email.value,
          password: password.value
        }));
        
        let { jwt , refresh_token } = response.data
        let user = JSON.stringify(decodeToken(jwt));
        //
        localStorage.setItem("user", user)
        localStorage.setItem("jwt", jwt)
        localStorage.setItem("refresh_token", refresh_token)
        localStorage.setItem("auth", true)
        //
        setTimeout(() => {
          window.location = '/';
          setIsLoad(false)
        }, 1000);
        
      } catch (error) {
        let { response } = error
        setErrorMsg(response.data.message)
        setIsLoad(false)
      }
    }
    sendRequest()
  }

  return (
    <>
      <PageTitleSection hrefText="Login" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 center-col">
              <div className="padding-40px-all sm-padding-25px-all shadow border-radius-4">
                <h3 className="text-center margin-40px-bottom">Login</h3>
                <form onSubmit={onSubmitLogin}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <Input className={"form-control"} state={email} onHandelChange={handelEmailChange} name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <Input className={"form-control"} state={password} onHandelChange={handelPasswordChange} name="password" type="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                  {errorMsg && <p className="text-danger" >{errorMsg}</p>}
                  <div className="row">
                    <div className="col-sm-6 mb-2">
                      <div className="custom-control custom-checkbox text-left">
                        <input type="checkbox" className="custom-control-input" id="login-remember" />
                        <label className="custom-control-label" htmlFor="login-remember">Keep me signed in</label>
                      </div>
                    </div>
                    <div className="col-sm-6 text-left text-sm-right">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>
                  <div className="col-md-12 margin-25px-top">
                    <Button type="submit" className="butn btn-block" text={!isLoad ? "Login" : <Spinner/>}></Button>
                  </div>
                  <div className="col-md-12 text-center margin-25px-top">
                    <span>Don't have an account yet? <Link to="/registration">Register</Link></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}