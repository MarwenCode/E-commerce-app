import React from 'react';
import "./register.scss"

const Register = () => {
  return (
    <div className='register'>
    <section className="heading">
    {/* <p>Please create an account</p> */}
        <div className="top">
        <img 
            className='img'

            src="/images/signin.png"
            
            
            /> 
            <h1 className='title'>Register to find your mobile</h1>

        </div>
        
       
            
        
      

    </section>

    {/* <section className="form" onSubmit={handleRegister}> */}
    <section className="form" >
        <form>
            <div className="form-group">
                <input type='text' 
                       className="form-control"
                       id='name'
                       name='name'
                    //    value={name}
                    //    onChange={onChange}
                       placeholder='Enter your name'
                       required
                    //    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type='email' 
                       className="form-control"
                       id='email'
                       name='email'
                    //    value={email}
                    //    onChange={onChange}
                       placeholder='Enter your email'
                       required
                    //    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type='password' 
                       className="form-control"
                       id='password'
                       name='password'
                    //    value={password}
                    //    onChange={onChange}
                       placeholder='Enter your password'
                       required
                    //    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input type='password' 
                       className="form-control"
                       id='confirmPassword'
                       name='confirmPassword'
                       placeholder='Confirm  password'
                    //    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button className="btn">Submit</button>
            </div>

        </form>
    </section>
    
    </div>
  )
}

export default Register