import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

function Formm() {

  const schema = yup.object().shape({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Email: yup.string().email().required(),
    Age: yup.number().positive().integer().min(i8),
    Password: yup.string().min(8).max(20).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref("Password"), null, "password doesnt match"]).required()
  })

  const { register, handleSubmit, forstate: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit(data) {
    console.log(data);
  }

  //styles
  const containerStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    margin: '10px 0',
    padding: '8px',
    fontSize: '16px',
  };

  const submitButtonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    fontSize: '18px',
    cursor: 'pointer',
  };

  // end of styles 
  return (
    <>
      <div style={containerStyle}>
        <form style={formStyle} onChange={() => handleSubmit(onSubmit)}>
          <input style={inputStyle} type="text" placeholder="First-Name"  {...register("FullName")} />
          <p style={{ color: "red" }}>{errors?.FirstName.message}</p>
          <input style={inputStyle} type="text" placeholder="Last-Name"  {...register("LastName")} />
          <p style={{ color: "red" }}>{errors?.LastName.message}</p>
          <input style={inputStyle} type="email" placeholder="Email" {...register("Email")} />
          <p style={{ color: "red" }}>{errors?.Email.message}</p>
          <input style={inputStyle} type="email" placeholder="Age" {...register("Age")} />
          <p style={{ color: "red" }}>{errors?.Age.message}</p>
          <input style={inputStyle} type="password" placeholder="Password" {...register("Password")} />
          <p style={{ color: "red" }}>{errors?.Password.message}</p>
          <input style={inputStyle} type="text" placeholder=" ConfirmPassword"  {...register(ConfirmPassword)} />
          <p style={{ color: "red" }}>{errors?.ConfirmPassword.message}</p>
          <button style={submitButtonStyle} type="submit">Submit</button>
        </form>
      </div>
    </>
  )

}

export default Formm