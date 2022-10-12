import React from "react";

const Home = () => {
  return (
    <>
      <h1
        className="text-center"
        style={{ letterSpacing: "4px", marginTop: "200px" }}
      >
        React CRUD app using Redux Toolkit
      </h1>
      <div className="text-center mt-5">
        <a
          className="btn"
          style={{
            background: "#006877",
            color: "white",
            padding: "10px 30px",
            fontSize: "25px",
          }}
          href="https://www.youtube.com/playlist?list=PLgH5QX0i9K3pe7Z7ATcyLdUW3grE4Vfld"
        >
          PlayList
        </a>
      </div>
    </>
  );
};

export default Home;
