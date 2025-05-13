import ProjectsList from '@/components/projects/projects-list';
import PageTransition from '@/components/animations/page-transition';

export default function Projects() {
  return (
    <PageTransition>
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-700">
          My Projects
        </h1>
        <ProjectsList />
      </div>
    </PageTransition>
  );
}