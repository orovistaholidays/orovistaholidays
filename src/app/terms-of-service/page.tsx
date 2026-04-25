import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Orovista Holidays",
  description: "Review the Terms of Service for booking and traveling with Orovista Holidays.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen font-body bg-white">
      <Navbar isSolid={true} />
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-[10px] font-bold text-black/40 tracking-[0.4em] uppercase mb-4 block">Legal Information</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">Terms of Service</h1>
          <p className="mt-4 text-black/50 font-medium">Last updated: April 2026</p>
        </div>
        
        <div className="space-y-8 text-[14px] md:text-[16px] text-black/70 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">1. Agreement to Terms</h2>
            <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Orovista Holidays ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">2. Booking and Payments</h2>
            <p>When booking a tour or travel package through Orovista Holidays, you agree to provide accurate and complete information. A deposit is required to secure your booking. Full payment must be received by the date specified in your booking confirmation. We accept various forms of payment, which will be outlined during the booking process.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">3. Cancellations and Refunds</h2>
            <p>Our cancellation policy varies depending on the specific tour or travel package booked. Generally, cancellations made closer to the departure date will incur higher fees. Please review the specific cancellation terms provided to you at the time of booking. Refunds, if applicable, will be processed in accordance with these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">4. Travel Documents and Requirements</h2>
            <p>You are responsible for ensuring that you have all necessary travel documents, including valid passports, visas, and health certificates, for your journey. Orovista Holidays is not liable for any issues arising from your failure to obtain or carry the proper documentation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">5. Limitation of Liability</h2>
            <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black mb-4">6. Contact Information</h2>
            <p>For any questions or concerns regarding these Terms of Service, please contact us at:</p>
            <div className="mt-4 p-6 bg-[#eeeae7] rounded-2xl">
              <p className="mb-2"><strong>Email:</strong> Orovistaholidays@gmail.com</p>
              <p className="mb-2"><strong>Phone:</strong> +91 96190 99699</p>
              <p><strong>Address:</strong> 107, First Floor, Crescent Business Park, Off Telephone Exchange Lane, Behind Fairfield Hotel, Saki Naka, Mumbai, Maharashtra 400072</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
