
import { useState } from "react";
import { Mail, Phone, User, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BackgroundPaths } from "@/components/ui/background-paths";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://hook.eu2.make.com/w7i74q28r1kv4hmtwqr15n8wegk0l055", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your interest. We'll be in touch soon!"
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          country: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - Replaced with BackgroundPaths */}
      <BackgroundPaths title="ACADEMIX.AI" />

      {/* Services Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gray-900/50 border-orange-500/20">
              <h3 className="text-xl font-semibold mb-4 text-slate-50">24/7 AI Support</h3>
              <p className="text-gray-300">Instant responses to student and staff inquiries through our advanced AI system</p>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-orange-500/20">
              <h3 className="text-xl font-semibold mb-4 text-slate-50">Smart Scheduling</h3>
              <p className="text-gray-300">Automated appointment booking system for academic consultations and support</p>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-orange-500/20">
              <h3 className="text-xl font-semibold mb-4 text-slate-50">Custom Solutions</h3>
              <p className="text-gray-300">Tailored support systems designed specifically for your educational institution</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Chatbot CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900/30 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Try Our AI Assistant Now</h2>
            <p className="text-xl text-gray-300 mb-8">Experience instant support with our AI chatbot. Click the chat icon in the bottom right corner to get started.</p>
            <p className="text-orange-500 animate-pulse">Click the chat bubble to begin →</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">See ACADEMIX.AI in Action</h2>
          <div className="aspect-w 16 aspect-h-9 rounded-lg overflow-hidden max-w-4xl mx-auto">
            <iframe src="https://drive.google.com/file/d/1Cc9RiDDTAxis3sB48JAhiLhDxc_Fnajm/preview" allow="autoplay" className="w-full h-[500px]"></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Get Started Today</h2>
            <Card className="p-8 bg-gray-900/50 border-orange-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input placeholder="Full Name" className="pl-10" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input placeholder="Phone Number" className="pl-10" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} required />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input type="email" placeholder="Email Address" className="pl-10" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required />
                  </div>
                  <Input placeholder="Country" value={formData.country} onChange={e => setFormData({
                  ...formData,
                  country: e.target.value
                })} required />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Request Demo"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section with Instagram Logo */}
      <footer className="py-8 bg-black/50 text-center">
        <div className="container mx-auto px-4">
          <a 
            href="https://www.instagram.com/academix.ai/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block hover:opacity-75 transition-opacity"
          >
            <Instagram 
              size={48} 
              color="#F97316" 
              strokeWidth={1.5} 
              className="mx-auto"
            />
          </a>
          <p className="mt-4 text-gray-300 text-sm">Follow us on Instagram</p>
        </div>
      </footer>
    </div>;
};

export default Index;
