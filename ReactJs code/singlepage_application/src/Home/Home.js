import React from 'react'
class Home extends React.Component
{
    render()
   {
    const disp_home=
    <div>
         <center><h1>HOME</h1></center>
         <h3>
          <p>
               <b>LogicRays Academy</b> is a leading IT company which provides professional IT Training Courses in Ahmedabad as well.
          At LogicRays, our vision is to provide effective training to IT / non-IT freshers and professionals.
          The mentors at LogicRays Academy have several years of industry experience to offer a variety of training
          courses - from basic to advance training. Our excellent lab support and live training give you 
          a first-hand experience of the virtual environment of an IT company.
          </p>
          <p>
              The expert trainers offer certification courses in different topics like Web & Graphic Design, Python,
         PHP, etc. according to current technological trends in the IT industry. Tie-ups with leading IT companies
         ensure a 100% job placement according to your preference and potential.
         </p>
         <p>
             Want to know which IT courses in more suitable to you? Feel free tocontact LogicRays Academy.
        </p>
         </h3>
    </div>
        return disp_home;
   }
}
export default Home;