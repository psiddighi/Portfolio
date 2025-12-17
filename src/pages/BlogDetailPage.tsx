import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";

interface BlogDetailData {
  title: string;
  subtitle: string;
  text: string;
}

const BLOG_DETAILS: Record<string, BlogDetailData> = {
  "internship-allround-web": {
    title: "Internship: Allround Web",
    subtitle: "The first real-world web development internship working in a team, specialized in my work area",
    text: `This was my very first internship in my third year. During this internship, I spent six months working full-time on clients and websites for Allround Web in Goirle.

I passed all my exams and had the opportunity to successfully complete my third-year internship with positive feedback.

During this internship, I focused on creating front-end websites using plugins and builders, particularly Elementor, ACF, Gravity Forms, and custom code in the site's theme files.`,
  },
  "graduate-internship-unique-design": {
    title: "Graduate Internship Unique Design",
    subtitle: "the end-of-year internship on the way to my MBO 4 diploma",
    text: `This is the full-time internship I'm still working on. In September, I started the internship with a classmate at Unique Design. Unique Design is a full-time web agency specializing in creating custom WordPress websites, custom themes, custom plugins, and servers.

We're now a small team of colleagues in a beautiful office in Tilburg, working together to create projects and solutions for a regular set of returning clients. During this internship, I'm getting the chance to delve into custom WordPress theme and plugin development. Along with a colleague of mine, we often collaborate to deliver visually and technically excellent work for our custom projects.`,
  },
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const data = slug ? BLOG_DETAILS[slug] : undefined;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-28 px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
            <p className="text-muted-foreground mb-6">We couldn’t find details for this blog post.</p>
            <Link to="/blog" className="text-accent underline" onClick={(e) => {
              e.preventDefault();
              navigateWithTransition(navigate, "/blog", location.pathname);
            }}>Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-28 pb-16 px-6 md:px-10 lg:px-16">
        <article className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.title}</h1>
              <h2 className="text-lg md:text-xl text-muted-foreground">{data.subtitle}</h2>
            </div>
            <Link to="/blog" className="text-muted-foreground hover:text-highlight transition-colors" onClick={(e) => {
              e.preventDefault();
              navigateWithTransition(navigate, "/blog", location.pathname);
            }}>Back to Blog</Link>
          </div>

          <div className="prose prose-invert max-w-none leading-relaxed text-lg text-foreground">
            {data.text.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6">{para}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;