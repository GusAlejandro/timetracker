import React, { useState } from "react";

function LoginForm() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setCredentials(credentials => ({...credentials, [name]: value}));
    }


    async function handleRegister(event: React.SyntheticEvent, username: string, password: string) {
      event.preventDefault();
      console.log(credentials);

      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
      }).then((t) => t.json())

      console.log(response);
    }
    

    async function handleLogin(event: React.SyntheticEvent, username: string, password: string) {
      event.preventDefault();
      console.log(credentials);

      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
      }).then((t) => t.json())

      console.log(response);
    }


    return (
      <>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Office Tracker</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Start Planning Your Time in Office
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                    onChange={handleChange}
                    value={credentials.username}
                      name="username"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                    onChange={handleChange}
                    value={credentials.password}
                      name="password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
  
                 
  
                <div>
                  <button
                  type="submit"
                    onClick={ (e) => { handleLogin(e, credentials.username, credentials.password) }}
                    className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </button>
                </div>

                <div>
                  <button
                  onClick={ (e) => { handleRegister(e, credentials.username, credentials.password)}}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>
  
              
            </div>
          </div>
        </div>
      </>
    )
  }

  export default LoginForm;