// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateUser = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     countryCode: '',
//     address: '',
//     zipcode: '',
//     age: '',
//     gender: '',
//     dob: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken');

//     try {
//       const response = await axios.post('http://157.173.222.27:8080/api/v1/user/register', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//           'authorization': `Bearer ${token}`, // Added token here
//         },
//       });

//       if (response.status === 200) {
//         console.log('Registration successful', response.data);
//       } else {
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('An error occurred during registration:', error);
//     }
//   };
 
//   return (
//     <div className="flex items-center justify-center bg-white dark:bg-slate-800">
//       <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded shadow-lg w-full max-w-4xl">
//         <h2 className="text-2xl font-bold mb-3 text-center text-gray-900 dark:text-gray-100">Register</h2>
//         <form onSubmit={handleSubmit} className='text-center'>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6  text-left">
//             {[
//               { label: 'First Name', name: 'firstname', type: 'text' },
//               { label: 'Last Name', name: 'lastname', type: 'text' },
//               { label: 'Email', name: 'email', type: 'email' },
//               { label: 'Phone', name: 'phone', type: 'tel' },
//               { label: 'Country Code', name: 'countryCode', type: 'text' },
//               { label: 'Address', name: 'address', type: 'text' },
//               { label: 'Zipcode', name: 'zipcode', type: 'text' },
//               { label: 'Age', name: 'age', type: 'number' },
//               { label: 'Gender', name: 'gender', type: 'text' },
//               { label: 'Date of Birth', name: 'dob', type: 'date' },
//             ].map((field, index) => (
//               <div key={index}>
//                 <label htmlFor={field.name} className="block text-gray-700 dark:text-gray-300">{field.label}</label>
//                 <input 
//                   type={field.type}
//                   id={field.name}
//                   name={field.name}
//                   className="w-full border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-300   pl-3 py-1"
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   required
//                  />
//               </div>
//             ))}
//           </div>
//           <button
//             type="submit"
//             className="mt-6  bg-blue-500 dark:bg-blue-700 text-white py-2 px-7 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300" >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateUser;


// // import React, { useState } from 'react';
// import axios from 'axios';

// const CreateUser = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     countryCode: '',
//     address: '',
//     zipcode: '',
//     age: '',
//     gender: '',
//     dob: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('authToken');

//     try {
//       const response = await axios.post('http://157.173.222.27:8080/api/v1/user/register', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//           'authorization': Bearer ${token}, // Added token here
//         },
//       });

//       if (response.status === 200) {
//         console.log('Registration successful', response.data);
//       } else {
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('An error occurred during registration:', error);
//     }
//   };
 
//   return (
//     <div className="flex items-center justify-center bg-white dark:bg-slate-800">
//       <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded shadow-lg w-full max-w-4xl">
//         <h2 className="text-2xl font-bold mb-3 text-center text-gray-900 dark:text-gray-100">Register</h2>
//         <form onSubmit={handleSubmit} className='text-center'>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6  text-left">
//             {[
//               { label: 'First Name', name: 'firstname', type: 'text' },
//               { label: 'Last Name', name: 'lastname', type: 'text' },
//               { label: 'Email', name: 'email', type: 'email' },
//               { label: 'Phone', name: 'phone', type: 'tel' },
//               { label: 'Country Code', name: 'countryCode', type: 'text' },
//               { label: 'Address', name: 'address', type: 'text' },
//               { label: 'Zipcode', name: 'zipcode', type: 'text' },
//               { label: 'Age', name: 'age', type: 'number' },
//               { label: 'Gender', name: 'gender', type: 'text' },
//               { label: 'Date of Birth', name: 'dob', type: 'date' },
//             ].map((field, index) => (
//               <div key={index}>
//                 <label htmlFor={field.name} className="block text-gray-700 dark:text-gray-300">{field.label}</label>
//                 <input 
//                   type={field.type}
//                   id={field.name}
//                   name={field.name}
//                   className="w-full border rounded bg-gray-50 dark:bg-gray-700 dark:text-gray-300   pl-3 py-1"
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   required
//                  />
//               </div>
//             ))}
//           </div>
//           <button
//             type="submit"
//             className="mt-6  bg-blue-500 dark:bg-blue-700 text-white py-2 px-7 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300" >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateUser;

import React, { useState } from 'react';
import axios from 'axios';
import { MdHealthAndSafety } from "react-icons/md";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    countryCode: '',
    address: '',
    zipcode: '',
    age: '',
    gender: '',
    dob: '',
    constantMovement: '',
    fitnessLevel: '',
    sleepQuality: '',
    sleepQuantity: '',
    nutritionQuality: '',
    routinePlanning: '',
    routineExecution: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.post('http://157.173.222.27:8080/api/v1/user/register', formData, {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`, // Added token here
        },
      });

      if (response.status === 200) {
        console.log('Registration successful', response.data);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
    }
  };

  return (
    <div className="flex items-center justify-center lg:mb-[30px] h-screen lg:ml-10 lg:mr-10 bg-customLightBlue dark:bg-slate-900">
      <div className="bg-customDarkBlue lg:h-[550px] lg:mt-[40px] dark:bg-customLightBlue mt-[20px] mb-[20px] p-4  rounded shadow-lg w-full max-w-4xl">
        <div className="flex text-1xl text-white lg:flex lg:text-2xl lg:text-bold-black">
          <MdHealthAndSafety />Health Care
        </div>
        <h2 className="text-xl font-bold mb-[10px] text-center text-white dark:text-white">Register</h2>
        <div className="overflow-y-auto max-h-[370px]">
          <form onSubmit={handleSubmit} className="text-center">
            <div className="grid grid-cols-1 text-sm dark:text-white md:grid-cols-2 gap-6 text-left">
              {[
                { label: 'First Name', name: 'firstname', type: 'text' },
                { label: 'Last Name', name: 'lastname', type: 'text' },
                { label: 'Phone', name: 'phone', type: 'tel' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Age', name: 'age', type: 'number' },
                { label: 'Date of Birth', name: 'dob', type: 'date' },
                { label: 'Gender', name: 'gender', type: 'text' },
                { label: 'Address', name: 'address', type: 'text' },
                { label: 'Country Code', name: 'countryCode', type: 'text' },
                { label: 'Zipcode', name: 'zipcode', type: 'text' },
                { label: 'Constant Movement', name: 'constantMovement', type: 'number', min: 0, max: 300 },
                { label: 'Fitness Level', name: 'fitnessLevel', type: 'number', min: 0, max: 300 },
                { label: 'Sleep Quality', name: 'sleepQuality', type: 'number', min: 0, max: 300 },
                { label: 'Sleep Quantity', name: 'sleepQuantity', type: 'number', min: 0, max: 300 },
                { label: 'Routine Planning', name: 'routinePlanning', type: 'number', min: 0, max: 300 },
                { label: 'Nutrition Quality', name: 'nutritionQuality', type: 'number', min: 0, max: 300 },
                { label: 'Routine Execution', name: 'routineExecution', type: 'number', min: 0, max: 300 },
              ].map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block  text-white dark:text-white">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    min={field.min}
                    max={field.max}
                    className="w-full lg:w-[370px] border rounded bg-gray-50 dark:bg-white dark:text-gray-800 pl-3 py-1"
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="mt-6 border w-[150px] text-xl border-white text-white py-2 px-7 rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;