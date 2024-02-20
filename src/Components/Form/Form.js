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

  const{register, handleSubmit, forstate:{ errors}} = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit (data) {
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
      <form style={formStyle}>
        <input style={inputStyle} type="text" placeholder="Name" />
        <input style={inputStyle} type="email" placeholder="Email" />
        <input style={inputStyle} type="password" placeholder="Password" />
        <input style={inputStyle} type="text" placeholder="Address" />
        <input style={inputStyle} type="tel" placeholder="Phone" />
        <button style={submitButtonStyle} type="submit">Submit</button>
      </form>
    </div>
  </>
  )

}