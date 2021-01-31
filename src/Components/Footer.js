import React from "react";

function Footer() {
  return (
    <footer class="footer bg-gray-800 text-white relative pt-1 border-b-2 border-t shadow-2xl">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col flex-grow w-full">
              <span class="font-bold uppercase mb-4">Contact </span>
              <span className="my-2">
                <b>Name: </b>Aleksandar Dujkić
              </span>
              <span className="my-2">
                <b>Address: </b>Zorana Radmilovića 17
              </span>
              <span className="my-2">
                <b>Phone number: </b>(+381) 638312360
              </span>
              <span className="my-2">
                <b>Email: </b>
                <a
                  className="text-blue-300 text-md hover:text-blue-200  hover:underline"
                  href="mailto:dujka97@gmail.com"
                >
                  dujka97@gmail.com
                </a>
              </span>
            </div>
            <div class="flex flex-col flex-grow w-full">
              <span class="font-bold uppercase mt-4 md:mt-0 mb-4">
                You can find me on
              </span>
              <span class="flex flex-wrap justify-between my-2">
                <a
                  className="mx-auto"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/aleksandar-dujki%C4%87-a421151b6"
                  title="My Linkedin"
                >
                  <svg className="w-12 h-12" viewBox="0 0 68 68">
                    <path
                      fill="currentColor"
                      d="M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z"
                    />
                  </svg>
                </a>
                <a
                  className="mx-auto"
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:dujka97@gmail.com"
                  title="My Email"
                >
                  <svg className="w-12 h-12 pt-0.5" viewBox="0 0 530 530">
                    <circle
                      fill="currentColor"
                      cx="255.999"
                      cy="256"
                      r="246.455"
                    />
                    <path
                      fill="#1F2937"
                      d="M384,128H128c-17.602,0-32,14.406-32,32v192c0,17.594,14.398,32,32,32h256     c17.594,0,32-14.406,32-32V160C416,142.406,401.594,128,384,128L384,128z M384,352h-32V211.203L256,272l-96-60.797V352h-32V160     h19.203L256,227.203L364.797,160H384V352L384,352z"
                    />
                  </svg>
                </a>
                <a
                  className="mx-auto"
                  rel="noreferrer"
                  target="_blank"
                  href="skype:live:dujka97?chat"
                  title="My Skype"
                >
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 68 68">
                    <path
                      fill="currentColor"
                      d="M35.84,46.38c-4.82,0.256-7.075-0.832-9.142-2.809  c-2.308-2.209-1.381-4.728,0.499-4.855c1.879-0.128,3.007,2.171,4.01,2.812c1.002,0.638,4.812,2.09,6.826-0.258  c2.191-2.554-1.458-3.875-4.134-4.276c-3.819-0.576-8.642-2.683-8.267-6.836c0.375-4.149,3.457-6.277,6.7-6.577  c4.134-0.383,6.825,0.638,8.954,2.491c2.461,2.14,1.129,4.532-0.438,4.725c-1.562,0.191-3.316-3.52-6.761-3.576  c-3.551-0.057-5.95,3.768-1.567,4.854c4.385,1.086,9.081,1.532,10.772,5.619C44.984,41.782,40.663,46.123,35.84,46.38z   M49.431,36.656c0.091-0.68,0.143-1.372,0.143-2.075c0-8.446-6.784-15.294-15.152-15.294c-0.832,0-1.647,0.07-2.441,0.202  C30.558,18.548,28.864,18,27.042,18C22.046,18,18,22.107,18,27.175c0,1.844,0.535,3.557,1.456,4.995  c-0.124,0.786-0.188,1.591-0.188,2.41c0,8.447,6.781,15.294,15.151,15.294c0.945,0,1.865-0.093,2.759-0.257  C38.567,50.491,40.204,51,41.958,51C46.953,51,51,46.893,51,41.825C51,39.909,50.423,38.128,49.431,36.656z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z"
                    />
                  </svg>
                </a>
                <a
                  className="mx-auto"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/dujka97"
                  title="My Facebook"
                >
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 58 58">
                    <path
                      fill="currentColor"
                      d="M28.347,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.625-11.023,24.625-24.623  C52.972,16.184,41.946,5.157,28.347,5.157z M34.864,29.679h-4.264c0,6.814,0,15.207,0,15.207h-6.32c0,0,0-8.307,0-15.207h-3.006  V24.31h3.006v-3.479c0-2.49,1.182-6.377,6.379-6.377l4.68,0.018v5.215c0,0-2.846,0-3.398,0c-0.555,0-1.34,0.277-1.34,1.461v3.163  h4.818L34.864,29.679z"
                    />
                  </svg>
                </a>
                <a
                  className="mx-auto"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/Dujka"
                  title="My Github"
                >
                  <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
            <div class="flex flex-col flex-grow w-full">
              <span class="font-bold uppercase mt-4 md:mt-0 mb-4">
                Footer header 3
              </span>
              <span class="my-2">
                <button class="text-blue-300  text-md hover:text-blue-200">
                  link 1
                </button>
              </span>
              <span class="my-2">
                <button class="text-blue-300  text-md hover:text-blue-200">
                  link 2
                </button>
              </span>
              <span class="my-2">
                <button class="text-blue-300  text-md hover:text-blue-200">
                  link 3
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-white flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm font-bold mb-2">© 2021 by Aleksandar Dujkić</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
