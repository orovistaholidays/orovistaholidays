import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { ArrowLeft, Calendar, User, Tag, Edit } from "lucide-react";
import { notFound } from "next/navigation";

import "@/app/journal/journal.css";

import ShareButtons from "@/components/blog/ShareButtons";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  await dbConnect();
  const blog = await Blog.findById(id);
  
  if (!blog) return { title: "Post Not Found" };

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: `${blog.title} | Orovista Journal`,
      description: blog.description,
      images: [blog.image],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const isAdmin = (session?.user as any)?.role === 'admin';
  
  await dbConnect();
  const blog = await Blog.findById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar isSolid={true} />
      
      <main className="flex-grow pt-24 md:pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Top Actions */}
          <div className="flex justify-between items-center mb-12">
            <Link 
              href="/#journal" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/40 hover:text-black transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Journal
            </Link>

            {isAdmin && (
              <Link 
                href={`/admin/blogs/edit/${id}`}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-neutral-800 transition-all shadow-xl"
              >
                <Edit className="w-3.5 h-3.5" /> Edit Article
              </Link>
            )}
          </div>

          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                {blog.category}
              </span>
              <span className="text-black/20 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                <Calendar className="w-3 h-3" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            <h1 className="text-[28px] md:text-[42px] lg:text-[56px] font-black uppercase tracking-tighter leading-[1.1] text-black mb-8">
              {blog.title}
            </h1>
            
            <p className="text-[16px] md:text-[20px] lg:text-[24px] font-medium text-black/60 leading-relaxed italic border-l-4 border-black/10 pl-6 md:pl-8 py-2">
              {blog.description}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] md:rounded-[48px] overflow-hidden mb-12 md:mb-20 shadow-2xl">
            <Image 
              src={blog.image} 
              alt={blog.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <article className="max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: String(blog.content || '') }}
              className="blog-content text-[18px] md:text-[20px] leading-[1.8] text-black/80 font-medium"
            />
          </article>

          {/* Footer Info */}
          <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center">
                  <User className="w-6 h-6 text-black/20" />
               </div>
               <div>
                  <span className="text-[10px] font-black text-black/20 uppercase tracking-widest block">Written By</span>
                  <span className="text-[14px] font-black uppercase text-black">Orovista Specialist</span>
               </div>
            </div>
            
            <ShareButtons title={blog.title} />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
