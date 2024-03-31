import React from "react";

const Hero = ({ source = null }) => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>

          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
      {/* bg-gradient-to-br from-indigo-100 via-blue-100 to-gray-100*/}
      <section
        className={`text-gray-600 body-font ${
          source === "how it works"
            ? "bg-gradient-to-br from-indigo-100 via-blue-100 to-gray-100"
            : "bg-gradient-to-br from-indigo-200 via-blue-200 to-gray-200"
        }`}
      >
        <div class="container px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
            Master Cleanse Reliac Heirloom
          </h1>
          <div class="flex flex-wrap -mx-4 -mb-10 mt-5 text-center justify-center">
            <div class="sm:w-1/4 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Buy YouTube Videos
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <div class="sm:w-1/4 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1202x502"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <div class="sm:w-1/4 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1202x502"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/460x500"
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <ul className="list-disc pl-4">
                  <li class="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                  <li class="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <ul className="list-disc pl-4">
                  <li class="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                  <li class="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <ul className="list-disc pl-4">
                  <li class="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                  <li class="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
