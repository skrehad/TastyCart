"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import image1 from "../../../assets/pasta.jpg";
import image2 from "../../../assets/meal-prep.jpg";
import image3 from "../../../assets/street-food.jpg";
import image4 from "../../../assets/smoothie.jpg";
import image5 from "../../../assets/dessert.jpg";
import image6 from "../../../assets/vegan.jpg";

const blogPosts = [
  {
    title: "Delicious Homemade Meals",
    description:
      "Explore the world of home-cooked meals that will leave you craving for more.",
    image: image1,
  },
  {
    title: "Healthy Meal Prep Ideas",
    description:
      "Meal prep is a great way to eat healthy without spending too much time in the kitchen.",
    image: image2,
  },
  {
    title: "Street Food Adventures",
    description: "From spicy to sweet, discover new tastes every day.",
    image: image3,
  },
  {
    title: "Best Homemade Desserts",
    description:
      "Indulge in these easy and mouthwatering homemade dessert recipes.",
    image: image4,
  },
  {
    title: "Healthy Smoothie Recipes",
    description: "Healthy but also delicious and refreshing.",
    image: image5,
  },
  {
    title: "Exploring Vegan Meals",
    description: "A guide to delicious and nutritious vegan meals.",
    image: image6,
  },
];

const BlogPage = () => {
  return (
    <div className="w-full py-16 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Food Blog</h2>
        <p className="text-lg text-gray-600 mt-2">
          Dive into the world of delicious food with our latest blogs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-grow flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{post.description}</p>
              <Button className="mt-4 cursor-pointer text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600">
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
