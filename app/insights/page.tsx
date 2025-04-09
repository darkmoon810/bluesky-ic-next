"use client"
import { ArticlesSection } from "./sections/ArticlesSection/ArticlesSection";
import { HeroSection } from "./sections/HeroSection";

export default function Insight () {

  return (
    <div className="flex flex-col w-full items-start relative">
      {/* Hero Section */}
      <HeroSection />
      {/* Blog Posts Section */}
      <ArticlesSection />
    </div>
  );
};
