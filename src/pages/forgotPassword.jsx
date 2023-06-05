import { useState } from "react";
import PageTitleSection from "../components/pageTitleSection";
import { Link } from "react-router-dom";
import Input from "../components/ui-components/input";
import axios from "../api/axios";
import Button from "../components/ui-components/button";
import Spinner from "../components/spinner";



export default function ForgotPassword() {


  const [email, setEmail] = useState({
    value: "",
    errorMsg: ""
  })

  const [errorMsg, setErrorMsg] = useState()

  const [isLoad, setIsLoad] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  let handelEmailChange = ({ target }) => {
    const { value } = target;
    const errorMsg = !validateEmail(value.trim()) ? "Email is not valid" : "";
    const isValid = errorMsg === "";

    setEmail({
      value,
      errorMsg,
      isValid
    });
  }


  let onSubmitLogin = (e) => {
    e.preventDefault();

    const isValidForm = email.isValid;

    if (isValidForm) {
      async function sendRequest() {
        setIsLoad(true)
        try {
          const { data } = await axios.post("/api/auth/forgot_password", JSON.stringify({
            email: email.value,
          }));

          if (data.status === "success") {
            setIsSent(true)
          }
          setIsLoad(false)
        } catch (error) {
          let { response } = error
          setErrorMsg(response.data.message)
          setIsLoad(false)
        }
      }
      sendRequest()
    } else {
      setErrorMsg("Please fill all the required fields correctly");
    }
  }

  return (
    <>
      <PageTitleSection hrefText="Login" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 center-col">
              <div className="padding-40px-all sm-padding-25px-all shadow border-radius-4">
                <h3 className="text-center margin-40px-bottom">Forgot Password</h3>
                <form onSubmit={onSubmitLogin}>
                  <div className="row">
                  <div className="col-md-12">
                    {!isSent ? <div className="form-group">
                      <Input className={"form-control"} state={email} onHandelChange={handelEmailChange} name="email" type="email" placeholder="Email" />
                    </div> : <p className="alert alert-success m-t-sm m-b-lg text-center">If provided email is a registered email ID on Lostinger, you will receive an email with further instructions on how to reset your password. In case you didn't receive this email, you need to create a new account here</p>}
                  </div> 
                  </div>
                  {errorMsg && !isSent ? <div className="alert alert-danger" role="alert">{errorMsg}</div> : ""}
                  {!isSent &&  <div>
                    <Button type="submit" className="butn btn-block" text={!isLoad ? "Send rest code" : <Spinner />}></Button>
                  </div>}
                  <div className="col-md-12 text-center margin-25px-top">
                    <span>Back to <Link to="/login">Login</Link></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}