// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import './login.css'
import { signIn } from "@/app/_lib/auth";

function Login() {
    
  
   
   
    

    const SignTo= async()=>{
      'use server'
     await signIn('google',{
        redirectTo:'/'
      })
    }
  
    return (
      <>
        <div className="row justify-content-center vh-100 ">
         
            <h2 className="mt-5 text-center">
              Sign in to your account
            </h2>
          
  
          <div className="col-7 ">
            <form
              action={SignTo}
              className=" text-center"
              
            >
              <div>
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    // required
                    autoComplete="email"
                   
                    placeholder="Email address"
                    
                   
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    // required
                    autoComplete="current-password"
                   
                    placeholder="Password"
                   
                  />
  
                  {/* {pass.showPassword == false ? (
                    <RemoveRedEyeIcon
                      className="icon"
                      onClick={() => {
                        toggelPassword();
                      }}
                    />
                  ) : (
                    <RemoveRedEyeOutlinedIcon
                      className="icon"
                      onClick={() => {
                        toggelPassword();
                      }}
                    />
                  )}
                   */}
                </div>
               
              </div>
  
              <div className="text-center">
              
                <button
                  
                  className="btn btn-primary col-7"
                >
                  Sign in by google
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;