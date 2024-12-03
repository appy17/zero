// import axios from "axios";
// import React, { useState } from "react";

// const Form = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic form validation
//     const { firstname, lastname, email, phone } = formData;
//     if (!firstname || !lastname || !email || !phone) {
//       alert("All fields are required.");
//       return;
//     }

//     setIsModalOpen(false);

//     try {
//       const response = await axios.post("http://localhost:8000/form/create", {
//         firstName: firstname,
//         lastName: lastname,
//         email,
//         phone,
//       });

//       if (response.status === 200) {
//         alert(response.data.msg);
//       } else {
//         alert(`Failed to register: ${response.data.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert(
//         `An error occurred: ${
//           error.response?.data?.message || error.message || "Unknown error"
//         }`
//       );
//     }
//   };

//   const handlePayment = async () => {
//     const { firstname, phone } = formData;

//     if (!firstname || !phone) {
//       alert("Please complete the registration first.");
//       return;
//     }

//     const data = {
//       firstname,
//       phone,
//       amount: 117.99,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:8000/create-order",
//         data
//       );
//       console.log("Order created successfully:", response.data);
//       alert("Order created successfully. Proceed to payment!");
//     } catch (error) {
//       console.error("Error creating order:", error);
//       alert("Failed to create order. Please try again.");
//     }
//   };

//   return (
//     <section className="bg-gray-900 text-white">
//       <div className="mx-auto max-w-screen-xl px-4 pt-20 lg:flex">
//         <div className="mx-auto text-center">
//           <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl">
//             Almost There! Complete Your Registration to Begin Your Journey!
//           </h1>

//           <p className="mx-auto mt-8 max-w-7xl sm:text-xl">
//             Fantastic! You're on the brink of joining our vibrant community.
//             Fill out the registration form to gain immediate access to
//             cutting-edge resources and unparalleled learning opportunities. Get
//             started today!
//           </p>

//           {isModalOpen ? (
//             <div className="lg:ml-96 mx-4 my-14">
//               <form onSubmit={handleSubmit}>
//                 <p className="text-xl font-bold">Register</p>
//                 <p className="text-sm">
//                   Unlock Your Potential with Our Exclusive Courses!
//                 </p>
//                 <div className="grid grid-cols-2 gap-4">
//                   <label className="block">
//                     <span>Firstname</span>
//                     <input
//                       className="input mt-2 block w-full rounded border-gray-300"
//                       type="text"
//                       name="firstname"
//                       placeholder="Enter your firstname"
//                       value={formData.firstname}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                   <label className="block">
//                     <span>Lastname</span>
//                     <input
//                       className="input mt-2 block w-full rounded border-gray-300"
//                       type="text"
//                       name="lastname"
//                       placeholder="Enter your lastname"
//                       value={formData.lastname}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                 </div>
//                 <label className="block mt-4">
//                   <span>Email</span>
//                   <input
//                     className="input mt-2 block w-full rounded border-gray-300"
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <label className="block mt-4">
//                   <span>Mobile Number (WhatsApp Number)</span>
//                   <input
//                     className="input mt-2 block w-full rounded border-gray-300"
//                     type="number"
//                     name="phone"
//                     placeholder="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </label>
//                 <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded">
//                   Submit
//                 </button>
//                 <p className="text-sm mt-4">
//                   You will get updates on your <a href="#">WhatsApp</a>
//                 </p>
//               </form>
//             </div>
//           ) : (
//             <div className="bg-white p-6 rounded-md max-w-md my-14 mx-4 lg:ml-96">
//               <h3 className="text-lg font-bold text-gray-800">Summary</h3>
//               <ul className="text-gray-800 mt-6 space-y-3">
//                 <li className="flex justify-between text-sm">
//                   Product <span className="font-bold">Sub total</span>
//                 </li>
//                 <li className="flex justify-between text-sm">
//                   Facebook & Instagram Ads × 1{" "}
//                   <span className="font-bold">₹99.60</span>
//                 </li>
//                 <li className="flex justify-between text-sm">
//                   GST 18% <span className="font-bold">₹17.93</span>
//                 </li>
//                 <hr />
//                 <li className="flex justify-between text-base font-bold">
//                   Total <span>₹117.53</span>
//                 </li>
//               </ul>
//               <button
//                 onClick={handlePayment}
//                 className="mt-5 w-full bg-blue-500 text-white py-2 rounded"
//               >
//                 Pay Fees
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Form;

import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [amount, setAmount] = useState("1");

  const handlePayment = async (e) => {
    e.preventDefault();

    const data = {
      name,
      mobileNumber,
      amount,
    };

    console.log("data", data);

    try {
      const response = await axios.post(
        "https://phonepayphonepayintegration.vercel.app/create-order",
        data
      );
      console.log(response.data);
      if (response.data?.url) {
        window.location.href = response.data.url;
      } else {
        console.error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error in payment", error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      <div className="mx-auto max-w-screen-lg px-4 pt-16">
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Complete Your Registration
          </h1>
          <p className="mt-6 text-lg leading-8">
            Join our vibrant community and unlock access to unparalleled
            learning resources and opportunities. Let's get started!
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name: <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number: <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm text-black focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount: <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    value={amount}
                    // onChange={(e) => setAmount(e.target.value)}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-black"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus:ring focus:ring-indigo-400"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;


