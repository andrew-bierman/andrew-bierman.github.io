import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Andrew Bierman
      </h1>
      <p className="mb-4 text-lg">
        {`Experienced software engineer with a background in communications and business. 
        Passionate about developing innovative and user-friendly web applications.`}
      </p>
      
      <p className="mb-4">
        With experience in <strong>JavaScript, TypeScript, Python, Node.js, React, Next.js, 
        Swift, Apple Foundation Models, Cloudflare Workers, and more</strong> — I've delivered 
        several projects including:
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>hare - AI agent platform</li>
        <li>PackRat - AI travel planner</li>
        <li>juice.css - CSS framework</li>
        <li>Prysm - macOS AI app</li>
        <li>perdiem - iOS expense tracker</li>
      </ul>

      <h2 className="mb-4 text-xl font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'Swift', 
          'Cloudflare Workers', 'PostgreSQL', 'Git', 'Docker', 'Tailwind'].map(skill => (
          <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-semibold">Projects</h2>
      <div className="my-8">
        <BlogPosts />
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500">
          <a href="https://github.com/andrew-bierman" className="hover:underline">GitHub</a>
          {' · '}
          <a href="https://linkedin.com/in/andrew-bierman" className="hover:underline">LinkedIn</a>
          {' · '}
          <a href="mailto:hello@andrewbierman.com" className="hover:underline">Email</a>
        </p>
      </div>
    </section>
  )
}
