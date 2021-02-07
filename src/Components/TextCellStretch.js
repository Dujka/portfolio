import React from "react";

function TextCellStretch(props) {
  return (
    <div className="mx-auto text-justify w-full bg-white rounded-xl shadow-lg overflow-hidden m-3 text-xs sm:text-base">
      <div className="">
        <div className="py-8 mx-8">
          <p className="block md:text-left text-center mt-1 text-lg leading-tight font-medium text-black mb-6 uppercase">
            {props.title}
          </p>
          <div className="mt-2 text-gray-500">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default TextCellStretch;
