import React from "react";
import "animate.css";

function Input(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // ???
  };

  return (
    <div className="flex justify-around">
      <div class="left">
        <div class="py-8 px-4 shadow-lg max-w-sm mx-auto my-10 rounded-lg">
          <img
            class="h-24 rounded-full sm:mx-auto sm:shrink-0 w-24 mb-2 animate__animated animate__backInDown animate__fast"
            src="https://source.unsplash.com/random/?book"
            alt="Woman's Face"
          />
          <h1 class="font-bold animate__animated animate__tada animate__infinite">
            Perpustakaan Sembada
          </h1>
        </div>
        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div class="text-center space-y-2 sm:text-left">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div class="shrink-0 flex items-center mb-5">
                <img
                  class="h-16 w-16 object-cover rounded-full mr-1"
                  src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Current profile photo"
                />
                <label class="block">
                  <span class="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                  />
                </label>
              </div>
              <label class="block">
                <span class="block text-sm font-medium text-slate-700">
                  Title
                </span>
                <input
                  type="text"
                  name="title"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
                />
              </label>
              <button class="my-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="my-auto">
        <div class="py-8 my-7 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          {/* <h1 class="font-bold">Data Belum Ada</h1> */}
          {/* <table class="table-auto">
            <thead>
              <tr>
                <th class="border-separate border border-slate-400 p-1">#</th>
                <th class="border-separate border border-slate-400 p-1">
                  Title
                </th>
                <th class="border-separate border border-slate-400 p-1">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-separate border border-slate-400 p-3">1</td>
                <td class="border-separate border border-slate-400 p-3">
                  Indianapolis
                </td>
                <td class="border-separate border border-slate-400 p-3">
                  <img
                    class="h-14 w-1h-14 rounded-lg"
                    src="https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                    alt="image"
                  />
                </td>
              </tr>
            </tbody>
          </table> */}
          <div
            class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span class="visually-hidden">l</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
