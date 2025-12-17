import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";
import { Rocket, Building2, Users, Code, Brush, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="pt-28 pb-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
            <p className="text-lg text-muted-foreground">Tailored digital solutions designed to help you launch, grow, and refine your presence.</p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Who is it for?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">Startups</span>
                </div>
                <p className="text-sm text-muted-foreground">Fast, iterative delivery to validate ideas and reach users quickly.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">Small businesses</span>
                </div>
                <p className="text-sm text-muted-foreground">Professional websites and upgrades that drive credibility and conversions.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">Freelancers & Creators</span>
                </div>
                <p className="text-sm text-muted-foreground">Personal branding and portfolio sites to showcase your work effectively.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">What I propose</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">from €400</span>
                </div>
                <p className="text-sm text-muted-foreground">Personal websites & development, fast, responsive and optimized. Ideal for showcasing your work or services.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Brush className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">from €200</span>
                </div>
                <p className="text-sm text-muted-foreground">Custom designs: UI/UX, webdesigns, logo designs, personal branding.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 hover:border-accent transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">from €80/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">Maintenance: technical support, updates, continuous evolutions. Ideal for keeping your project solid and futureproof.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Why me/us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">4+ years of experience</span>
                </div>
                <p className="text-sm text-muted-foreground">Proven track record across front-end and back-end projects.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">Active Fullstack development team & Designers</span>
                </div>
                <p className="text-sm text-muted-foreground">End-to-end delivery from design to deployment.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">Full customization tailored to your business</span>
                </div>
                <p className="text-sm text-muted-foreground">Solutions adapted to your brand, goals, and workflows.</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-lg font-medium">Free intake</span>
                </div>
                <p className="text-sm text-muted-foreground">Start with a no-obligation conversation to define your needs.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-xl border border-border bg-card relative overflow-hidden">
              <div className="absolute -top-20 -left-16 w-64 h-64 bg-accent/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-20 w-56 h-56 bg-foreground/5 blur-3xl" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-accent" />
                  <h2 className="text-2xl font-semibold">About us</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <p className="text-sm text-muted-foreground">
                    We're a close-knit team of friends, all certified Web and Software Developers who work full-time to fulfill our clients' needs.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    With a passion for both design and technology, we build everything from complete websites and web applications to unique logos, corporate identities, and printed materials.
                  </p>
                  <p className="text-sm text-muted-foreground md:col-span-2">
                    We collaborate with you, design with care, and translate every idea into a professional final result that perfectly matches your brand and target audience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="rounded-xl border border-border bg-card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Ready to get started?</h3>
                <p className="text-muted-foreground">Book a free intake or explore my work.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="mailto:zakelijkps@gmail.com"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded hover:opacity-90 transition-opacity"
                >
                  Free Intake
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded hover:bg-muted transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition(navigate, "/projects", location.pathname);
                  }}
                >
                  View Projects
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
