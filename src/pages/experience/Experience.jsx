import React from "react";
React;
export default function Experience() {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      desc: "Web-development using JavaScript through React , NodeJS , Tailwinds , Material UI , Post CSS",
      company: "Knowledge lab [ KLab]",
      time: "From 2023 December To 2024 March",
    },
    {
      title: "GRAPHICAL DESIGNS",
      desc: "Graphic design using software used to create Graphical cards and Logos and Flyers",
      company: "KIAC [Kigali International Art College]",
      time: "From Aug 2023 To March 2024",
    },

    {
      title: "COMPUTER MAINTENANCES",
      desc: "Construct and Maintain computer system or OS to better perfomance and better execute, also add some drivers.",
      company: "GS Kigeme A",
      time: "From Jan 2020 To Aug 2022",
    },

    {
      title: "PROGRAMMING",
      desc: "I also know more various programming languages like JAVA , C++",
      company: "GS Kigeme A",
      time: "From Jan 2020 To Aug 2022",
    },

    {
      title: "PROGRAMMING",
      desc: "I also know more various programming languages like JAVA, JavaScript , PHP*( web development)",
      company: "KIAC [Kigali International Art College]",
      time: "From Aug 2023 To March 2024",
    },
  ];
  return (
    <>
      <div className="py-10 min-h-screen flex items-center justify-center bg-black dark:text-white text-white">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mx-auto mb-10 max-w-lg">
            <h5 className="inline-block text-primary uppercase border-b-4 border-primary">
              SKILLS
            </h5>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                {/* Title & Description */}
                <h4 className="text-xl font-semibold text-black mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
                <h2 className="text-center text-blue-300 font-bold">{service.company}</h2>
                <p className="text-left text-black">{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
