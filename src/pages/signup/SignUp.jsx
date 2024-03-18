import React from 'react';
import { useForm } from "react-hook-form"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example"))
    return (
        <div className='min-h-screen'>
            <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="input input-bordered input-info w-full max-w-xs" defaultValue="name" {...register("name")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input className="input input-bordered input-info w-full max-w-xs"{...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}

      <input className="btn btn-outline btn-primary" type="submit" />
    </form>
        </div>
    );
};

export default SignUp;