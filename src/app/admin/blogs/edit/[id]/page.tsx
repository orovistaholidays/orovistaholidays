"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';
import { Loader2 } from 'lucide-react';

export default function EditBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`, { cache: 'no-store' });
        const data = await res.json();
        if (data.success) {
          setBlog(data.data);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-black/20" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <p className="text-black/40 font-bold uppercase tracking-widest text-[14px]">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] py-20 px-6">
      <BlogForm initialData={blog} isEdit={true} />
    </div>
  );
}
