import React from "react"
import AboutUs from "./About Us/About Us"
import ContactUs from "./Contact Us/Contact Us"
import Home from "./Home/Home"
import LiveProjectTraining from "./Live Project Traning/Live Project Training"
import OurCourse from "./Our Courses/Our Course"
class RootComponante extends React.Component
{
  render()
  {
    const disp_maincontant=
    <div>
      <Home/>
      <OurCourse/>
      <LiveProjectTraining/>
      <AboutUs/>
      <ContactUs/>
    </div>
    return disp_maincontant;
  }
}
export default RootComponante;