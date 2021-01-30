import React from "react";

function TextCell(props) {
  return (
    <div className="mx-auto text-center lg:self-stretch w-full bg-white rounded-xl shadow-lg overflow-hidden lg:max-w-md m-3 text-xs sm:text-base">
      <div className="">
        <div className="py-8 mx-8">
          <p className="block mt-1 text-lg leading-tight font-medium text-black mb-6">
            {props.title}
          </p>
          <div className="mt-2 text-gray-500">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default TextCell;
