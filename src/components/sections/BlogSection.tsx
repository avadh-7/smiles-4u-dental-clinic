"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { ScrollReveal } from "../ui/ScrollReveal";

interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  readTime: string;
  createdAt: string;
}

interface BlogSectionProps {
  blogs: BlogItem[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({ blogs }) => {
  const displayedBlogs = blogs.slice(0, 3); // Display top 3 blogs on Home page

  if (displayedBlogs.length === 0) return null;

  return (
    <section id="blog" className="py-12 md:py-20 bg-slate-50 border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 border border-secondary/15 rounded-full text-xs font-display font-semibold tracking-wider text-secondary uppercase mb-4 animate-pulse">
              <BookOpen className="h-4.5 w-4.5" />
              <span>Dental Education</span>
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary leading-tight">
              Latest Oral Care Insights & Blogs
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="font-sans text-sm md:text-base text-slate-500 leading-relaxed mt-4">
              Read helpful advice, hygiene checklists, and professional guides from our dental team to protect your family&apos;s smiles every day.
            </p>
          </ScrollReveal>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
          {displayedBlogs.map((blog, idx) => (
            <ScrollReveal key={blog.id} delay={0.1 * (idx + 1)} yOffset={30}>
              <Card className="p-0 overflow-hidden flex flex-col justify-between h-full border border-slate-200/60 shadow-sm bg-white hover:shadow-md transition-all duration-300 group">
                <div>
                  {/* Image Aspect ratio */}
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-display font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                  
                  {/* Text Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-sans mb-3">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString("en-US", { 
                          month: "short", 
                          day: "numeric", 
                          year: "numeric" 
                        })}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-bold text-primary text-lg md:text-xl leading-snug line-clamp-2 group-hover:text-secondary transition-colors duration-200">
                      {blog.title}
                    </h3>
                    
                    <p className="font-sans text-slate-500 text-sm mt-3 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Link */}
                <div className="p-6 pt-0 mt-auto border-t border-slate-50">
                  <Link 
                    href={`/blog/${blog.slug}`} 
                    className="inline-flex items-center gap-2 text-sm font-sans font-bold text-secondary hover:text-secondary-hover transition-colors duration-200"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <ScrollReveal delay={0.2} yOffset={15}>
            <Link href="/blog">
              <Button variant="secondary" size="lg">
                View All Articles
              </Button>
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
export default BlogSection;
