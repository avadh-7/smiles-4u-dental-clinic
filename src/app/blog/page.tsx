import React from "react";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getBlogs } from "@/app/actions/blogs";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section 
        className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-cover bg-center overflow-hidden border-b border-slate-200/40"
        style={{ backgroundImage: "url('/gallery_bg.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto p-8 md:p-10 bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm text-center relative z-10">
            <ScrollReveal yOffset={15}>
              <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full text-xs font-display font-bold tracking-wider text-secondary uppercase mb-4 animate-pulse">
                <BookOpen className="h-4 w-4" />
                <span>Dental Education</span>
              </span>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.1}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary tracking-tight">
                Clinic Blogs & Articles
              </h1>
            </ScrollReveal>
            <ScrollReveal yOffset={15} delay={0.2}>
              <p className="font-sans text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4">
                Explore helpful articles, hygiene checklists, and professional advice from Dr. Millin D. Desai and our clinical specialists.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Blog Posts Grid List */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Link */}
          <div className="mb-10 flex items-center justify-between">
            <Link href="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-200 text-slate-600 font-semibold text-xs py-2 px-3.5 cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                <span>Back Home</span>
              </Button>
            </Link>
            <span className="text-slate-400 text-xs font-sans">
              Showing {blogs.length} articles
            </span>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-20 bg-white border border-slate-200/60 rounded-3xl p-8 max-w-md mx-auto shadow-sm">
              <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-primary mb-2">No Articles Found</h3>
              <p className="font-sans text-slate-500 text-sm leading-relaxed">
                We are currently authoring fresh articles. Check back soon for oral hygiene tips and guides!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, idx) => (
                <ScrollReveal key={blog.id} delay={0.05 * (idx + 1)} yOffset={30}>
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
          )}

        </div>
      </section>
    </div>
  );
}
