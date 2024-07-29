import loginImg from "../assets/Images/instructor.jpg"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back "
      description1="Develop abilities for the present, the future, and beyond."
      description2="Acquire education to secure your career for the long term."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login