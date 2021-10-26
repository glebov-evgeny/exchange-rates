import { CoursesItem } from "../Courses/CoursesItem";

function Courses({courses}) {

  return (
    <section className="courses">
      <div className="container">
        <h1 className="courses__title">Курсы валют:</h1>
          <div className="courses__block">          
            {courses.map(item => (
              <CoursesItem key={item.ID} {...item}/>
            ))}
          </div>
      </div>
    </section>
  );
}

export { Courses };
