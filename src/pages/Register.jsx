import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notvalidEmail, setNotvalidEmail] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameSpace, setUsernameSpace] = useState(false);
  const [password, setPassword] = useState("");
  const [invalidPass, setinValidPass] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');
  const [notConfirmed, setNotConfirmed] =useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    setEmail(e.target.value);
    console.log(e.target.value);
    if (!emailRegex.test(email)) {
      setNotvalidEmail(true);
    } else setNotvalidEmail(false);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (username.includes(" ")) {
      setUsernameSpace(true);
    } else {
      setUsernameSpace(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setinValidPass(true);
    } else {
      setinValidPass(false);
      console.log(password);
    }
  };

  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
    console.log(e.target.value);
    if(!(password == e.target.value)){
        setNotConfirmed(true);
    }else{
        setNotConfirmed(false);
    }
  }

  return (
    <div>
      {/* name */}
      <div data-aos="fade-down"
              data-aos-delay="250"
              data-aos-duration="1500"
              data-aos-offset="0" className="row " style={{marginTop:'4rem'}}>
        <div className="row  mb-3">
          <div className="">
            <label htmlFor="name" className="form-label">
              <span className="text-danger">*</span>Name
            </label>
            <input
              type="text"
              className={
                "form-control " +
                (name.length <= 3 &&
                  name.length != 0 &&
                  "border-2 border-danger")
              }
              id="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={handleName}
              autoComplete="off"
            />
          </div>
        </div>
        {name.length <= 3 && name.length != 0 && (
          <div className="row">
            <p className="text-danger">The Name must be longer 3 characters</p>
          </div>
        )}
      </div>

      

      {/* user name */}
      <div data-aos="fade-down"
              data-aos-delay="250"
              data-aos-duration="1500"
              data-aos-offset="0" className="row">
        <div className="row">
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              <span className="text-danger">*</span>User Name
            </label>
            <input
              type="text"
              className={
                "form-control " + (usernameSpace && "border-2 border-danger")
              }
              id="userName"
              value={username}
              onChange={handleUsername}
              required
              autoComplete="off"
            />
          </div>
        </div>
        {usernameSpace && (
          <div className="row">
            <p className="text-danger">User Name must have no spaces</p>
          </div>
        )}
      </div>

      {/* email address */}
      <div data-aos="fade-right"
              data-aos-delay="250"
              data-aos-duration="1500"
              data-aos-offset="0" className="row">
        <div className="row">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <span className="text-danger">*</span>Email address
          </label>
          <input
            type="email"
            className="form-control mb-2 "
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
            value={email}
            onChange={handleEmail}
            autoComplete="off"
          />
        </div>
        {notvalidEmail && email.length != 0 && (
          <div className="row">
            <p className="text-danger">Please enter a valid email address</p>
          </div>
        )}
      </div>

      {/* password */}
      <div data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1500"
              data-aos-offset="0" className="row">
        <label htmlFor="inputPassword5" className="form-label">
          <span className="text-danger">*</span>Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={password}
          onChange={handlePassword}
          autoComplete="off"
        />
        {(invalidPass && password.length !=0) && (
          <div id="passwordHelpBlock" className="form-text">
            Your password must has 8-20 characters, at least one
            uppercase and lowercase English letter,digits and special character
          </div>
        )}
      </div>

      {/* confirm password */}
      <div data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="1500"
              data-aos-offset="0" className="row">
        <label htmlFor="confirmPassword" className="form-label">
          <span className="text-danger">*</span>Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={confirmPass}
          onChange={handleConfirmPass}
          autoComplete="off"
        />
        {(notConfirmed && confirmPass.length != 0) && <div>
            The passwords do not match!
            </div>}

        {/* register button */}
      </div>
        <div animate__animated animate__rotateIn
        // data-aos="flip-left"
        //       data-aos-delay="250"
        //       data-aos-duration="1500"
        //       data-aos-offset="0"
               className="row">

        <button className="btn btn-success my-4 col-3 animate__animated animate__rotateIn">Register</button>
               </div>
    </div>
  );
}
