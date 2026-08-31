import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getBlogs, getBlogBySlug } from "@/app/actions/blogs";

// Generate static routes for all seeded blogs at build time
export async function generateStaticParams() {
  try {
    const items = await getBlogs();
    if (items && items.length > 0) {
      return items.map((blog) => ({
        slug: blog.slug,
      }));
    }
  } catch (error) {
    console.warn("generateStaticParams for blogs: DB connection failed.");
  }
  return [];
}

interface BlogPageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export const dynamic = "force-dynamic";

export default async function BlogDetailsPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs & Back Button */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-xs font-sans text-slate-400">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#blog" className="hover:text-secondary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px] sm:max-w-xs">{blog.title}</span>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-200 text-slate-600 font-semibold text-xs py-2 px-3.5 cursor-pointer">
              <ArrowLeft className="h-4 w-4" />
              <span>Back Home</span>
            </Button>
          </Link>
        </div>

        {/* Blog Post Card */}
        <Card className="p-0 overflow-hidden border border-slate-200/60 shadow-md bg-white rounded-3xl">
          
          {/* Main Large Image */}
          <div className="aspect-[21/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100 relative">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content Area */}
          <div className="p-6 sm:p-10">
            
            {/* Meta details header */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-slate-400 border-b border-slate-100 pb-6 mb-8">
              <span className="bg-secondary/10 border border-secondary/15 text-secondary text-[10px] font-display font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-slate-400" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-slate-400" />
                <span>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", { 
                    month: "long", 
                    day: "numeric", 
                    year: "numeric" 
                  })}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-primary leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Excerpt Summary */}
            <p className="font-sans text-base text-slate-500 italic border-l-4 border-secondary/35 pl-4 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Content Body */}
            <div 
              className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed space-y-6 
                         [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-slate-100 [&_h2]:pb-2
                         [&_p]:font-sans [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4
                         [&_strong]:font-semibold [&_strong]:text-primary"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

          </div>

        </Card>

      </div>
    </div>
  );
}
