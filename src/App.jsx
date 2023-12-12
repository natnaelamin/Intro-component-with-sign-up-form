import { useState, useEffect } from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import BlueHeader from "./Components/BlueHeader"
import Button from "./Components/Button"
import Modal from "./Components/Modal"


function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')


  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const[showModal, setShowModal] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let isValid = true;
  
    if (firstName === "") {
      setFirstNameError("First Name cannot be empty");
      isValid = false;
    } else {
      setFirstNameError("");
    }
  
    if (lastName === "") {
      setLastNameError("Last Name cannot be empty");
      isValid = false;
    } else {
      setLastNameError("");
    }
  
    const emailRegex = /\S+@\S+\.\S+/;
  
    if (emailAddress === "") {
      setEmailAddressError("Email Address cannot be empty");
      isValid = false;
    } else if (!emailRegex.test(emailAddress)) {
      setEmailAddressError("Email Address is not valid");
      isValid = false;
    } else {
      setEmailAddressError("");
    }
  
    if (password === "") {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else {
      setPasswordError("");
    }
  
    if (isValid) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }
  

  const handleClose = () =>{
    
    setShowModal(false)
    setFirstName('')
    setLastName('')
    setEmailAddress('')
    setPassword('')
}

  const placeholder = [
    'First Name',
    'Last Name',
    'Email Address',
    'Password'
  ]
  
  return (
    <>
      <div className=" bg-[url('/images/bg-intro-desktop.png')] bg-cover h-screen bg-red-400 px-5 pt-12 pb-5 md:px-36 md:py-16 ">
        <div className="md:grid md:grid-cols-2 ">
          <Header/>
          <div>
            <BlueHeader/>
            <div className="bg-white rounded-lg px-8 py-3 md:py-6 md:mb-0 mb-2">
              <form>
                <Form value={firstName} placeholder={placeholder[0]} setValue={setFirstName} error={firstNameError}/>
                <Form value={lastName} placeholder={placeholder[1]} setValue={setLastName} error={lastNameError}/>
                <Form value={emailAddress} placeholder={placeholder[2]} setValue={setEmailAddress} error={emailAddressError}/>
                <Form value={password} placeholder={placeholder[3]} setValue={setPassword} error={passwordError}/> 
              </form>
              <Button handleSubmit={handleSubmit}/>
            </div>
          </div>
        </div> 
      </div>
      <Modal handleClose={handleClose} isVisible={showModal}/>
    </>
  )
}

export default App
