import React from "react";
import { motion } from "framer-motion";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[600px] w-[280px] sm:h-[640px] sm:w-[300px] shadow-2xl overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 w-32 bg-gray-800 mx-auto rounded-b-[1rem] z-50 flex justify-center items-center gap-2">
        <div className="w-10 h-1.5 bg-gray-900 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
      </div>
      
      {/* Screen container */}
      <div className="relative bg-white w-full h-full overflow-y-auto no-scrollbar rounded-[2rem]">
        {children}
      </div>
      
      {/* Side buttons */}
      <div className="absolute -left-[10px] top-[124px] h-8 w-[2px] bg-gray-800 rounded-l-lg"></div>
      <div className="absolute -left-[10px] top-[178px] h-12 w-[2px] bg-gray-800 rounded-l-lg"></div>
      <div className="absolute -left-[10px] top-[232px] h-12 w-[2px] bg-gray-800 rounded-l-lg"></div>
      <div className="absolute -right-[10px] top-[178px] h-16 w-[2px] bg-gray-800 rounded-r-lg"></div>
    </div>
  );
}
