import React from "react"
class OurCourse extends React.Component
{
    render()
    {
        const disp_couse=
        <div>
            <center><h1>Our Course</h1></center>
            <center>
            <a href="https://www.logicraysacademy.com/react-js-training-courses">React Js Training</a><br/>
            <a href="https://www.logicraysacademy.com/c-c-plus-plus-courses" >C/C++ Training </a><br/>
            <a href="https://www.logicraysacademy.com/java-courses">Java Training</a><br/>
            <a href="https://www.logicraysacademy.com/python-programming-training-courses">Python Training</a><br/>
            <a href="https://www.logicraysacademy.com/web-designing-training-courses">Web Design Training</a>
            </center>
        </div>
        return  disp_couse;
    }
}
export default OurCourse;