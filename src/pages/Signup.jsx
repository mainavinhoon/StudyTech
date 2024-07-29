import signupImg from "../assets/Images/instructor.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Become one of the millions mastering coding at no cost with Study-Tech"
      description1=" "
      description2=" "
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup