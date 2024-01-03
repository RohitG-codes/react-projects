import React from "react";

// const Cards = (props) => {
// console.log(props.username);
// console.log(props.objs);
// console.log(props.arrs);

const Cards = ({ username, objs, arrs, btntext ,imgsrc}) => {
  console.log(username);
  console.log(objs);
  console.log(objs.name);
  console.log(objs.age);
  console.log(arrs);
  console.log(btntext);
  console.log(imgsrc);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
      <img
        src={imgsrc}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          My name is {objs.name} and I am {objs.age} yesrs old !!!
        </p>
        <button className="mt-2 text-black inline-flex cursor-pointer items-center text-sm font-semibold">
          {btntext} → {arrs[0]} {arrs[1]} {arrs[2]}
        </button>
      </div>
    </div>
  );
};

export default Cards;
