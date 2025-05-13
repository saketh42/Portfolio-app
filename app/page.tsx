import Hero from '@/components/home/hero';
import FeaturedProjects from '@/components/home/featured-projects';
import Journey from '@/components/about/journey';
import Skills from '@/components/home/skills';
import PageTransition from '@/components/animations/page-transition';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        <Hero />
        <FeaturedProjects />
        <Skills />
      </div>
    </PageTransition>
  );
}