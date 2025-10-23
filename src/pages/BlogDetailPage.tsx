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
    subtitle: "From learning to building in the real world",
    text: `I still remember the quiet hum of the office air conditioning on my first day. Everything felt new — the tools, the pace, the simple but undeniable rhythm of working on something real that would be seen and used by actual people. 

During my internship I got the chance to move beyond tutorials and into decisions. Tiny ones, like padding values and subtle hover states. Bigger ones, like whether a layout should communicate trust or energy. And the biggest ones — how to work with a team, how to ask better questions, and how to throw away code when a cleaner path becomes obvious. 

Some moments stood out. The first time something I designed went live. The first time I broke something and had to calmly, carefully un-break it. The first time I felt the quiet satisfaction that comes from solving a UI problem so clearly that you almost forget there was ever a problem in the first place. 

This wasn’t just about web development. It was about seeing a product from someone else’s perspective, about learning how copy, color, spacing, and motion combine into a feeling. It was about the slow shift from trying to be right to trying to be helpful. And it was about building things that make sense — to the client, to the user, and to the team who’ll maintain it after you. 

By the end, I was no longer just following patterns — I was choosing them. I started writing smaller components, naming things with care, and leaving code a little cleaner than I found it. It’s a quiet kind of craft, and this internship helped me fall in love with it.`,
  },
  "graduate-internship-unique-design": {
    title: "Graduate Internship Unique Design",
    subtitle: "Designing a distinctive graduation project, end-to-end",
    text: `When I began the graduate internship, I promised myself I would design something that felt unmistakably mine — a project that balanced clarity with character.

I started with research: not just competitive analysis, but conversations. What do people expect? What do they actually want to feel? I sketched, iterated, and deleted without ceremony. The best ideas rarely survive their first honest critique.

The uniqueness wasn’t in flashy elements. It was a series of subtle decisions — spacing that invites calm, motion that respects attention, typography that serves the content rather than performing for it. I leaned into patterns that feel familiar but refined, and let contrast carry the story.

One afternoon, the design clicked. I replaced a noisy layout with a focused structure, simplified navigation, and introduced a bold but grounded accent. It finally felt like it had a voice.

From there, detail work took over. Micro-interactions, state transitions, empty states that didn’t feel like dead ends. I refined component names and created variations that wouldn’t make future developers guess.

By the end, it wasn’t just a design — it was an experience with a clear personality. It knew what to say and when to be quiet. And that’s what made it unique.`,
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