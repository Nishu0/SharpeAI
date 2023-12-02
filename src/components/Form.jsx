import { Input } from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  walletAddress_validation
} from '../utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const [user, setUser] = useState({
    name: '',
    walletAddress: '',
    description: '',
  })
  let name, value
  const data=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
    console.log(user)
  }
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={
            e => e.preventDefault()
            
        }
        noValidate
        autoComplete="off"
        className="container"
        method='POST'
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation}/>
          <Input {...walletAddress_validation} />
          <Input {...desc_validation} className="md:col-span-2" />
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}