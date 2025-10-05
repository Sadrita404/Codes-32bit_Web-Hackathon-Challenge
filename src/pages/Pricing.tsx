import Layout from "@/components/Layout";
import { Check, Star, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      color: "text-foreground",
      bgColor: "bg-card",
      borderColor: "border-border",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Basic security overview",
        "Single domain scan",
        "Limited findings report",
        "Dashboard access",
        "Email support"
      ],
      cta: "Start Free",
      ctaClass: "btn-outline"
    },
    {
      name: "Basic",
      price: "₹1,500",
      color: "text-foreground",
      bgColor: "bg-card",
      borderColor: "border-border",
      icon: <Target className="w-8 h-8" />,
      features: [
        "Authorized adversarial simulation within agreed scope",
        "High-level findings, risk summary, prioritized fixes",
        "One domain / time-boxed window",
        "Dashboard + downloadable PDF report",
        "Remediation guidance"
      ],
      cta: "Choose Basic",
      ctaClass: "btn-outline"
    },
    {
      name: "Pro",
      price: "₹1,500",
      color: "text-foreground",
      bgColor: "bg-card",
      borderColor: "border-border",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Defensive readiness evaluation (visibility, alerting, response gaps)",
        "High-level posture review and quick-win recommendations",
        "One domain / time-boxed window",
        "Dashboard + downloadable PDF report",
        "Detection improvement guidance"
      ],
      cta: "Choose Pro",
      ctaClass: "btn-outline"
    },
    {
      name: "Elite",
      price: "₹2,500",
      color: "text-cyber-green",
      bgColor: "bg-cyber-green/5",
      borderColor: "border-cyber-green",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Combined authorized simulation + defense review",
        "Correlated findings, attack/defense mapping, and action plan",
        "One domain / time-boxed window",
        "Dashboard + comprehensive report + remediation roadmap",
        "Priority support",
        "Follow-up consultation"
      ],
      cta: "Go Elite",
      ctaClass: "btn-cyber",
      popular: true
    }
  ];

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Attacks & <span className="text-cyber-green">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              "Attacks" below means <strong className="text-cyber-green">authorized, consent-based simulations</strong> and 
              defensive evaluations. No illegal activity. Scope and terms required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative card-cyber ${plan.bgColor} border-2 ${plan.borderColor} ${
                  plan.popular ? 'transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyber-gradient text-background px-4 py-2 rounded-full flex items-center text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? 'bg-cyber-gradient text-background' : 'bg-muted text-muted-foreground'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.color}`}>{plan.name}</h3>
                  <p className="text-4xl font-bold mb-4">{plan.price}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cyber-green mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={`/payment-info?plan=${plan.name}&price=${plan.price}`} 
                  className={`${plan.ctaClass} w-full text-center block`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Legal/Ethical Note */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-warning/10 border border-warning/20 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4 text-warning">Important Legal & Ethical Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Client must prove ownership/authorization of the target.</li>
              <li>• Activities are limited to the documented scope and schedule.</li>
              <li>• We provide <strong>non-operational</strong> summaries and remediation guidance—no exploit code.</li>
              <li>• All assessments require signed consent and terms agreement.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;