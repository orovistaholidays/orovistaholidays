"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, MapPin, Clock, Loader2, LogOut, MessageSquare, Map as MapIcon, BookOpen, Star, Image as ImageIcon, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut } from 'next-auth/react';

interface Package {
  _id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
}

interface Story {
  _id: string;
  name: string;
  role: string;
  heading: string;
  rating: number;
  image: string;
}

interface Blog {
  _id: string;
  title: string;
  category: string;
  image: string;
  isFeatured: boolean;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'packages' | 'stories' | 'blogs' | 'gallery'>('packages');
  const [packages, setPackages] = useState<Package[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [gallery, setGallery] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [pkgRes, storyRes, blogRes, galleryRes] = await Promise.all([
        fetch('/api/packages'),
        fetch('/api/stories'),
        fetch('/api/blogs'),
        fetch('/api/gallery')
      ]);
      const pkgData = await pkgRes.json();
      const storyData = await storyRes.json();
      const blogData = await blogRes.json();
      const galleryData = await galleryRes.json();
      
      if (pkgData.success) setPackages(pkgData.data);
      if (storyData.success) setStories(storyData.data);
      if (blogData.success) setBlogs(blogData.data);
      if (galleryData.success) setGallery(galleryData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: string, type: 'packages' | 'stories' | 'blogs' | 'gallery') => {
    if (!confirm(`Are you sure you want to delete this ${type === 'gallery' ? 'item' : type.slice(0, -1)}?`)) return;

    try {
      const res = await fetch(`/api/${type}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        if (type === 'packages') setPackages(packages.filter(p => p._id !== id));
        else if (type === 'stories') setStories(stories.filter(s => s._id !== id));
        else if (type === 'blogs') setBlogs(blogs.filter(b => b._id !== id));
        else setGallery(gallery.filter(g => g._id !== id));
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-black/20" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-[42px] md:text-[64px] font-black uppercase tracking-tighter leading-none text-black">
              Admin <span className="text-black/20 italic">Panel.</span>
            </h1>
            <div className="flex flex-wrap gap-6 mt-8">
              <button 
                onClick={() => setActiveTab('packages')}
                className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'packages' ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
              >
                <MapIcon className="w-4 h-4" /> Journeys
              </button>
              <button 
                onClick={() => setActiveTab('stories')}
                className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'stories' ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
              >
                <MessageSquare className="w-4 h-4" /> Real Stories
              </button>
              <button 
                onClick={() => setActiveTab('blogs')}
                className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'blogs' ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
              >
                <BookOpen className="w-4 h-4" /> Journal
              </button>
              <button 
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'gallery' ? 'text-black' : 'text-black/20 hover:text-black/40'}`}
              >
                <ImageIcon className="w-4 h-4" /> Gallery
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
               onClick={() => signOut({ callbackUrl: '/login' })}
               className="p-4 bg-white rounded-full text-black hover:bg-red-500 hover:text-white transition-all shadow-sm border border-black/5"
            >
               <LogOut className="w-5 h-5" />
            </button>
            <Link 
               href={activeTab === 'packages' ? "/admin/add" : activeTab === 'stories' ? "/admin/stories/add" : activeTab === 'blogs' ? "/admin/blogs/add" : "/admin/gallery"}
               className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-black uppercase text-[11px] tracking-widest hover:bg-neutral-800 transition-all shadow-xl"
            >
               <Plus className="w-4 h-4" /> Add {activeTab === 'packages' ? 'Journey' : activeTab === 'stories' ? 'Story' : activeTab === 'blogs' ? 'Blog' : 'Gallery Item'}
            </Link>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === 'packages' ? (
            <motion.div key="packages" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div key={pkg._id} className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm group hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Link href={`/admin/edit/${pkg._id}`} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-black hover:bg-black hover:text-white transition-all shadow-lg">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button onClick={() => deleteItem(pkg._id, 'packages')} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4 text-[10px] font-black uppercase tracking-widest text-black/40">
                      <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-black" /> {pkg.location}</span>
                      <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-black" /> {pkg.duration}</span>
                    </div>
                    <h3 className="text-[22px] font-black uppercase tracking-tighter text-black leading-tight mb-6">{pkg.title}</h3>
                    <span className="text-[20px] font-black text-black">{pkg.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : activeTab === 'stories' ? (
            <motion.div key="stories" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => (
                <div key={story._id} className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm group hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-black/5">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-black uppercase tracking-tight text-black">{story.name}</h4>
                      <p className="text-[11px] font-bold text-black/30 uppercase tracking-widest italic">{story.role}</p>
                    </div>
                  </div>
                  <h3 className="text-[18px] font-black uppercase tracking-tighter text-black leading-tight mb-4 italic line-clamp-2">"{story.heading}"</h3>
                  <div className="flex justify-end gap-2 mt-8">
                    <Link href={`/admin/stories/edit/${story._id}`} className="p-3 bg-[#f8f6f4] rounded-full text-black hover:bg-black hover:text-white transition-all">
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button onClick={() => deleteItem(story._id, 'stories')} className="p-3 bg-[#f8f6f4] rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : activeTab === 'gallery' ? (
            <motion.div key="gallery" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((item) => (
                <div key={item._id} className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm group hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.type === 'video' ? item.thumbnail : item.url} alt={item.location} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-full">
                      {item.type === 'video' ? <Video className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button onClick={() => deleteItem(item._id, 'gallery')} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4 text-[10px] font-black uppercase tracking-widest text-black/40">
                      <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-black" /> {item.location}</span>
                    </div>
                    <h3 className="text-[18px] font-black uppercase tracking-tighter text-black leading-tight mb-2">{item.category}</h3>
                    <p className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">{item.span}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="blogs" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog._id} className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm group hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
                    {blog.isFeatured && (
                      <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase">Featured</div>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Link href={`/admin/blogs/edit/${blog._id}`} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-black hover:bg-black hover:text-white transition-all shadow-lg">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button onClick={() => deleteItem(blog._id, 'blogs')} className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40 block mb-3">{blog.category}</span>
                    <h3 className="text-[20px] font-black uppercase tracking-tighter text-black leading-tight mb-4">{blog.title}</h3>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
