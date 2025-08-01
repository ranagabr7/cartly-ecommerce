import React from 'react'
import ResetPasswordForm from '../../Feathures/authentication/ResetPasswordForm/ResetPasswordForm'

export default function ResetPassword() {
  return (
    <main className="mx-0 my-9 w-full px-5 md:mx-auto md:max-w-[45%]">
      <div className="">
        <h1 className="mb-4  text-2xl font-semibold uppercase text-gray-600">
        
          Enter new Password
        </h1>
        <ResetPasswordForm/>
      </div>
    </main>
  )
}
