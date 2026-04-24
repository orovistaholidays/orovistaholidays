"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-12">
          <h1 className="text-[42px] md:text-[54px] font-black uppercase tracking-tighter leading-none text-black">
            Orovista <span className="text-black/20 italic">Admin.</span>
          </h1>
          <p className="text-black/40 font-bold uppercase tracking-widest text-[11px] mt-4">
            Elite Access Portal
          </p>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-black/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="p-4 bg-red-50 text-red-500 text-[12px] font-bold rounded-[20px] text-center border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Administrator Email</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f8f6f4] border-none rounded-[20px] pl-14 pr-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
                  placeholder="admin@orovista.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/40 px-2">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#f8f6f4] border-none rounded-[20px] pl-14 pr-6 py-5 text-black font-bold focus:ring-2 ring-black/5 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-6 rounded-full font-black uppercase text-[12px] tracking-widest hover:bg-neutral-800 disabled:bg-neutral-200 transition-all shadow-xl flex items-center justify-center gap-4 mt-8"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>

        <p className="text-center mt-12 text-black/20 text-[10px] font-bold uppercase tracking-[0.2em]">
          Authorized Personnel Only
        </p>
      </motion.div>
    </div>
  );
}
