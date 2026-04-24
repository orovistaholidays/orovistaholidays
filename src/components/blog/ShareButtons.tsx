"use client";

import { Twitter, Facebook, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "X",
      icon: <Twitter className="w-4 h-4" />,
      url: (url: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      url: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      url: (url: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  const handleShare = (shareFn: (url: string) => string) => {
    const url = window.location.href;
    window.open(shareFn(url), "_blank", "width=600,height=400");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
      <span className="text-[10px] font-black text-black/20 uppercase tracking-widest whitespace-nowrap">Share this Story</span>
      <div className="flex flex-wrap gap-2">
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link.url)}
            className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm"
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </button>
        ))}
        <button
          onClick={copyToClipboard}
          className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer shadow-sm relative"
          title="Copy Link"
        >
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
