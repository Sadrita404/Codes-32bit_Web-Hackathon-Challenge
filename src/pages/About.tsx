import Layout from "@/components/Layout";
import { Shield, Target, Users, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                About <span className="text-cyber-green">QuantumLock</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Authorized security assessments. Clear results. Stronger defenses.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-foreground">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-gradient rounded-2xl mb-6">
                    <Shield className="w-8 h-8 text-background" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground">
                    We're a team of security enthusiasts focused on <strong className="text-cyber-green">authorized</strong>, 
                    <strong className="text-cyber-green"> ethical</strong>, and <strong className="text-cyber-green">impact-driven</strong> assessments. 
                    Our mission is to help teams understand exposure, strengthen defenses, and ship with confidence—without noise or fear-mongering.
                  </p>
                </div>

                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-gradient rounded-2xl mb-6">
                    <Target className="w-8 h-8 text-background" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                  <p className="text-muted-foreground">
                    We value <strong className="text-cyber-green">transparency</strong>, 
                    <strong className="text-cyber-green"> consent</strong>, and 
                    <strong className="text-cyber-green"> clear remediation guidance</strong>. 
                    Every assessment we conduct is fully authorized and designed to provide actionable insights 
                    that strengthen your security posture.
                  </p>
                </div>
              </div>

              <div className="bg-card/50 rounded-3xl p-8 mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  What Makes Us <span className="text-cyber-green">Different</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-xl mb-4">
                      <CheckCircle className="w-6 h-6 text-cyber-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ethical First</h3>
                    <p className="text-muted-foreground text-sm">
                      Every activity requires explicit authorization and consent. We operate strictly within agreed scope.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-xl mb-4">
                      <Users className="w-6 h-6 text-cyber-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
                    <p className="text-muted-foreground text-sm">
                      No jargon, no fear-mongering. We provide clear, actionable insights that your team can implement.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyber-green/20 rounded-xl mb-4">
                      <Shield className="w-6 h-6 text-cyber-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Remediation Focused</h3>
                    <p className="text-muted-foreground text-sm">
                      Our reports include prioritized remediation guidance, not just problems. We help you fix what matters most.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Strengthen Your <span className="text-cyber-green">Defenses</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Start with a free baseline assessment and see how we can help secure your infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/pricing" className="btn-cyber">
                    Start Free Scan
                  </a>
                  <a href="/contact" className="btn-outline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;