import Layout from "@/components/Layout";
import { Code, Shield, Database, Cpu, Network } from "lucide-react";

const Developers = () => {
  const team = [
    {
      name: "Sadrita",
      role: "Frontend & Security Research",
      icon: <Code className="w-8 h-8" />,
      focus: "User experience and vulnerability analysis"
    }
  ];

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Meet the <span className="text-cyber-green">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team brings together expertise in security research, software engineering, 
                and ethical hacking to deliver comprehensive security assessments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {team.map((member, index) => (
                <div key={index} className="card-cyber text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyber-gradient rounded-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-background">
                      {member.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-cyber-green font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.focus}</p>
                </div>
              ))}
            </div>

            <div className="bg-card/50 rounded-3xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our <span className="text-cyber-green">Approach</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-green/20 rounded-2xl mb-4">
                    <Shield className="w-8 h-8 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Collaborative Security</h3>
                  <p className="text-muted-foreground">
                    We work closely with your team to understand your specific security challenges and business context.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-green/20 rounded-2xl mb-4">
                    <Code className="w-8 h-8 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
                  <p className="text-muted-foreground">
                    Our assessments leverage cutting-edge tools and methodologies to provide comprehensive security insights.
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyber-green/20 rounded-2xl mb-4">
                    <Network className="w-8 h-8 text-cyber-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    We stay current with the latest threats and defense techniques to provide relevant, up-to-date assessments.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Work with <span className="text-cyber-green">Us</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ready to see what our team can discover about your security posture? 
                Start with a free assessment or reach out to discuss your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/pricing" className="btn-cyber">
                  Start Assessment
                </a>
                <a href="/contact" className="btn-outline">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Developers;