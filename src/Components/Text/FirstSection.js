import React from "react";

function FirstSection() {
  return (
    <div>
      <p className="pb-1">
        <b>Name: </b>Aleksandar Dujkić
      </p>
      <p className="pb-1">
        <b>Birth year: </b>1997
      </p>
      <p className="pb-1">
        <b>My CV in English: </b>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-blue-600 hover:underline"
          href="/CVs/AleksandarDujkicCV_EN.pdf"
        >
          CV in English
        </a>
      </p>
      <p className="pb-1">
        <b>My CV in Serbian: </b>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-blue-600 hover:underline"
          href="/CVs/AleksandarDujkićCV_SR.pdf"
        >
          CV in Serbian
        </a>
      </p>
    </div>
  );
}

export default FirstSection;
