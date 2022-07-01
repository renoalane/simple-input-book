import React from "react";
import "animate.css";
import Header from "./Header";

function Input(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ???
  };

  const previewImage = () => {
    const image = document.querySelector("#image");
    const imgPreview = document.querySelector(".img-preview");

    imgPreview.style.display = "block";

    // Mengambil gambar
    const oFReader = new FileReader();
    oFReader.readAsDataURL(image.files[0]);

    oFReader.onload = function (oFREvenet) {
      imgPreview.src = oFREvenet.target.result;
    };
  };

  return (
    <div className="flex justify-around">
      <div className="left">
        <Header name="This is Props from Component Input yang ada dibawah" />
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y-2 sm:text-left">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="shrink-0 flex items-center mb-5">
                <img
                  className="img-preview h-16 w-16 object-cover rounded-full mr-1"
                  src="https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Current profile photo"
                />
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    id="image"
                    type="file"
                    onChange={previewImage}
                    className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                  />
                </label>
              </div>
              <label className="block">
                <span className="block text-sm font-medium text-slate-700">
                  Title
                </span>
                <input
                  type="text"
                  name="title"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
                />
              </label>
              <button className="my-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="my-auto">
        <div className="py-8 my-7 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          {/* <h1 className="font-bold">Data Belum Ada</h1> */}
          {/* <table className="table-auto">
            <thead>
              <tr>
                <th className="border-separate border border-slate-400 p-1">#</th>
                <th className="border-separate border border-slate-400 p-1">
                  Title
                </th>
                <th className="border-separate border border-slate-400 p-1">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-separate border border-slate-400 p-3">1</td>
                <td className="border-separate border border-slate-400 p-3">
                  Indianapolis
                </td>
                <td className="border-separate border border-slate-400 p-3">
                  <img
                    className="h-14 w-1h-14 rounded-lg"
                    src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt="image"
                  />
                </td>
              </tr>
            </tbody>
          </table> */}
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">l</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
