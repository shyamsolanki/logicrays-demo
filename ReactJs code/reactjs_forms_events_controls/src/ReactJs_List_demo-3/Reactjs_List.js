export function NameList(props) {  
    const dispmyList = props.listData;  

    const listItems = dispmyList.map((x) =>  
      <li>{x}</li>  
    );  

    const displist=
        <div>  
            <h2>Rendering Lists inside component</h2>  
                  <ul>{listItems}</ul>  
        </div>  
    return displist;
    }  