import Layout from "@/components/Layout";
import { Mail, Phone, AlertCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    domain: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Contact <span className="text-cyber-green">Us</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to strengthen your security? Get in touch with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-gradient rounded-xl">
                      <Mail className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
                      <p className="text-muted-foreground mb-2">
                        For general questions about our services and pricing
                      </p>
                      <a 
                        href="mailto:sadritaneogi@gmail.com" 
                        className="text-cyber-green hover:text-cyber-green-bright"
                      >
                        sadritaneogi@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-gradient rounded-xl">
                      <AlertCircle className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Security & Legal</h3>
                      <p className="text-muted-foreground mb-2">
                        For security concerns, legal questions, and compliance
                      </p>
                      <a 
                        href="mailto:sadritaneogi@gmail.com" 
                        className="text-cyber-green hover:text-cyber-green-bright"
                      >
                        sadritaneogi@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-danger/20 rounded-xl">
                      <Phone className="w-6 h-6 text-danger" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
                      <p className="text-muted-foreground mb-2">
                        Available during active assessment windows only
                      </p>
                      <p className="text-danger font-mono">+91 9875346310</p>
                    </div>
                  </div>
                </div>

                {/* Privacy Note */}
                <div className="bg-info/10 border border-info/20 rounded-2xl p-6">
                  <h4 className="font-semibold mb-2 text-info">Privacy Notice</h4>
                  <p className="text-sm text-muted-foreground">
                    We never store sensitive data beyond what's required to deliver the assessment and report. 
                    All communications are encrypted and securely handled.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-cyber">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyber-green"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyber-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyber-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="domain" className="block text-sm font-medium mb-2">
                      Domain (if applicable)
                    </label>
                    <input
                      type="text"
                      id="domain"
                      name="domain"
                      placeholder="example.com"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyber-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-cyber-green resize-none"
                      placeholder="Tell us about your security assessment needs..."
                    />
                  </div>

                  <button type="submit" className="btn-cyber w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;