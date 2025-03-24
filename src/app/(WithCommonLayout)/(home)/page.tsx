// "use client";

import Banner from "@/components/module/commonLayout/home/Banner";
import FAQSection from "@/components/module/commonLayout/home/FAQSection";
import FoodTypes from "@/components/module/commonLayout/home/FoodTypes";
import MealSellingJobs from "@/components/module/commonLayout/home/MealSellingJobs";

// import { useUser } from "@/context/UserContext";

const HomePage = () => {
  // const user = useUser();

  return (
    <div className="">
      <Banner />
      <MealSellingJobs />
      <FoodTypes />
      <FAQSection />
    </div>
  );
};

export default HomePage;
