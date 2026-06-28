import React, { useState } from "react";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">


      {/* Login Card */}

      <div className="w-[350px] bg-white border border-gray-300 px-10 py-12">


        <div className="flex justify-center">
    <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" alt="" width="140px"  />
</div>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >


          <input

            type="text"
            name="email"
            placeholder="Phone number, username, or email"

            value={formData.email}
            onChange={handleChange}

            className="
            h-10
            px-3
            border
            border-gray-300
            rounded
            bg-gray-50
            text-sm
            outline-none
            "

          />


          <input

            type="password"
            name="password"
            placeholder="Password"

            value={formData.password}
            onChange={handleChange}

            className="
            h-10
            px-3
            border
            border-gray-300
            rounded
            bg-gray-50
            text-sm
            outline-none
            "

          />


          <button

            className="
            bg-blue-500
            text-white
            rounded-lg
            h-9
            font-semibold
            mt-2
            hover:bg-blue-600
            "

          >
            Log in

          </button>


        </form>



        {/* Divider */}

        <div className="flex items-center gap-3 my-6 text-gray-500 text-sm">

          <div className="h-px bg-gray-300 flex-1"></div>

          OR

          <div className="h-px bg-gray-300 flex-1"></div>

        </div>



        <p className="text-center text-blue-900 font-semibold cursor-pointer">

          Log in with Facebook

        </p>


        <p className="text-center text-xs mt-5 text-gray-600 cursor-pointer">

          Forgot password?

        </p>



      </div>



      {/* Signup Card */}


      <div className="w-[350px] bg-white border border-gray-300 mt-3 p-6 text-center text-sm">

        Don't have an account?

        <span className="text-blue-500 font-semibold cursor-pointer ml-1">

          Sign up

        </span>

      </div>


    </div>
  );
};


export default Login;