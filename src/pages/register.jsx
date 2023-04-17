import { Link } from 'react-router-dom'
import PageTitleSection from '../components/pageTitleSection'
import Input from '../components/ui-components/input'
import { useState } from 'react'
import axios from '../api/axios'
import Button from '../components/ui-components/button'
import Spinner from '../components/spinner'

export default function Register() {
  const [name, setName] = useState({
    value: "",
    errorMsg: "",
  })

  const [email, setEmail] = useState({
    value: "",
    errorMsg: ""
  })

  const [password, setPassword] = useState({
    value: "",
    errorMsg: ""
  })

  const [Cpassword, setCPassword] = useState({
    value: "",
    errorMsg: ""
  })

  const [errorMsg, setErrorMsg] = useState()
  const [isLoad , setIsLoad] = useState(false)

  let handelNameChange = ({ target }) => {
    setName({
      ...name,
      value: target.value
    });
  }
  
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

  let handelCPasswordChange = ({ target }) => {
    setCPassword({
      ...Cpassword,
      value: target.value
    });
  }

  let onSubmitLogin = (e) => {
    e.preventDefault();
    async function sendRequest() {
      setIsLoad(true)
      try {
        const response = await axios.post("/space/api/auth/register", JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value
        }));
        
        let { jwt , refresh_token } = response.data
        //
        localStorage.setItem("jwt", jwt)
        localStorage.setItem("refresh_token", refresh_token)
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
                    <Button type="submit" className="butn btn-block" text={!isLoad ? "Register" : <Spinner/>}></Button>
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