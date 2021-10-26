
function CoursesItem(props) {
  const {Name, CharCode, Value, ID, Previous} = props;

  const triangle = (Value, Previous) =>{
    if(Value < Previous){
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" ><path style={{fill: '#ff0000'}} d="M46 3.004 0 3l23.002 40z"/></svg>
    }
    else{
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" ><path style={{fill: '#3bd52c', transform: 'rotate(180deg)', transformOrigin: 'center'}} d="M46 3.004 0 3l23.002 40z"/></svg>
    }
  }
  return (
    <div className="courses__item" id={ID}>
      <p className="courses__item-title">{Name} ({CharCode})</p>
      <div className="courses__item-price">{Value} руб.
        <div className="courses__item-triangle">
          {triangle(Value, Previous)}
        </div>
      </div>
    </div>
  );
}

export { CoursesItem };
