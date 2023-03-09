import { Link } from 'react-router-dom'
import PageTitleSection from '../components/pageTitleSection'
export default function Register() {
    return (
        <>
        <PageTitleSection hrefText="Registration" />
        <section>
  <div className="container">
    <div className="row">
      <div className="col-lg-6 center-col">
        <div className="padding-40px-all sm-padding-25px-all shadow border-radius-4">
          <h3 className="text-center margin-40px-bottom">Register</h3>
          <form method="post" action="#!">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input className="form-control" type="text" name="username" id="username" placeholder="User Name" maxLength={70} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input className="form-control" type="email" name="email" id="email" placeholder="Email" maxLength={70} />
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="form-group col-8">
                    <input className="form-control" type="text" name="phone" id="phone" placeholder="Phone" maxLength={70} />
                  </div>
                  <div className="form-group col-4" style={{"padding-left":"0"}}>
                    <input className="form-control" type="text" name="idcard" id="idcard" placeholder="Id Card" maxLength={70} />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" type="password" name="password" id="password1" placeholder="Password" maxLength={70} />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" type="password" name="password" id="password2" placeholder="Confirm Password" maxLength={70} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="custom-control custom-checkbox text-left">
                  <input type="checkbox" className="custom-control-input" id="terms-condition" />
                  <label className="custom-control-label" htmlFor="terms-condition">I agree to the <a href="#!" className="text-theme-color">Terms &amp; Conditions</a></label>
                </div>
              </div>
              <div className="col-md-12 margin-25px-top">
                <button type="button" className="butn btn-block">Register</button>
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