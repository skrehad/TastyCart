"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for smooth transitions

const faqs = [
  {
    category: "Food & Recipes",
    questions: [
      {
        q: "What types of cuisines do you offer?",
        a: "We offer a variety of cuisines, including Italian, Asian, American, and more.",
      },
      {
        q: "How can I order food?",
        a: "You can order food directly from our website by browsing the menu and selecting your items.",
      },
      {
        q: "Do you offer vegetarian or vegan options?",
        a: "Yes, we have a wide range of vegetarian and vegan options for every preference.",
      },
      {
        q: "Can I customize my order?",
        a: "Yes, we allow customization of most menu items to suit your preferences.",
      },
      {
        q: "Are the ingredients fresh?",
        a: "We only use the freshest ingredients to ensure top-quality meals.",
      },
      {
        q: "Do you offer meal prep services?",
        a: "Yes, we offer meal prep options for a healthier and more convenient lifestyle.",
      },
    ],
  },
  {
    category: "Ordering & Delivery",
    questions: [
      {
        q: "How do I track my order?",
        a: "Once your order is confirmed, you will receive a tracking number to monitor its status.",
      },
      {
        q: "Is delivery available in my area?",
        a: "We provide delivery across most major areas. You can check if your location is eligible during checkout.",
      },
      {
        q: "Can I schedule a delivery?",
        a: "Yes, you can schedule your delivery for a future time that suits you.",
      },
      {
        q: "Do you offer contactless delivery?",
        a: "Yes, we offer contactless delivery to ensure safety and convenience.",
      },
    ],
  },
  {
    category: "Payments & Account Management",
    questions: [
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit cards, PayPal, and other online payment methods.",
      },
      {
        q: "Can I save my payment information for faster checkout?",
        a: "Yes, you can securely save your payment information for quicker orders.",
      },
      {
        q: "How do I create an account?",
        a: "Simply click 'Sign Up' and follow the instructions to create an account for faster checkout and order tracking.",
      },
      {
        q: "Can I update my account information?",
        a: "Yes, you can update your personal and payment information from your account settings.",
      },
    ],
  },
];

const FAQPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-10 w-full lg:w-2/3">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-6">
        {faqs.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-6 cursor-pointer py-2 mx-2 text-lg font-medium ${
              selectedTab === index ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* FAQ Content */}
      <div className="space-y-4 ">
        {faqs[selectedTab].questions.map((item, qIndex) => {
          const isOpen = openIndex === qIndex;
          return (
            <motion.div
              key={qIndex}
              className="border rounded-lg p-4 bg-white shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => toggleQuestion(qIndex)}
                className="w-full flex cursor-pointer justify-between text-left font-medium text-lg"
              >
                {item.q}
                <span className="text-green-500 font-bold text-xl">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
              <motion.div
                initial={{ maxHeight: 0, opacity: 0, scaleY: 0 }}
                animate={{
                  maxHeight: isOpen ? "200px" : "0", // Adjust maxHeight value
                  opacity: isOpen ? 1 : 0,
                  scaleY: isOpen ? 1 : 0, // Adding scaleY for smooth expansion
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {isOpen && <p className="mt-2 text-gray-600">{item.a}</p>}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQPage;
