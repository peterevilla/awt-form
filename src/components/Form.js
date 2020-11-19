import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mt-4 space-y-4">
        <div className="flex items-center">
          <input
            id="push_everything"
            name="push_notifications"
            type="radio"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label
            htmlFor="push_everything"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            AWT
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="push_email"
            name="push_notifications"
            type="radio"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label
            htmlFor="push_email"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            GPI
          </label>
        </div>
      </div>
      {/*  */}
      <div className="py-8">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Requested By
        </label>
        <div className="border rounded-lg border-teal-500 py-1 w-64">
          <input type="text" id="name" />
        </div>
      </div>
      {/*  */}
      <h2 className="text-gray-700">Part Details:</h2>
      <div className="flex">
      <div className="py-8">
        <label
          htmlFor="part_number"
          className="block text-sm font-medium text-gray-700"
        >
          Part No.
        </label>
        <div className="border rounded-lg border-teal-500 py-1 w-64">
          <input type="text" id="part_number" />
        </div>
      </div>
      </div>
    </form>
  );
};

export default Form;
