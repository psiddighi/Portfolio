import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { navigateWithTransition } from "@/lib/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";

interface BlogDetailData {
  title: string;
  subtitle: string;
  text: string;
  heroImage?: string;
  heroPosition?: string;
  location?: {
    title: string;
    address: string;
    mapQuery: string;
    mapsUrl: string;
  };
}

const BLOG_DETAILS: Record<string, BlogDetailData> = {
  "building-ai-language-coach-mindlabs": {
    title: "Building an AI Language Coach at MindLabs",
    subtitle: "A six-month Open Learning experience focused on AI, web development, research, and creating an innovative learning platform for NT2 students.",
    heroImage: "./Portfolio/IMG_3027%202.jpg",
    heroPosition: "center 35%",
    text: `For six months, I worked at MindLabs in Tilburg as part of my Open Learning program. Unlike my previous internships at traditional web agencies, this experience gave me much more freedom to explore new technologies, conduct research, experiment with ideas, and work independently on an innovative project.

MindLabs is an environment where education, research, technology, and businesses come together to work on innovative solutions. During my time there, my main project focused on the development of an **AI Language Coach**, a web-based learning platform designed for NT2 students who want to improve their Dutch and prepare themselves for education, work, or integration in the Netherlands.

The idea behind the platform was to make language learning more interactive and realistic. Instead of only completing traditional exercises, students can practice through missions and roleplay scenarios based on situations they may encounter at school, during an internship, at work, or in everyday life. AI plays an important role by simulating conversations and providing personalized feedback on areas such as vocabulary, sentence structure, grammar, and the use of formal or academic Dutch.

During the project, I worked on much more than just development. I researched the target audience, explored existing AI and language-learning platforms, created personas and user flows, studied current design and technology trends, and designed the user interface in Figma. From there, I worked on translating these ideas into a functional web platform.

The platform was designed around several features, including AI-powered conversations, text and voice interaction, personalized feedback, progress tracking, XP, levels, streaks, and a skill map. I also explored a Content & Entertainment section where students could learn through articles, vocabulary assistance, quizzes, and small educational games.

Open Learning gave me the opportunity to approach the project from different perspectives. I wasn't only working as a web developer, but also had to think about **UI/UX design, AI integration, research, project planning, privacy and regulations, and the needs of the end user**. I regularly received feedback, discussed ideas with others, and used this feedback to improve both the concept and the platform.

This six-month experience at MindLabs allowed me to combine many of the skills I developed throughout my Software Development studies while also exploring areas that were new to me, particularly artificial intelligence and AI-assisted education. It challenged me to work more independently, make my own technical and design decisions, and turn an initial idea into a complete digital concept.`,
    location: {
      title: "MindLabs",
      address: "Locomotiefboulevard 101, 5041 SE Tilburg",
      mapQuery: "Locomotiefboulevard 101 5041 SE Tilburg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Locomotiefboulevard%20101%205041%20SE%20Tilburg",
    },
  },
  "internship-allround-web": {
    title: "Internship: Allround Web",
    subtitle: "The first real-world web development internship working in a team, specialized in my work area",
    heroImage: "./Portfolio/IMG_4280.jpg",
    text: `This was my very first internship, which I completed during the third year of my Software Development studies. During this internship, I spent half a year working full-time at Allround Web in Goirle, where I had the opportunity to work on real projects and websites for a variety of clients.

Throughout the internship, I gained valuable experience working in a professional web development environment. I successfully completed all of my internship exams and finished my third-year internship with positive feedback.

My main focus was front-end and WordPress development. I worked on creating, improving, and maintaining websites using tools and plugins such as Elementor, Advanced Custom Fields (ACF), Gravity Forms, and various other WordPress plugins. When the available plugins or page builders were not enough, I also implemented custom solutions by working directly with the website's theme files using HTML, CSS, JavaScript, and PHP.

In addition to developing websites, I learned how to work with existing projects, follow client requirements, solve technical problems, and make websites responsive and user-friendly across different devices. Working on real client projects helped me improve both my technical skills and my ability to work independently.

This internship gave me a much better understanding of professional web development and WordPress and allowed me to apply the knowledge I had gained during my studies in real-world projects. It was an important step in my development as a web developer and gave me valuable experience that I can use in future projects and internships.`,
    location: {
      title: "Allround Web",
      address: "Goirle, Noord-Brabant",
      mapQuery: "Allround Web Goirle",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Allround%20Web%20Goirle",
    },
  },
  "internship-unique-design": {
    title: "Internship: Unique Design",
    subtitle: "the end-of-year internship on the way to my MBO 4 diploma",
    heroImage: "./Portfolio/IMG_9658%203.jpg",
    heroPosition: "center 22%",
    text: `This was my second full-time internship, which I completed over the course of one year at Unique Design. I started the internship in September together with a classmate. Unique Design is a web agency specializing in custom WordPress websites, custom themes, custom plugins, hosting, and server solutions.

During my internship, I became part of a small team working from an office in Tilburg. Together, we worked on a wide range of projects and solutions for a regular group of returning clients. Being part of a smaller team gave me the opportunity to be closely involved in projects and take responsibility for different parts of the development process.

A major focus of this internship was custom WordPress development. I gained more experience with developing and modifying custom themes and plugins, working with PHP, JavaScript, HTML, CSS, ACF, and various WordPress tools. Instead of mainly relying on existing page builders and plugins, I learned more about creating custom solutions based on the specific requirements of each project.

I regularly collaborated with colleagues on custom projects, combining design and development to create websites that were both visually appealing and technically well-built. This also taught me how to work with existing codebases, troubleshoot technical issues, improve responsive designs, and find practical solutions for client requests.

Throughout the year, I was able to further develop my skills as a web developer and gain a much deeper understanding of WordPress development in a professional environment. The internship gave me valuable experience working with real clients, collaborating with colleagues, and delivering custom solutions from both a visual and technical perspective.`,
    location: {
      title: "Unique Design",
      address: "Dr Hub van Doorneweg 155, 1e etage, 5026 RC Tilburg",
      mapQuery: "Dr Hub van Doorneweg 155 1e etage 5026 RC Tilburg",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dr%20Hub%20van%20Doorneweg%20155%201e%20etage%205026%20RC%20Tilburg",
    },
  },
};

const renderFormattedText = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-black text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });

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
      <main className="flex-1 pb-16">
        {data.heroImage && (
          <section className="pt-[73px]">
            <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden border-b border-border md:h-[54vh]">
              <img
                src={data.heroImage}
                alt={`${data.title} hero`}
                className="h-full w-full object-cover"
                style={{ objectPosition: data.heroPosition ?? "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/18 to-transparent" />
            </div>
          </section>
        )}

        <article className={`${data.heroImage ? "-mt-20" : "pt-28"} relative z-10 mx-auto max-w-4xl px-6 md:px-10 lg:px-0`}>
          <div className="mb-10 rounded-lg border border-border/80 bg-background/88 p-6 shadow-[0_24px_90px_rgba(57,44,28,0.12)] backdrop-blur-2xl md:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-accent">Internship story</p>
                <h1 className="mb-3 text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl">{data.title}</h1>
                <h2 className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">{data.subtitle}</h2>
              </div>
              <Link to="/blog" className="shrink-0 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent" onClick={(e) => {
                e.preventDefault();
                navigateWithTransition(navigate, "/blog", location.pathname);
              }}>Back</Link>
            </div>

            <div className="max-w-none space-y-6 text-base leading-8 text-foreground/82 md:text-lg md:leading-9">
              {data.text.split("\n\n").map((para, i) => (
                <p key={i}>{renderFormattedText(para)}</p>
              ))}
            </div>
          </div>

          {data.location && (
            <section className="overflow-hidden rounded-lg border border-border bg-card/70 shadow-[0_24px_90px_rgba(57,44,28,0.1)] backdrop-blur-xl">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.4fr]">
                <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                  <div>
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md border border-accent/25 bg-accent/12 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-accent">Location</p>
                    <h3 className="text-3xl font-black tracking-[-0.045em] md:text-4xl">{data.location.title}</h3>
                    <p className="mt-3 text-muted-foreground">{data.location.address}</p>
                  </div>

                  <a
                    href={data.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-background/60 px-4 py-3 text-sm font-black uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Open in Maps
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="h-[340px] border-t border-border lg:h-[420px] lg:border-l lg:border-t-0">
                  <iframe
                    title={`${data.location.title} map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(data.location.mapQuery)}&output=embed`}
                    className="h-full w-full grayscale-[0.15]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
