"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, Loader2, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PackageFormProps {
  initialData?: {
    _id?: string;
    title: string;
    location: string;
    duration: string;
    price: string;
    image: string;
    description: string;
  };
  isEdit?: boolean;
}

export default function PackageForm({ initialData, isEdit }: PackageFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    title: '',
    location: '',
    duration: '',
    price: '',
    image: '',
    description: '',
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
      const url = isEdit ? `/api/packages/${initialData?._id}` : '/api/packages';
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
          {isEdit ? 'Edit' : 'Create'} <span className="text-black/20 italic">Journey.</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Journey Title</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. The Dragon's Emerald Trail"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Location</label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. Vietnam"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Duration</label>
            <input
              type="text"
              required
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. 8 Days Expedition"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Price</label>
            <input
              type="text"
              required
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full bg-[#f8f6f4] border-none rounded-[20px] px-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
              placeholder="e.g. ₹1,25,000"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Description</label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-[#f8f6f4] border-none rounded-[24px] px-6 py-5 text-black font-medium leading-relaxed focus:ring-2 ring-black/5 outline-none transition-all"
            placeholder="Describe the elite experience..."
          />
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Visual Showcase</label>
          <div className="relative group">
            {formData.image ? (
              <div className="relative w-full h-[400px] rounded-[32px] overflow-hidden group">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: '' })}
                  className="absolute top-6 right-6 p-4 bg-white rounded-full text-black shadow-xl hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-[400px] border-2 border-dashed border-black/5 rounded-[32px] bg-[#f8f6f4] cursor-pointer hover:bg-[#f0edea] transition-all group">
                {uploading ? (
                  <Loader2 className="w-12 h-12 animate-spin text-black/20" />
                ) : (
                  <>
                    <div className="p-8 bg-white rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8 text-black" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-black/40">Drop high-res visuals here</span>
                    <span className="text-[10px] font-medium text-black/20 mt-2">JPG, PNG or WebP</span>
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
            <><Save className="w-5 h-5" /> {isEdit ? 'Update' : 'Publish'} Journey</>
          )}
        </button>
      </form>
    </div>
  );
}
