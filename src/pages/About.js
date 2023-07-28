import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>About 페이지 영역</div>
      <Outlet />
    </>
  )
}

export default About;