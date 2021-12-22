import React from "react";

class LibreryInfo extends React.Component
{
     render()
     {
         const lib_info=
         {
             bookName:"Science",
             libreryName:"Liberty"
         }
         return <BookInfo data={lib_info}/>
     }
}
export default LibreryInfo;