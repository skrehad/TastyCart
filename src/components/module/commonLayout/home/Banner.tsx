"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
import image from "../../../../assets/banner.jpg";

// import Swiper styles
import "swiper/css";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const meals = [
    { type: "Lunch" },
    { type: "Dinner" },
    { type: "Fast Food" },
    { type: "Healthy Meal" },
    { type: "Desserts" },
    { type: "Beverages" },
    { type: "Vegan" },
  ];

  return (
    <div className=" mx-auto px-6 lg:py-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-center md:text-left" data-aos="fade-right">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 mt-10 lg:mt-0">
            Best Meal Selling Platform
          </h1>
          <p className="text-lg text-gray-600 mb-8 tracking-wide">
            Get Fresh & Healthy Meals Delivered to Your Doorstep
          </p>

          <Button className="text-lg cursor-pointer px-8 py-4 text-white font-semibold rounded-full shadow-md transition-all">
            Order Now
          </Button>
        </div>

        {/* Image Section */}
        <div
          className="w-full relative aspect-video rounded-xl overflow-hidden"
          data-aos="fade-left"
        >
          <Image
            src={image}
            alt="Meal illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Marquee Section */}
      <div className="my-5">
        <Marquee pauseOnHover={true} gradient={false} speed={80}>
          <div className="flex space-x-4">
            {meals.map((meal, index) => (
              <div
                key={meal.type}
                className="bg-white p-4 cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 max-w-[200px] w-full text-center"
                data-aos-delay={index * 200}
              >
                <h3 className="text-xl mt-2 font-semibold text-gray-800 text-center">
                  {meal.type}
                </h3>
                <span className="text-gray-500 text-sm text-center">
                  Available Now
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
