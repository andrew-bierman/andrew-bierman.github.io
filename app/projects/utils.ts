import { projects } from 'app/projects/data'

export type ProjectMetadata = {
  title: string
  publishedAt: string
  summary: string
  techStack?: string[]
  link?: string
  description?: string
}

export type Project = {
  metadata: ProjectMetadata
  slug: string
  content?: string
}

export function getProjectPosts(): Project[] {
  return projects.map((project) => ({
    slug: project.slug,
    metadata: {
      title: project.title,
      publishedAt: project.publishedAt,
      summary: project.summary,
      techStack: project.techStack,
      link: project.link,
    },
    content: project.description,
  }))
}

export function getProjectBySlug(slug: string) {
  const project = projects.find((p) => p.slug === slug)
  if (!project) return null
  return {
    slug: project.slug,
    metadata: {
      title: project.title,
      publishedAt: project.publishedAt,
      summary: project.summary,
      techStack: project.techStack,
      link: project.link,
    },
    content: project.description,
  }
}
