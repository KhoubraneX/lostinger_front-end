import PageTitleSection from "../components/pageTitleSection"
import { Link } from "react-router-dom"
export default function Login() {
    return (
      <>
      <PageTitleSection hrefText="Login"/>
      <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 center-col">
            <div className="padding-40px-all sm-padding-25px-all shadow border-radius-4">
              <h3 className="text-center margin-40px-bottom">Login</h3>
              <form method="post" action="#!">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input className="form-control" type="Email" name="Email" id="Email" required="required" placeholder="Email" maxLength={70} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input className="form-control" type="password" name="password" id="password" required="required" placeholder="Password" maxLength={70} />
                    </div>
                  </div>
                </div>
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
                  <button type="button" className="butn btn-block">Login</button>
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