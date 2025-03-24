"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I find a meal?",
      answer:
        "You can search for meals based on menus, location, and dietary preferences. Simply browse through our listings and order what suits your taste!",
    },
    {
      question: "How do I order food?",
      answer:
        "Simply log in to your account, select the meal you want, and place your order. We ensure a seamless ordering experience!",
    },
    {
      question: "Are the meals fresh and verified?",
      answer:
        "Yes, we ensure all meals are freshly prepared and verified by our quality control team before listing.",
    },
    {
      question: "Can I schedule a meal delivery?",
      answer:
        "Absolutely! You can schedule your meal delivery at a time that works best for you.",
    },
    {
      question: "Is there any membership fee?",
      answer:
        "No, registration is completely free for users. However, premium members get additional discounts and benefits!",
    },
  ];

  return (
    <div className="p-8 min-h-screen">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Find answers to common questions about our platform.
        </p>
      </div>

      <div className="w-full md:w-2/3 mx-auto">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="flex cursor-pointer justify-between items-center w-full py-4 text-left focus:outline-none text-lg font-medium"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="text-green-500"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-500 pb-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
