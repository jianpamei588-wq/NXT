import Hero from "@/components/Hero";
import { getDictionary, Locale } from "@/lib/dictionary";
import projects from "@/data/projects.json";
import stories from "@/data/stories.json";
import team from "@/data/team.json";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ArrowRight, MapPin, Target, Eye, HeartHandshake, Mail, Phone } from "lucide-react";
import { getAllPosts } from "@/lib/markdown";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const posts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return (
    <ScrollReveal>
      <div className="flex flex-col w-full">
        <div id="home" className="animate-fade-in">
          <Hero dict={dict} lang={lang} />
        </div>
        
        {/* About Section */}
        <Section id="about" className="bg-muted/30 scroll-mt-16 reveal">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-4xl font-bold tracking-tight">{dict.about.title}</h2>
              <p className="text-xl text-muted-foreground">{dict.about.mission}</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-20">
              <Card className="text-center p-6 border-none shadow-none bg-transparent hover:bg-card hover:shadow-md transition-all duration-300">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <Target size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mission</h3>
                  <p className="text-muted-foreground">{dict.about.mission}</p>
              </Card>
              <Card className="text-center p-6 border-none shadow-none bg-transparent hover:bg-card hover:shadow-md transition-all duration-300">
                  <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                      <Eye size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Vision</h3>
                  <p className="text-muted-foreground">{dict.about.vision}</p>
              </Card>
              <Card className="text-center p-6 border-none shadow-none bg-transparent hover:bg-card hover:shadow-md transition-all duration-300">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent-foreground mb-4">
                      <HeartHandshake size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Values</h3>
                  <p className="text-muted-foreground">{dict.about.values}</p>
              </Card>
          </div>

          <h3 className="text-3xl font-bold tracking-tight text-center mb-12">{dict.about.team_title}</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {team.map((member) => (
                  <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                      <div className="aspect-square bg-muted relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                              Photo: {member.name}
                          </div>
                      </div>
                      <CardContent className="text-center pt-6">
                          <h4 className="font-bold text-lg">{member.name}</h4>
                          <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                          <p className="text-muted-foreground text-sm">{member.bio}</p>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="bg-background scroll-mt-16 reveal">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">{dict.projects.title}</h2>
              <p className="text-muted-foreground">Our flagship initiative to bring safety to rural hilly regions.</p>
            </div>
          </div>
          <div className="flex flex-col gap-12 items-center">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group flex flex-col md:flex-row h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 max-w-4xl w-full">
                <div className="md:w-2/5 aspect-video md:aspect-auto bg-muted relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200 group-hover:scale-105 transition-transform duration-500 text-center p-4">
                      Landslide Detection System <br/> (Prototype Stage)
                   </div>
                   <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-primary shadow-sm">
                          {project.status}
                      </span>
                   </div>
                </div>
                <CardContent className="p-8 flex flex-col flex-1 justify-center">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <MapPin size={14} className="mr-1 text-secondary" /> {project.location}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-6">
                    {project.summary}
                  </p>
                  <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground italic">{project.timeline}</span>
                      <Link href={`/${lang}/projects/${project.id}`} className="text-sm font-bold text-primary hover:translate-x-1 transition-transform inline-flex items-center">
                      Full Details <ArrowRight size={16} className="ml-2" />
                      </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Impact Section */}
        <Section id="impact" className="bg-primary/5 scroll-mt-16 reveal">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">{dict.impact.title}</h2>
              <p className="text-xl text-muted-foreground">
              The goals and aspirations driving our startup journey.
              </p>
          </div>

          <div className="space-y-16">
              {stories.map((story, index) => (
              <div key={story.id} className={`flex flex-col gap-8 md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 aspect-video bg-muted rounded-xl overflow-hidden relative shadow-lg group">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-200 text-xl group-hover:scale-105 transition-transform duration-500">
                          Image: {story.title}
                      </div>
                  </div>
                  <div className="flex-1 space-y-4">
                      <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                          {story.metric}
                      </div>
                      <h3 className="text-3xl font-bold">{story.title}</h3>
                      <p className="text-lg text-muted-foreground">{story.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="p-4 bg-muted/30 rounded-lg text-center">
                              <span className="block text-sm text-muted-foreground font-semibold mb-1 uppercase">{dict.impact.before}</span>
                              <span className="font-mono text-sm">Limited Access</span>
                          </div>
                          <div className="p-4 bg-primary/5 rounded-lg text-center border border-primary/10">
                              <span className="block text-sm text-primary font-semibold mb-1 uppercase">{dict.impact.after}</span>
                              <span className="font-mono text-sm font-bold">{story.metric}</span>
                          </div>
                      </div>
                  </div>
              </div>
              ))}
          </div>
        </Section>

        {/* Blog Section */}
        <Section id="blog" className="bg-background scroll-mt-16 reveal">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center mb-10">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2">{dict.nav.blog}</h2>
                  <p className="text-muted-foreground">Insights and updates from our team.</p>
              </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2">
                      <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                      </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <Link href={`/${lang}/blog/${post.slug}`} className="text-primary font-medium hover:underline mt-auto inline-flex items-center">
                      Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                  </CardContent>
              </Card>
              ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="bg-muted/30 scroll-mt-16 reveal">
          <div className="grid gap-12 lg:grid-cols-2">
              <div>
                  <h2 className="text-4xl font-bold tracking-tight mb-4">{dict.contact.title}</h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                      Have questions or want to collaborate? Reach out to us.
                  </p>
                  
                  <div className="space-y-6">
                      <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              <Mail size={20} />
                          </div>
                          <div>
                              <p className="font-semibold">Email</p>
                              <a href="mailto:hello@nextbuildx.org" className="text-muted-foreground hover:text-primary">hello@nextbuildx.org</a>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              <Phone size={20} />
                          </div>
                          <div>
                              <p className="font-semibold">Phone</p>
                              <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary">+91 98765 43210</a>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              <MapPin size={20} />
                          </div>
                          <div>
                              <p className="font-semibold">Location</p>
                              <p className="text-muted-foreground">New Delhi, India</p>
                          </div>
                      </div>
                  </div>

                  <div className="mt-8 h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground border shadow-inner">
                      Map Integration Placeholder
                  </div>
              </div>
              
              <div className="bg-card p-6 md:p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Suspense fallback={<div className="h-64 flex items-center justify-center text-muted-foreground">Loading Form...</div>}>
                      <ContactForm dict={dict} />
                  </Suspense>
              </div>
          </div>
        </Section>
      </div>
    </ScrollReveal>
  );
}
