export function MenuBlog(props) {
  const titlebar = (
    <div>
      <ol>
        {props.empdata.map((show) => (
          <li key={show.empid}>{show.empname}</li>
        ))}
      </ol>
    </div>
  );
  const content = props.empdata.map((show) => (
    <div key={show.empid}>
      <h3>
        {show.empname}: {show.designation}
      </h3>
    </div>
  ));
  return (
    <div>
      {titlebar}
      <hr />
      {content}
    </div>
  );
}
