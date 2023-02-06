import React from "react"


export default function SignUpForm() {
  const [formData, setFormData] = React.useState(
      {userName: "", email: "", password: "", storeName: "", storeLocation: "", displayName: "", storeURL: ""}
  )

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault(); //needs to open next page
    console.log(formData);
  };

  return (
      <form>
          <input
              type="text"
              placeholder="Username"
              onChange={handleChange}
              name="userName"
          />
          <input
              type="text"
              placeholder="Email/Phone Number"
              onChange={handleChange}
              name="email"
          />
           <input
              type="text"
              placeholder="Password"
              onChange={handleChange}
              name="password"
          />
           <input
              type="text"
              placeholder="Store Name"
              onChange={handleChange}
              name="storeName"
          />
           <input
              type="text"
              placeholder="Store Location"
              onChange={handleChange}
              name="storeLocation"
          />
           <input
              type="text"
              placeholder="Store Display Name"
              onChange={handleChange}
              name="displayName"
          />
           <input
              type="text"
              placeholder="Store URL"
              onChange={handleChange}
              name="storeURL"
          />

          <input type="submit" value="Submit" />
      </form>
  )
}