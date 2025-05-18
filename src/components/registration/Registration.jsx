import React, { useRef, useState, useEffect } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const RegistrationForm = () => {
  const fname = useRef(null);
  const email = useRef(null);
  const number = useRef(null);
  const id = useRef(null);
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const all = {
      fname: fname.current.value,
      email: email.current.value,
      number: number.current.value,
      id: id.current.value,
      password,
      confirmPassword,
      gender
    };

    if (editId !== null) {
      const updated = data.map((registration) =>
        registration.id === editId ? all : registration
      );
      setData(updated);
      setEditId(null);
    } else {
      setData([...data, all]);
    }

    setPassword("");
    setconfirmPassword("");
    fname.current.value = "";
    email.current.value = "";
    number.current.value = "";
    id.current.value = "";
    setGender("");
  };

  const handleDelete = (id) => {
    if (confirm("Do you want to delete?")) {
      setData(data.filter((registration) => registration.id !== id));
    }
  };

  const handleEdit = (registration) => {
    fname.current.value = registration.fname;
    email.current.value = registration.email;
    number.current.value = registration.number;
    id.current.value = registration.id;
    setPassword(registration.password);
    setconfirmPassword(registration.confirmPassword);
    setGender(registration.gender);
    setEditId(registration.id);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-purple-400 inline-block">Registration</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 custom-grid">
            <div>
              <label className="block mb-2 font-semibold">Full Name</label>
              <input required ref={fname} type="text" placeholder="Enter your name" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Registered Id</label>
              <input required ref={id} type="text" placeholder="Enter your Id" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input required ref={email} type="email" placeholder="Enter your email" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" >Phone Number</label>
              <input required ref={number} type="text" placeholder="Enter your number" className="w-full p-3 border rounded-md" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Password</label>
              <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="w-full p-3 border rounded-md " autoComplete='new-password' />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Confirm Password</label>
              <input required value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder="Confirm your password" className="w-full p-3 border rounded-md" autoComplete='new-password' />
            </div>

            <div className="col-span-2">
              <label className="block mb-2 font-semibold">Gender</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input required type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} /> Male
                </label>
                <label className="flex items-center gap-2">
                  <input required type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} /> Female
                </label>
                <label className="flex items-center gap-2">
                  <input required type="radio" name="gender" value="Prefer not to say" checked={gender === "Prefer not to say"} onChange={(e) => setGender(e.target.value)} /> Prefer not to say
                </label>
              </div>
            </div>

            <div className="col-span-2">
              <button type="submit" className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold px-6 py-2 rounded shadow hover:opacity-90">
                {editId !== null ? "Update" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-4">
        <div className="flex flex-wrap gap-6">
          {data.map((registration) => (
            <div key={registration.id} className="bg-white shadow-lg rounded-2xl p-6 w-80">
              <img
                src="https://t3.ftcdn.net/jpg/09/38/20/44/360_F_938204480_5BZPwZ4dL5iujr2XZwzkxdFeQJoRDsRE.jpg"
                alt="Profile"
                className="w-full h-45 mx-auto mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold text-center mb-2">
                Full Name: <span className="font-bold">{registration.fname}</span>
              </h2>
              <p><span className="font-semibold">Registered Id:</span> {registration.id}</p>
              <p><span className="font-semibold">Phone Number:</span> {registration.number}</p>
              <p><span className="font-semibold">Password:</span> {registration.password}</p>
              <p><span className="font-semibold">Confirm Password:</span> {registration.confirmPassword}</p>
              <p><span className="font-semibold">Email:</span> {registration.email}</p>
              <p><span className="font-semibold">Gender:</span> {registration.gender}</p>
              <div className='flex items-center justify-end gap-[15px] mt-[10px] '>
                <button onClick={() => handleEdit(registration)} className='cursor-pointer'><FaEdit /></button>
                <button onClick={() => handleDelete(registration.id)} className='cursor-pointer'><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;