import React from "react";

function FirstSection() {
  return (
    <div>
      <p className="pb-1">
        <b>Telephone number: </b>(+381) 638312360
      </p>
      <p className="pb-1">
        <b>Email: </b>
        <a
          className="text-blue-600 hover:underline"
          href="mailto:dujka97@gmail.com"
        >
          dujka97@gmail.com
        </a>
      </p>
      <p className="pb-1">
        <b>Linkedin profile: </b>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://www.linkedin.com/in/aleksandar-dujki%C4%87-a421151b6"
        >
          my profile
        </a>
      </p>
      <p className="pb-1">
        <b>Skype: </b>
        <a
          className="text-blue-600 hover:underline"
          href="skype:live:dujka97?chat"
        >
          live:dujka97
        </a>
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
