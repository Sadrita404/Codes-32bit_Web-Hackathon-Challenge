import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasDashboardAccess, setHasDashboardAccess] = useState(false);

  // Check dashboard access on component mount and when localStorage changes
  useEffect(() => {
    const checkAccess = () => {
      const hasAccess = localStorage.getItem('dashboardAccess') === 'true';
      setHasDashboardAccess(hasAccess);
    };

    checkAccess();
    
    // Listen for storage changes to update access when payment is completed
    window.addEventListener('storage', checkAccess);
    
    return () => {
      window.removeEventListener('storage', checkAccess);
    };
  }, []);

  const baseNavItems = [
    { path: "/", label: "Home" },
    { path: "/pricing", label: "Attacks & Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/developers", label: "Developers" },
    { path: "/contact", label: "Contact" },
  ];

  // Add dashboard to nav items if user has access
  const navItems = hasDashboardAccess 
    ? [
        { path: "/", label: "Home" },
        { path: "/pricing", label: "Attacks & Pricing" },
        { path: "/dashboard", label: "Dashboard" },
        { path: "/about", label: "About Us" },
        { path: "/developers", label: "Developers" },
        { path: "/contact", label: "Contact" },
      ]
    : baseNavItems;

  return (
    <div className="min-h-screen bg-dark-gradient">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyber-green" />
              <span className="text-2xl font-bold text-glow">QuantumLock</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-cyber-green ${
                    location.pathname === item.path
                      ? "text-cyber-green"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              {hasDashboardAccess && (
                <Link
                  to="/dashboard"
                  className="btn-outline text-sm"
                >
                  Dashboard
                </Link>
              )}
              <Link
                to="/pricing"
                className="btn-cyber text-sm"
              >
                View Plans
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/40">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium transition-colors hover:text-cyber-green ${
                      location.pathname === item.path
                        ? "text-cyber-green"
                        : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <div className="flex justify-center mb-4">
                    <ThemeToggle />
                  </div>
                  {hasDashboardAccess && (
                    <Link
                      to="/dashboard"
                      className="btn-outline text-sm text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to="/pricing"
                    className="btn-cyber text-sm text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    View Plans
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/40 bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-cyber-green" />
                <span className="text-xl font-bold">QuantumLock</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Authorized security assessments. Clear results. Stronger defenses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyber-green">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyber-green">Acceptable Use</a></li>
                <li><a href="#" className="hover:text-cyber-green">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyber-green">Consent Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>sadritaneogi@gmail.com</li>
                <li>Emergency: +91 9875346310</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Compliance</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Authorized Use Only</li>
                <li>Strict Scoping</li>
                <li>No Weaponization</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 QuantumLock. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;