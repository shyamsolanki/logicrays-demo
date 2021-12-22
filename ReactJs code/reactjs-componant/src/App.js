import React from 'react'
import Center from './ClassComponante Header_Center_Footer/Center';
import Footer from './ClassComponante Header_Center_Footer/Footer';
import Header from './ClassComponante Header_Center_Footer/Header'


class RootComponent extends React.Component
{
   render()
   {
     const maincontent=
     <div>
       <Header/>
       <Center/>
       <Footer/>
     </div>
     return maincontent
   }
}

export default RootComponent;