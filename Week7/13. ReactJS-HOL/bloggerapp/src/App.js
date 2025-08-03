import React from "react";

export const books = [
  { id: 101, bname: "Master React", price: 670 },
  { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
  { id: 103, bname: "Mongo Essentials", price: 450 },
];

export const blogs = [
  {
    id: 1,
    title: "React Learning",
    author: "Stephen Biz",
    content: "Welcome to learning React!",
  },
  {
    id: 2,
    title: "Installation",
    author: "Schewzdenier",
    content: "You can install React from npm.",
  },
];

export const courses = [
  { name: "Angular", date: "4/5/2021" },
  { name: "React", date: "6/3/2021" },
];

function App() {
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  const content = (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  const coursedet = (
    <ul>
      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course.name}</h2>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px", gap: "40px" }}>
      <div className="mystyle1" style={{ padding: "20px" }}>
        <h1>Course Details</h1>
        {coursedet}
      </div>

      <div className="st2" style={{ borderLeft: "4px solid green", paddingLeft: "20px" }}>
        <h1>Book Details</h1>
        {bookdet}
      </div>

      <div className="v1" style={{ borderLeft: "4px solid green", paddingLeft: "20px" }}>
        <h1>Blog Details</h1>
        {content}
      </div>
    </div>
  );
}

export default App;
