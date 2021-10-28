import { CoursesItem } from "../Courses/CoursesItem";

function Courses({courses}) {

  return (
    <section className="courses">
      <div className="container">
        <h2 className="courses__title">Курсы валют:</h2>
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
