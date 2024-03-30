import React from 'react';

export default function About () {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">

            

              Hello everyone,

              I'm Om Prakash, a final-year engineering student with a passion for development and the software field. From the intricacies of coding to the thrill of problem-solving, I find joy in every aspect of software development. Throughout my academic journey, I've been driven by a relentless curiosity to explore new technologies and a determination to contribute meaningfully to the ever-evolving landscape of technology.
            </p>
            {/* <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
