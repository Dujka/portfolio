import React from "react";

function Footer() {
  return (
    <footer class="footer bg-gray-800 text-white relative pt-1 border-b-2 border-t shadow-2xl">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <span class="font-bold uppercase mb-2">Footer header 1</span>
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
            <div class="flex flex-col">
              <span class="font-bold uppercase mt-4 md:mt-0 mb-2">
                Footer header 2
              </span>
              <span class="my-2">
                <button class="text-blue-400 text-md hover:text-blue-300">
                  link 1
                </button>
              </span>
              <span class="my-2">
                <button class="text-blue-300 text-md hover:text-blue-200">
                  link 2
                </button>
              </span>
              <span class="my-2">
                <button class="text-blue-300 text-md hover:text-blue-2s00">
                  link 3
                </button>
              </span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold uppercase mt-4 md:mt-0 mb-2">
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
