"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import image from "../../../../assets/banner2.jpg";
import "aos/dist/aos.css";

export default function MealSellingJobs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full px-4 mb-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Image */}
        <div
          className="relative w-full flex justify-center"
          data-aos="fade-right"
        >
          <Image
            src={image}
            alt="Meal Selling Illustration"
            width={500}
            height={300}
            className="w-full max-w-md object-cover rounded-lg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-900">
            FIND DELICIOUS MEALS
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Order Fresh & Healthy Meals Near You
          </p>

          <p className="mt-4 text-gray-700">
            Looking for a tasty food experience? If delicious meals excite you,
            then you are in the right place. We offer
            <span className="font-bold"> 500+ </span> varieties of home-cooked
            and restaurant meals. Whether you want healthy options or fast food,
            we have something for everyone!
          </p>

          <div className="mt-6" data-aos="zoom-in">
            <Button className="cursor-pointer text-white px-6 py-3 text-lg font-medium">
              🍽️ ORDER NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
