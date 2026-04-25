import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Orovista Holidays",
  description: "Read the Privacy Policy of Orovista Holidays to understand how we protect your personal data and respect your privacy.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen font-body bg-white">
      <Navbar isSolid={true} />
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-[10px] font-bold text-black/40 tracking-[0.4em] uppercase mb-4 block">Legal Information</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">Privacy Policy</h1>
          <p className="mt-4 text-black/50 font-medium">Last updated: April 2026</p>
        </div>
        
        <div className="space-y-8 text-[14px] md:text-[16px] text-black/70 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">1. Introduction</h2>
            <p>Welcome to Orovista Holidays. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">2. The Data We Collect About You</h2>
            <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking your travel arrangements).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">5. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:</p>
            <div className="mt-4 p-6 bg-[#eeeae7] rounded-2xl">
              <p className="mb-2"><strong>Email address:</strong> Orovistaholidays@gmail.com</p>
              <p className="mb-2"><strong>Phone number:</strong> +91 96190 99699</p>
              <p><strong>Postal address:</strong> 107, First Floor, Crescent Business Park, Off Telephone Exchange Lane, Behind Fairfield Hotel, Saki Naka, Mumbai, Maharashtra 400072</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
