import React from "react";
import Carousel from "./Carousel";
import { RiLightbulbFlashLine } from "react-icons/ri";

function Workshops() {
  const workshopinfo1 = {
    description:
      "In our Art & Craft Workshop, students explore their creativity using a variety of materials like paper, paints, and clay. It's a hands-on experience where imagination comes to life!",
  };
  const workshopinfo2 = {
    description:
      "The Science Explorers Workshop gives students the chance to try fun experiments and learn about the world around them through exciting hands-on activities.",
  };
  const workshopinfo3 = {
    description:
      "In our Storytelling & Drama Workshop, children build confidence and communication skills by performing short skits, reading aloud, and expressing themselves creatively.",
  };
  const Headings = {
    heading1: "Art & Craft",
    heading2: "Science Explorers",
    heading3: "Storytelling & Drama",
  };
  const items1 = [
    {
      icon: "/images/Art1.jpg",
    },
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/art-2697950_960_720.jpg",
    },
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/art-2697951_960_720.jpg",
    },
  ];
  const items2 = [
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/science-2697952_960_720.jpg",
    },
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/science-2697953_960_720.jpg",
    },
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/science-2697954_960_720.jpg",
    },
  ];
  const items3 = [
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/storytelling-2697955_960_720.jpg",
    },
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/storytelling-2697956_960_720.jpg",
    },
    {
      icon: "https://cdn.pixabay.com/photo/2017/08/30/00/21/storytelling-2697957_960_720.jpg",
    },
  ];

  return (
    <div className="mx-3 my-1 py-16">
      <div className="flex items-center justify-center mb-4">
        <RiLightbulbFlashLine size={30} className="mr-2" />
        <h2 className="text-2xl uppercase font-bold text-gray-800">
          School Workshops
        </h2>
      </div>
      <div className="flex justify-center w-full gap-2 items-center">
        <Carousel
          items={items1}
          description={workshopinfo1.description}
          heading={Headings.heading1}
        />
        <Carousel
          items={items2}
          description={workshopinfo2.description}
          heading={Headings.heading2}
        />
        <Carousel
          items={items3}
          description={workshopinfo3.description}
          heading={Headings.heading3}
        />
      </div>
    </div>
  );
}

export default Workshops;
