import AboutMe from '@/components/about/about-me';
import Journey from '@/components/about/journey';
import Certifications from '@/components/about/certifications';
import PageTransition from '@/components/animations/page-transition';
import EducationAndExperience from '@/components/about/Education and Experience';

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-700">
          About Me
        </h1>
        <div className="grid gap-12">
          <AboutMe />
          <Journey />
          <EducationAndExperience />
          <Certifications />
        </div>
      </div>
    </PageTransition>
  );
}