"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import image from "../../../../assets/services-image.jpg";
import "aos/dist/aos.css";

// Food Types Data
const foodTypes = [
  {
    title: "Home-cooked Meals",
    subtitle: "Looking for freshly cooked meals?",
    description:
      "Get the best home-cooked meals made with love, directly delivered to your doorsteps. Fresh, healthy, and delicious.",
    aos: "fade-up",
  },
  {
    title: "Restaurant Meals",
    subtitle: "Craving restaurant-style food?",
    description:
      "Indulge in your favorite restaurant meals without leaving home. Order from a wide variety of cuisines and flavors.",
    aos: "fade-up",
  },
  {
    title: "Quick Snacks",
    subtitle: "Need a quick bite?",
    description:
      "Choose from a variety of quick and tasty snacks for when you're on the go. Perfect for a mid-day snack or a quick meal.",
    aos: "fade-up",
  },
];

export default function FoodTypes() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Food Categories</h2>
      <p className="text-lg text-gray-600 mt-2">
        Find the Best Meals to Satisfy Your Cravings
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {foodTypes.map((food, index) => (
          <Card key={index} className="shadow-lg p-6" data-aos={food.aos}>
            <CardContent className="flex flex-col items-center">
              <Image
                src={image}
                alt={food.title}
                width={300}
                height={150}
                className="rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{food.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{food.subtitle}</p>
              <p className="text-gray-700 mt-2 text-center">
                {food.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
