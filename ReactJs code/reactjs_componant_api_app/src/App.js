import React from "react"
import Content from "./Componante_lyfeCycle_Demo/Componante_content";
import Counter from "./Componante_lyfeCycle_Demo/Componante_Counter_App";

class RootComponante extends React.Component
{
  render()
  {
    const maincontent =
    <div>
      <Counter/>
      <Content/>
    </div>
    return maincontent;
  }
}
export default RootComponante;