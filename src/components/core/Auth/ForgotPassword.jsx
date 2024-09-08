import React from 'react'


import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPasswordResetToken } from "../../../services/operations/authAPI"

const ForgotPassword = () => {
  
  
  const [email, setEmail] = useState("")

  const dispatch = useDispatch()
  const { setEmailSent } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
    dispatch(setEmailSent(true,true))
  }
  return (
    <div>
      <h1>RESET YOUR PASS WORD</h1>
      <p> Please enter your email address to to reset your password</p>
      <form action="" onSubmit={handleOnSubmit }>
        <label >
          <p>Email Address</p>
          <input type="email" name='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
        </label>

        <button type='submit' > Reset Password</button>
      </form>
      <div></div>
    </div>
   
  )
}

export default ForgotPassword