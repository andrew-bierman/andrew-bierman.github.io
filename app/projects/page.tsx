import { ProjectPosts } from 'app/components/project-posts'

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        A collection of open source projects I've built and maintained.
      </p>
      <ProjectPosts />
    </section>
  )
}
