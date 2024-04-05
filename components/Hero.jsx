import React from "react";
import Image from "next/image";

const Hero = ({ source = null }) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven&apos;t heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>

          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
      {/* bg-gradient-to-br from-indigo-100 via-blue-100 to-gray-100*/}
      <section
        className={`text-gray-600 body-font ${
          source === "how it works"
            ? "bg-gradient-to-br from-indigo-100 via-blue-100 to-gray-100"
            : "bg-gradient-to-br from-black via-indigo-500 to-black"
        }`}
      >
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center">
            Master Cleanse Reliac Heirloom
          </h1>
          <div className="flex flex-wrap -mx-4 -mb-10 mt-5 text-center justify-center">
            <div className="sm:w-1/4 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={"https://ik.imagekit.io/swapnilbhabal/hero-1.jpg?updatedAt=1712322522798"}
                  width={1201}
                  height={501}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                Buy YouTube Videos
              </h2>
              <p className="leading-relaxed text-gray-200">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <div className="sm:w-1/4 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={"https://ik.imagekit.io/swapnilbhabal/hero-2.jpg?updatedAt=1712322504046"}
                  width={1202}
                  height={502}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-gray-200">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
            <div className="sm:w-1/4 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={"https://ik.imagekit.io/swapnilbhabal/hero-3.jpg?updatedAt=1712322512073"}
                  width={1202}
                  height={502}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-gray-200">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col justify-center items-center md:flex-row md:items-center">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <Image
              alt="feature"
              className="object-cover w-full h-650px lg:w-[500px] h-[650px]  rounded-lg"
              src={"https://ik.imagekit.io/swapnilbhabal/nature-vertical.jpg?updatedAt=1712322522082"}
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <ul className="list-disc pl-4">
                  <li className="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                  <li className="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <ul className="list-disc pl-4">
                  <li className="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                  <li className="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  The Catalyzer
                </h2>
                <ul className="list-disc pl-4">
                  <li className="text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </li>
                  <li className="text-base">
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
