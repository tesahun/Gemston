import Hero from "@components/Hero";
import MyForm from "@components/MyForm";
import OurProducts from "@components/OurProducts";
import WhatOfer from "@components/WhatOfer";
import Faq from "@components/Faq";
import Logos from "@components/Logos";
import Footer from "@components/Footer";

const Page = () => {
  return (
    <div>
      <Hero />
      <OurProducts />
      <MyForm />
      <Logos />
      <Faq />
      <WhatOfer />
      <Footer />
    </div>
  );
};

export default Page;
