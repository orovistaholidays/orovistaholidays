"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import StoryForm from '@/components/admin/StoryForm';
import { Loader2 } from 'lucide-react';

export default function EditStoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`/api/stories/${id}`);
        const data = await res.json();
        if (data.success) {
          setStory(data.data);
        }
      } catch (error) {
        console.error('Error fetching story:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchStory();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-black/20" />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <p className="text-black/40 font-bold uppercase tracking-widest text-[14px]">Story not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] py-20 px-6">
      <StoryForm initialData={story} isEdit={true} />
    </div>
  );
}
