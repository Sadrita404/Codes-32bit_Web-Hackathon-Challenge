import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CreditCard, QrCode } from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentInfo = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan');
  const price = searchParams.get('price');
  
  const [formData, setFormData] = useState({
    websiteName: '',
    targetUrl: '',
    contactEmail: '',
    companyName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    // Store assessment data for dashboard
    const assessmentData = {
      websiteName: formData.websiteName,
      targetUrl: formData.targetUrl,
      contactEmail: formData.contactEmail,
      companyName: formData.companyName,
      plan: plan,
      price: price,
      timestamp: new Date().toISOString(),
      paymentCompleted: true
    };
    
    localStorage.setItem('currentAssessment', JSON.stringify(assessmentData));
    localStorage.setItem('dashboardAccess', 'true');
    
    // Trigger storage event for other components to update
    window.dispatchEvent(new Event('storage'));
    
    // Navigate to dashboard with URL params
    const params = new URLSearchParams({
      url: formData.targetUrl,
      name: formData.websiteName,
      plan: plan || '',
      email: formData.contactEmail
    });
    
    // Navigate directly to dashboard without page reload
    navigate(`/dashboard?${params.toString()}`);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/pricing" className="inline-flex items-center text-cyber-green hover:text-cyber-green-bright mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Assessment Details</h1>
              <p className="text-muted-foreground mb-8">
                Provide your website information for the {plan} assessment
              </p>

              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="websiteName">Website/Company Name</Label>
                    <Input
                      id="websiteName"
                      placeholder="e.g., My Company Website"
                      value={formData.websiteName}
                      onChange={(e) => handleInputChange('websiteName', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="targetUrl">Target URL</Label>
                    <Input
                      id="targetUrl"
                      placeholder="https://example.com"
                      value={formData.targetUrl}
                      onChange={(e) => handleInputChange('targetUrl', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyName">Company Name (Optional)</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Company Ltd."
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Payment Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Payment Summary</h2>
              
              <Card className="p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">{plan} Plan</span>
                  <span className="text-2xl font-bold text-cyber-green">{price}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold">{price}</span>
                  </div>
                </div>
              </Card>

              {/* QR Code Section */}
              <Card className="p-6 mb-6">
                <div className="text-center">
                  <img 
                    src={plan === "Both" 
                      ? "/lovable-uploads/da432101-882b-4d0b-bcc2-9e5254160507.png"
                      : "/lovable-uploads/c07d047f-fe41-4b1c-8287-a4734a79fac4.png"
                    }
                    alt={`Payment QR Code - Sadrita Neogi UPI ${plan === "Both" ? "₹2,500" : "₹1,500"}`}
                    className="w-64 h-80 mx-auto mb-4 rounded-lg"
                  />
                  <p className="text-xs text-muted-foreground mb-4">
                    Scan to pay with any UPI app
                  </p>
                  <p className="text-lg font-bold text-cyber-green bg-cyber-green/10 p-4 rounded-lg border border-cyber-green/20">
                    This is a demo QR. Don't need to pay - just complete the process by filling the data. It's just for demo purposes!
                  </p>
                </div>
              </Card>

              {/* Payment Button */}
              <Button 
                onClick={handlePayment}
                className="w-full btn-cyber text-lg py-6"
                disabled={!formData.websiteName || !formData.targetUrl || !formData.contactEmail}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By proceeding, you agree to our terms of service and privacy policy
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentInfo;