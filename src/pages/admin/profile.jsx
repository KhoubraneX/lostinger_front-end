import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'
import { checkToken } from '../../utils/authServices'
import Input from '../../components/ui-components/input'
import Button from '../../components/ui-components/button'
import Spinner from '../../components/spinner'
import showToastMessage from '../../utils/toast'

const Profile = () => {

  const [userDt, setUserDt] = useState(null)

  const [name, setName] = useState({
    value: "",
    errorMsg: "",
    isValid: true
  })

  const [phone, setPhone] = useState({
    value: "",
    errorMsg: "",
    isValid: true
  })

  const [oldPassword, setOldPassword] = useState({
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

  const [validN_P , setIsValidN_P] = useState(false)

  const [validPassword , setIsvalidPassword] = useState(false)
  const [isLoadPassword, setIsLoadPassword] = useState(false)
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    let isMounted = true
    let controller = new AbortController()

    let fetchItems = async () => {
      checkToken(localStorage.jwt)
      try {
        let { data } = await axios.get("/space/api/auth/userDt", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`
          },
        });
        if (isMounted) {
          setUserDt(data);
          name.value = data.name 
          phone.value = data.phone ?? ""
          setName(name)
          setPhone(phone)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems()
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])


  let handelNameChange = ({ target }) => {
    const { value } = target;

    const errorMsg = value.trim().length < 3 || value.trim().length > 15 ? "Please enter a name between 3 and 15 characters" : "";
    const isValid = errorMsg === "";
    // handel user sumbit permition
    setIsValidN_P(isValid && phone.isValid && value !== userDt.name && phone !== userDt.phone);

    setName({
      value,
      errorMsg,
      isValid
    });

  }
  let handelPhoneChange = ({ target }) => {
    const re = /^((06)|(07))[0-9]{8}$/
    const { value } = target;

    const errorMsg = !re.test(String(value.trim()).toLowerCase()) ? "invalid phone" : "";
    const isValid = errorMsg === "";
    // handel user sumbit permition
    setIsValidN_P(isValid && name.isValid && name !== userDt.name && value !== userDt.phone);
    setPhone({
      value,
      errorMsg,
      isValid
    });
  }

  let handelOldPasswordChange = ({ target }) => {
    const { value } = target;
    const errorMsg = value.length < 8 ? "Password should be at least 8 characters long" : (value.length > 20 ? "Please enter a password between 8 and 15 characters" : "");
    const isValid = errorMsg === "";
    //
    setIsvalidPassword(isValid && password.isValid && Cpassword.isValid)

    setOldPassword({
      value,
      errorMsg,
      isValid
    });
  }

  let handelPasswordChange = ({ target }) => {
    const { value } = target;
    let errorMsg = value.length < 8 ? "Password should be at least 8 characters long" : value.length > 20 ? "Please enter a password between 8 and 15 characters" : value === oldPassword.value ? "Please enter a different password than the current password" : "";
    const isValid = errorMsg === "";
    //
    setIsvalidPassword(isValid && oldPassword.isValid && Cpassword.isValid)
    
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
    setIsvalidPassword(isValid && oldPassword.isValid && password.isValid)

    setCPassword({
      value,
      errorMsg,
      isValid
    });
  }


  let onSubmitChangeN_P = (e) => {
    e.preventDefault();
    if (validN_P === false) return;

    const isValidForm = name.isValid || phone.isValid;

    if (isValidForm) {
      setIsValidN_P(false)
      checkToken(localStorage.jwt)

      async function sendRequest() {
        setIsLoad(true)
        try {
          const response = await axios.patch("/space/api/auth/updateUser", JSON.stringify({
            name: name.value,
            phone: phone.value
          }) , {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            }
          });

          setTimeout(() => {
            setIsLoad(false)
            showToastMessage("success" , "updated successfully")
          }, 1000);
          
        } catch (error) {
          let { response } = error
          showToastMessage("error" , response.data.message)
          setIsLoad(false)
        }
      }
      sendRequest()
    } else {
      showToastMessage("info" , "Please fill all the required fields correctly");
    }
  }
  let handelEmailChange = (e) => {
    e.preventDefault()
  }

  let onSubmitChangePassword = (e) => {
    e.preventDefault();
    if (validPassword === false) return

    const isValidForm = password.isValid || oldPassword.isValid;

    if (isValidForm) {
      setIsvalidPassword(false)
      checkToken(localStorage.jwt)
      async function sendRequest() {
        setIsLoadPassword(true)
        try {
          const response = await axios.patch("/space/api/auth/updateUser", JSON.stringify({
            oldPassword: oldPassword.value,
            newPassword: password.value
          }) , {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            }
          });
          
          setTimeout(() => {
            setIsLoadPassword(false)
            showToastMessage("success" , "We’ve saved your profile changes.")
          }, 1000);
          
        } catch (error) {
          let { response } = error
          showToastMessage("error" , response.data.message)
          setIsLoadPassword(false)
        }
      }
      sendRequest()
    } else {
      showToastMessage("info" , "Please fill all the required fields correctly");
    }
  }


  return (
    <><div className="page-inner">
      <div className="page-title">
        <h3 className="breadcrumb-header">My Profile</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">Finder</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Profile
            </li>
          </ol>
        </nav>
      </div>
      {/* start page main wrapper */}
      <div id="main-wrapper">
        <div className="row">
          <div className="col-md-6" >
            <div className="card card-white" style={{ minHeight: "500px" }}>
              <div className="card-heading clearfix border-bottom mb-4">
                <h4 className="card-title">Basic Information</h4>
              </div>
              <div className="card-body position-relative">
                {!userDt && <Spinner className='text-dark position-absolute' style={{left: "50%" , top : "50%"}}/>}
                <div className="row">
                  <div className="col">
                    {userDt && <form onSubmit={onSubmitChangeN_P}>
                      <div className="form-group">
                        <Input className={"form-control"} label={"name"} state={name} onHandelChange={handelNameChange} name="name" type="text" />
                      </div>
                      <div className="form-group">
                        <Input className={"form-control"} label={"Phone"} state={phone} onHandelChange={handelPhoneChange} name="phone" type="text" />
                      </div>
                      <div className="form-group mb-4">
                        <Input className={"form-control disabled"} label={"Email"} onHandelChange={handelEmailChange} state={{value: userDt.email}} name="Email" type="text" />
                          <small>For privacy reasons, the email address cannot be changed.</small>
                        </div>
                      <Button type="submit" clickable={!validN_P} className="btn btn-primary" text={!isLoad ? "Save Change" : <Spinner />}></Button>
                    </form>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-white" style={{ minHeight: "500px" }}>
              <div className="card-heading clearfix border-bottom mb-4">
                <h4 className="card-title">Change Password</h4>
              </div>
              <div className="card-body">
                <form onSubmit={onSubmitChangePassword}>
                  <div className="form-group">
                    <Input className={"form-control"} label="Current Password" state={oldPassword} onHandelChange={handelOldPasswordChange} name="Current Password" type="password" />
                  </div>
                  <div className="form-group">
                    <Input className={"form-control"} label="New Password" state={password} onHandelChange={handelPasswordChange} name="New Password" type="password" />
                  </div>
                  <div className="form-group mb-4">
                    <Input className={"form-control"} label="Confirm New Password" state={Cpassword} onHandelChange={handelCPasswordChange} name="Cpassword" type="password" />
                  </div>
                  <Button type="submit" clickable={!validPassword} className="btn btn-primary" text={!isLoadPassword ? "Change Password" : <Spinner />}></Button>
                </form>
              </div>
            </div>
          </div>

        </div>
        {/* row */}
      </div>
      {/* end page main wrapper */}
    </div>
    </>
  )
}

export default Profile