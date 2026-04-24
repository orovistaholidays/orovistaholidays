"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, Loader2, Save, ArrowLeft, Star } from 'lucide-react';
import Link from 'next/link';

interface StoryFormProps {
  initialData?: {
    _id?: string;
    quote: string;
    name: string;
    role: string;
    rating: number;
    image: string;
    heading: string;
  };
  isEdit?: boolean;
}

export default function StoryForm({ initialData, isEdit }: StoryFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    quote: '',
    name: '',
    role: '',
    rating: 5,
    image: '',
    heading: '',
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setFormData({ ...formData, image: result.url });
      } else {
        alert('Upload failed: ' + result.error);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEdit ? `/api/stories/${initialData?._id}` : '/api/stories';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        const error = await res.json();
        alert('Error: ' + error.error);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Submit failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 font-sans bg-white rounded-[40px] shadow-2xl border border-black/5">
      <div className="flex items-center gap-6 mb-12">
        <Link href="/admin" className="p-4 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h2 className="text-[32px] md:text-[48px] font-black uppercase tracking-tighter text-black">
          {isEdit ? 'Edit' : 'Create'} <span className="text-black/20 italic">Story.</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Author Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. Arjun Rai"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Role / Title</label>
            <input
              type="text"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. Adventure Enthusiast"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Headline</label>
            <input
              type="text"
              required
              value={formData.heading}
              onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. The experience was seamless..."
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Testimonial Quote</label>
          <textarea
            required
            rows={4}
            value={formData.quote}
            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
            className="w-full bg-[#f8f6f4] border-none rounded-[24px] px-6 py-5 text-black font-medium leading-relaxed focus:ring-2 ring-black/5 outline-none transition-all"
            placeholder="Share the full experience..."
          />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Rating</label>
          <div className="flex gap-4 p-6 bg-[#f8f6f4] rounded-[24px] w-fit">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                className={`transition-all ${formData.rating >= star ? 'text-black scale-110' : 'text-black/10 hover:text-black/30'}`}
              >
                <Star className={`w-8 h-8 ${formData.rating >= star ? 'fill-current' : ''}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Author Portrait</label>
          <div className="relative group max-w-sm">
            {formData.image ? (
              <div className="relative w-48 h-48 rounded-full overflow-hidden group">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: '' })}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-48 h-48 border-2 border-dashed border-black/5 rounded-full bg-[#f8f6f4] cursor-pointer hover:bg-[#f0edea] transition-all group">
                {uploading ? (
                  <Loader2 className="w-8 h-8 animate-spin text-black/20" />
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-black/40 group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/40 mt-3">Upload Photo</span>
                  </>
                )}
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
              </label>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || uploading || !formData.image}
          className="w-full bg-black text-white py-6 rounded-full font-black uppercase text-[12px] tracking-widest hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 transition-all shadow-2xl flex items-center justify-center gap-4 mt-12"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <><Save className="w-5 h-5" /> {isEdit ? 'Update' : 'Publish'} Story</>
          )}
        </button>
      </form>
    </div>
  );
}
