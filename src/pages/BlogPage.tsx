import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";

interface BlogPostProps {
  title: string;
  date: string;
  isVisible: boolean;
  index: number;
  slug: string;
}

const BlogPost = ({ title, date, isVisible, index, slug }: BlogPostProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div 
      className={`relative border-b border-border py-6 group hover:bg-card hover:border-accent transition-all duration-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">{title}</h3>
          <span className="text-muted-foreground text-sm mt-1 md:mt-0">{date}</span>
        </div>
      </div>
      <Link 
        to={`/blog/${slug}`} 
        className="absolute inset-0 z-10"
        aria-label={`Read ${title} blog post`}
        onClick={(e) => {
          e.preventDefault();
          navigateWithTransition(navigate, `/blog/${slug}`, location.pathname);
        }}
      ></Link>
    </div>
  );
};

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("blog-list");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "Internship Allround Web",
      date: "2024-26-08",
      slug: "internship-allround-web",
    },
    {
      title: "Graduate Internship Unique Design",
      date: "2025-26-08",
      slug: "graduate-internship-unique-design",
    },
    // Add future posts here with title, date, and slug
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-16 px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            A timeline of highlights showing what my career as a developer looks like from start to finish.
            </p>
            
            <div id="blog-list" className="relative">
              {blogPosts.map((post, index) => (
                <BlogPost 
                  key={index}
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  isVisible={isVisible}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;