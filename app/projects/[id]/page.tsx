import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import ProjectDetail from "@/components/projects/project-detail";
import PageTransition from "@/components/animations/page-transition";

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({
    id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <ProjectDetail project={project} id={params.id} />
    </PageTransition>
  );
}