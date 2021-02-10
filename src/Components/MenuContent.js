import React from "react";

function MenuContent() {
  return (
    <div>
      <p>My web projects</p>
      <p>
        Finished:{" "}
        <a
          className="text-blue-700 text-md hover:text-blue-600  hover:underline"
          rel="noreferrer"
          target="_blank"
          href="https:/bezbednostnainternetu.netlify.app"
        >
          Security and Privacy on the Internet
        </a>
      </p>
      <p>
        Work in progres:{" "}
        <a
          className="text-blue-700 text-md hover:text-blue-600  hover:underline"
          rel="noreferrer"
          target="_blank"
          href="https:/rtanjhoney.netlify.app"
        >
          Rtanj Honey online store
        </a>
      </p>
    </div>
  );
}

export default MenuContent;
