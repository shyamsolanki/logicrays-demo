import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter, NavLink} from 'react-router-dom';
import AboutUs from './About Us/About Us';
import Notfound from './Error Page/Not found';
import ContactUs from './Contact Us/Contact Us';
import Home from './Home/Home';
import LiveProjectTraining from './Live Project Traning/Live Project Training';
import OurCourse from './Our Courses/Our Course';

const routing =
(
  <BrowserRouter>

    <div>
      <h1>Router Example</h1>
      <ul>
        <li><NavLink to="/" exact activeStyle={{color:'red'}}>Home</NavLink></li>
        <li><NavLink to="/lra_ourcourses" exact activeStyle={{color:'blue'}}>OurCourse</NavLink></li>
        <li><NavLink to="/lra_liveProjectTraining" exact activeStyle={{color:'pink'}}>LiveProjectTraining</NavLink></li>
        <li><NavLink to="/lra_aboutUs" exact activeStyle={{color:'yellow'}}>AboutUs</NavLink></li>
        <li><NavLink to="/lra_contactUs" exact activeStyle={{color:'green'}}>ContactUs</NavLink></li>
      </ul>
     
      <div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/lra_ourcourses" element={<OurCourse/>}/>
      <Route path="/lra_liveProjectTraining" element={<LiveProjectTraining/>}/>
      <Route path="/lra_aboutUs" element={<AboutUs/>}/>
      <Route path="/lra_contactUs" element={<ContactUs/>}/>
      <Route path="*" element={<Notfound/>}/>
     </Routes>
     
  </div>
  </div>
  </BrowserRouter>
);
ReactDOM.render(routing,document.getElementById("root_spa_lra"));