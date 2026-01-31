import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { getProjectPosts } from 'app/projects/utils'

export async function generateStaticParams() {
  let projects = getProjectPosts()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }) {
  let project = getProjectPosts().find((project) => project.slug === params.slug)
  if (!project) {
    return
  }

  let { title, publishedAt: publishedTime, summary: description } = project.metadata
  
  return {
    title,
    description,
  }
}

export default function Project({ params }) {
  let project = getProjectPosts().find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {project.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(project.metadata.publishedAt)}
        </p>
        {project.metadata.link && (
          <a 
            href={project.metadata.link}
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}
      </div>
      <article className="prose">
        <CustomMDX source={project.content} />
      </article>
    </section>
  )
}
