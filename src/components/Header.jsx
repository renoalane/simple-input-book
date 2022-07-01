import React, { useState } from "react";

function Header(props) {
  const [value, setValue] = useState("Perpustakaan Sembada");
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="py-2 px-4 shadow-lg max-w-sm mx-auto my-10 rounded-lg">
        <img
          className="h-24 rounded-full sm:mx-auto sm:shrink-0 w-24 mb-2 animate__animated animate__backInDown animate__slow"
          src="https://source.unsplash.com/random/?book"
          alt="Perpustakaan"
        />
        <h1 className="font-bold animate__animated animate__tada animate__infinite">
          {value}
        </h1>
        <p className="font-bold my-2">
          <button
            className="px-2 text-sm text-purple-600 border font-semibold bg-purple-200 rounded-full"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          &nbsp;{count}&nbsp;
          <button
            className="px-2 text-sm text-purple-600 border font-semibold bg-purple-200 rounded-full"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </p>
        <button
          className="p-1 text-sm text-purple-600 border font-semibold bg-purple-200 rounded-lg"
          onClick={() => {
            if (
              value === "Perpustakaan Sembada" ||
              value === "Loh Diubah lagi"
            ) {
              setValue("Diubah dengan State");
            } else {
              setValue("Loh Diubah lagi");
            }
          }}
        >
          Change
        </button>
        <p>{props.name}</p>
        <p>⇩</p>
      </div>
    </div>
  );
}

export default Header;
