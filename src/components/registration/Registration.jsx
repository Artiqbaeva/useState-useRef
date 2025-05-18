import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-purple-400 inline-block">Registration</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input type="text" placeholder="Enter your name" className="w-full p-3 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Registered Id</label>
            <input type="text" placeholder="Enter your Id" className="w-full p-3 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input type="text" placeholder="Enter your number" className="w-full p-3 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full p-3 border rounded-md" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Confirm Password</label>
            <input type="password" placeholder="Confirm your password" className="w-full p-3 border rounded-md" />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 font-semibold">Gender</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" /> Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" /> Female
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" /> Prefer not to say
              </label>
            </div>
          </div>

          <div className="col-span-2">
            <button type="submit" className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold px-6 py-2 rounded shadow hover:opacity-90">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;