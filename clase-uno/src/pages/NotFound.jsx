import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h2 className="text-2xl md:text-4xl justify-center">
        This is not the web page you are looking for.
      </h2>
      <img
        className="md:w-2/3 w-full
      "
        src="https://img.freepik.com/vector-gratis/error-404-ilustracion-concepto-paisaje_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1710892800&semt=sph"
        alt=""
      />
    </div>
  );
};

export default NotFound;
