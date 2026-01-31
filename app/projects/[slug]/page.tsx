import { notFound } from 'next/navigation'
import { formatDate } from 'app/blog/utils'
import { getProjectBySlug, getProjectPosts } from 'app/projects/utils'

export async function generateStaticParams() {
  let projects = getProjectPosts()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }) {
  let project = getProjectBySlug(params.slug)
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
  let project = getProjectBySlug(params.slug)

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
      {project.metadata.techStack && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metadata.techStack.map((tech) => (
            <span key={tech} className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
      <article className="prose dark:prose-invert">
        {project.content?.split('\n').map((line, i) => {
          if (line.startsWith('## ')) {
            return <h2 key={i} className="text-xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>
          }
          if (line.startsWith('- ')) {
            return <li key={i} className="ml-4">{line.slice(2)}</li>
          }
          if (line.match(/^\*\*(.+?)\*\*/)) {
            return <p key={i} className="font-semibold">{line.replace(/\*\*/g, '')}</p>
          }
          if (line.trim()) {
            return <p key={i} className="mb-2">{line}</p>
          }
          return null
        })}
      </article>
    </section>
  )
}
