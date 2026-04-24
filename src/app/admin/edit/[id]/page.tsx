"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PackageForm from '@/components/admin/PackageForm';
import { Loader2 } from 'lucide-react';

export default function EditPackagePage() {
  const { id } = useParams();
  const [pkg, setPkg] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await fetch(`/api/packages/${id}`);
        const data = await res.json();
        if (data.success) {
          setPkg(data.data);
        }
      } catch (error) {
        console.error('Error fetching package:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPackage();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-black/20" />
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center">
        <p className="text-black/40 font-bold uppercase tracking-widest text-[14px]">Journey not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] py-20 px-6">
      <PackageForm initialData={pkg} isEdit={true} />
    </div>
  );
}
