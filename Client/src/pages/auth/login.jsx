import React from 'react';
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForm from "@/components/common/form";
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/auth-slice';
import { toast } from "sonner";

const initialState = {
  email: "",
  password: "",
};


const login = () => {
const [formData, setFormData] = useState(initialState);
const dispatch = useDispatch();

const onSubmit = (event) => {
  event.preventDefault(); // to avoid refresh the page

  dispatch(loginUser(formData)).then((data)=>{
    console.log(data);
    if (data?.payload?.success) {
      toast.success(data?.payload?.message);
    } else {
      toast.error(data?.payload?.message);
    }
  })

};

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account ?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default login;