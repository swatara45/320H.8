import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }



function handleSubmit(e) {
    e.preventDefault();
    if(!formData.firstName || !formData.lastName) return alert('You need to fill out both fields');

    nav(`/greet/${formData.firstName}/${formData.lastName}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Tell me about yourself</h4>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="First Name..."
        />
        <br />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name..."
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}