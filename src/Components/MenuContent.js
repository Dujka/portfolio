import React from "react";

function MenuContent() {
  return (
    <div>
      <h1>
        <b>My web projects</b>
      </h1>
      <p>
        Finished:
        <br />
        <a
          className="text-blue-700 text-md hover:text-blue-600  hover:underline"
          rel="noreferrer"
          target="_blank"
          href="https:/bezbednostnainternetu.netlify.app"
        >
          Security and Privacy on the Internet
        </a>
        <br />
        <a
          className="text-blue-700 text-md hover:text-blue-600  hover:underline"
          rel="noreferrer"
          target="_blank"
          href="https://react-tic-tac-toe-47d64.web.app/"
        >
          Tic tac toe
        </a>
      </p>
      <p>
        Work in progres:
        <br />
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
