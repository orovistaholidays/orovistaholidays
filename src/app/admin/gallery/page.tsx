"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Image as ImageIcon, Video, MapPin, Tag, Upload, Loader2, X } from "lucide-react";

export default function AdminGallery() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [formData, setFormData] = useState({
    type: "image",
    url: "",
    thumbnail: "",
    location: "",
    category: "",
    span: "md:col-span-1 md:row-span-1"
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch (error) {
      alert("Failed to fetch gallery");
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setFormData({ ...formData, url: result.url });
        alert('File uploaded to Cloudinary');
      } else {
        alert('Upload failed: ' + result.error);
      }
    } catch (error) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.url) {
      alert("Please upload a file or provide a URL");
      return;
    }
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Item added successfully");
        setShowModal(false);
        setFormData({ type: "image", url: "", thumbnail: "", location: "", category: "", span: "md:col-span-1 md:row-span-1" });
        fetchItems();
      }
    } catch (error) {
      alert("Failed to add item");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/gallery/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        alert("Item deleted");
        fetchItems();
      }
    } catch (error) {
      alert("Failed to delete");
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Gallery Management</h1>
          <p className="text-gray-500 text-sm">Manage photos and videos in the tour gallery</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-neutral-800 transition-all text-sm font-bold"
        >
          <Plus className="w-4 h-4" /> Add New Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item._id} className="bg-white border rounded-[32px] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-square relative overflow-hidden">
              {item.type === 'video' ? (
                <div className="w-full h-full relative">
                   <img src={item.thumbnail || "https://placehold.co/400x400?text=Video+Thumbnail"} className="w-full h-full object-cover" alt="" />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Video className="w-10 h-10 text-white opacity-80" />
                   </div>
                </div>
              ) : (
                <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" alt="" />
              )}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white p-2 rounded-full border border-white/10">
                {item.type === 'video' ? <Video className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
              </div>
              <button 
                onClick={() => handleDelete(item._id)}
                className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:bg-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/30 mb-2">
                <MapPin className="w-3 h-3" /> {item.location}
              </div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-tight text-black">
                <Tag className="w-3 h-3 text-primary" /> {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[600] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[40px] w-full max-w-lg p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Add Gallery Item</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 block px-2">Content Type</label>
                <div className="flex gap-4">
                   {['image', 'video'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({...formData, type: t})}
                        className={`flex-grow py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${formData.type === t ? 'bg-black text-white border-black' : 'bg-white text-black/40 border-black/10 hover:border-black/30'}`}
                      >
                         {t === 'image' ? 'Photo' : 'Video'}
                      </button>
                   ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 block px-2">Upload Visual</label>
                {formData.url ? (
                   <div className="relative aspect-video rounded-3xl overflow-hidden border border-black/5 bg-neutral-50 group">
                      {formData.type === 'video' ? (
                         <video src={formData.url} className="w-full h-full object-cover" muted />
                      ) : (
                         <img src={formData.url} className="w-full h-full object-cover" alt="Preview" />
                      )}
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, url: ""})}
                        className="absolute top-4 right-4 p-2 bg-white rounded-full text-red-500 shadow-xl opacity-0 group-hover:opacity-100 transition-all"
                      >
                         <X className="w-4 h-4" />
                      </button>
                   </div>
                ) : (
                   <label className="flex flex-col items-center justify-center w-full aspect-video border-2 border-dashed border-black/5 rounded-[32px] bg-[#f8f6f4] cursor-pointer hover:bg-[#f0edea] transition-all group">
                      {uploading ? (
                         <Loader2 className="w-10 h-10 animate-spin text-black/20" />
                      ) : (
                         <>
                            <div className="p-5 bg-white rounded-full shadow-lg mb-4 group-hover:scale-110 transition-transform">
                               <Upload className="w-6 h-6 text-black" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Upload {formData.type}</span>
                         </>
                      )}
                      <input type="file" className="hidden" accept={formData.type === 'video' ? "video/*" : "image/*"} onChange={handleUpload} disabled={uploading} />
                   </label>
                )}
              </div>

              {formData.type === 'video' && !formData.url && (
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 block px-2">Or Paste Video URL</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#f8f6f4] rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 ring-black/5 outline-none transition-all"
                    placeholder="https://..."
                    value={formData.url}
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 block px-2">Location</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#f8f6f4] rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 ring-black/5 outline-none transition-all"
                    placeholder="e.g. Maldives"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 block px-2">Category</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#f8f6f4] rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 ring-black/5 outline-none transition-all"
                    placeholder="e.g. Luxury"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-3 block px-2">Grid Span (Desktop)</label>
                <select 
                  className="w-full bg-[#f8f6f4] rounded-2xl px-6 py-4 text-sm font-bold outline-none cursor-pointer"
                  value={formData.span}
                  onChange={(e) => setFormData({...formData, span: e.target.value})}
                >
                  <option value="md:col-span-1 md:row-span-1">Standard (1x1)</option>
                  <option value="md:col-span-2 md:row-span-2">Large Square (2x2)</option>
                  <option value="md:col-span-2 md:row-span-1">Wide (2x1)</option>
                  <option value="md:col-span-1 md:row-span-2">Tall (1x2)</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="submit"
                  disabled={uploading || !formData.url}
                  className="flex-grow bg-black text-white py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-neutral-800 transition-all shadow-xl disabled:bg-neutral-200"
                >
                  Add to Gallery
                </button>
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-8 border border-black/10 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-neutral-50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
