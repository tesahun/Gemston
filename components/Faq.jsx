"use client";

import Accord from "@components/Accord";
import { useState } from "react";

const Asked = () => {
  const [list, setList] = useState([
    {
      question: " What is Galgalu Gemstone Exporters ?",
      answer:
        "Galgalu Gemstone Exporters is a reputable company based in Ethiopia specializing in the export of high-quality gemstones.",
    },
    {
      question: "Are Galgalu gemstones ethically sourced ?",
      answer:
        "Yes, ethical practices are at the core of our business. Galgalu Gemstone Exporters is committed to responsible and sustainable sourcing.",
    },
    {
      question: " How can I purchase gemstones from Galgalu ?",
      answer:
        "To purchase gemstones from Galgalu, you can explore our online catalog on our website. and contact us with a contact from.",
    },
    {
      question: "Do you offer certifications for your gemstones ?",
      answer:
        "Yes, we provide certification for our gemstones, verifying their authenticity and quality.",
    },
  ]);

  return (
    <div id="faq" className="h-full w-full bg-slate-500 flex flex-col items-center justify-center overflow-hidden">
      <div className="mt-10">
        <h1 className="text-center">Frequently Asked Questions</h1>
      </div>
      <div className="mt-5 mb-10">
        {list.map((item, key) => (
          <Accord key={key} datas={item} />
        ))}
      </div>
    </div>
  );
};

export default Asked;
