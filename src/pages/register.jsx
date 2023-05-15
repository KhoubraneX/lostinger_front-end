import { Link } from 'react-router-dom'
import PageTitleSection from '../components/pageTitleSection'
import Input from '../components/ui-components/input'
import { useState } from 'react'
import axios from '../api/axios'
import Button from '../components/ui-components/button'
import Spinner from '../components/spinner'
import { decodeToken } from 'react-jwt'
import { ChatRegister } from '../utils/authChat'

export default function Register() {
  const [name, setName] = useState({
    value: "",
    errorMsg: "",
    isValid: false
  })

  const [email, setEmail] = useState({
    value: "",
    errorMsg: "",
    isValid: false
  })

  const [password, setPassword] = useState({
    value: "",
    errorMsg: "",
    isValid: false
  })

  const [Cpassword, setCPassword] = useState({
    value: "",
    errorMsg: "",
    isValid: false
  })

  const [errorMsg, setErrorMsg] = useState()
  const [isLoad, setIsLoad] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  let handelNameChange = ({ target }) => {
    const { value } = target;
    const errorMsg = value.trim().length < 3 || value.trim().length > 15 ? "Please enter a name between 3 and 15 characters" : "";
    const isValid = errorMsg === "";

    setName({
      value,
      errorMsg,
      isValid
    });
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

  let handelPasswordChange = ({ target }) => {
    const { value } = target;
    const errorMsg = value.length < 8 ? "Password should be at least 8 characters long" : (value.length > 20 ? "Please enter a password between 8 and 15 characters" : "");
    const isValid = errorMsg === "";

    setPassword({
      value,
      errorMsg,
      isValid
    });
  }

  let handelCPasswordChange = ({ target }) => {
    const { value } = target;
    const errorMsg = value !== password.value ? "Passwords do not match" : "";
    const isValid = errorMsg === "";

    setCPassword({
      value,
      errorMsg,
      isValid
    });
  }

  let onSubmitLogin = (e) => {
    e.preventDefault();

    const isValidForm = name.isValid && email.isValid && password.isValid && Cpassword.isValid;

    if (isValidForm) {
      async function sendRequest() {
        setIsLoad(true)
        try {
          const response = await axios.post("/space/api/auth/register", JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value
          }));

          let { jwt, refresh_token } = response.data
          //
          let decode = decodeToken(jwt)
          ChatRegister(decode.sub.toString(), decode.email)

          localStorage.setItem("jwt", jwt)
          localStorage.setItem("refresh_token", refresh_token)

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
    } else {
      setErrorMsg("Please fill all the required fields correctly");
    }
  }

  return (
    <>
      <PageTitleSection hrefText="Registration" />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 center-col">
              <div className="padding-40px-all sm-padding-25px-all shadow border-radius-4">
                <h3 className="text-center margin-40px-bottom">Register</h3>
                <form onSubmit={onSubmitLogin}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <Input className={"form-control"} state={name} onHandelChange={handelNameChange} name="name" type="text" placeholder="full name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <Input className={"form-control"} state={email} onHandelChange={handelEmailChange} name="email" type="email" placeholder="email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <Input className={"form-control"} state={password} onHandelChange={handelPasswordChange} name="password" type="password" placeholder="password" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <Input className={"form-control"} state={Cpassword} onHandelChange={handelCPasswordChange} name="Cpassword" type="password" placeholder="confirm password" />
                      </div>
                    </div>
                    <div className="col-12">
                      {errorMsg && <div className="alert alert-danger" role="alert">{errorMsg}</div>}
                    </div>
                    <div className="col-md-12">
                      <div className="custom-control custom-checkbox text-left">
                        <input type="checkbox" className="custom-control-input" id="terms-condition" />
                        <label className="custom-control-label" htmlFor="terms-condition">I agree to the <a href="#!" className="text-theme-color">Terms &amp; Conditions</a></label>
                      </div>
                    </div>
                    <div className="col-md-12 margin-25px-top">
                      <Button type="submit" className="butn btn-block" disabled={true} text={!isLoad ? "Register" : <Spinner />}></Button>
                    </div>
                    <div className="col-md-12 text-center margin-25px-top">
                      <span>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}