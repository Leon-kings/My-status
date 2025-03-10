/* eslint-disable no-unused-vars */
import React from 'react'

export default function About() {
  return (
    <>
    <div className="w-full min-h-screen bg-gray-100 py-16 px-6 lg:px-8">
      <div className="w-full mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>

        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            Hello! I&apos;m [Your Name], a passionate [Your Profession] with a focus on [Your Specialization]. I love creating [What you create] and solving complex problems. My journey in [Your Field] started [How you started] and has led me to work on various exciting projects.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Skills</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              React.js
            </li>
            <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              Tailwind CSS
            </li>
             <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              JavaScript (ES6+)
            </li>
            <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              Node.js
            </li>
            <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              HTML/CSS
            </li>
            <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              [Add Your Skill]
            </li>
              <li className="bg-gray-200 py-2 px-4 rounded-full text-sm font-medium text-gray-700">
              [Add Your Skill]
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Story</h3>
          <p className="text-gray-700 leading-relaxed">
            [Add your story. For example, mention your education, work experience, and any significant achievements. You can also talk about your passions and what drives you.]
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Let&apos;s Connect</h3>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me via [Your Contact Method].
          </p>
          {/* Add links to your social media or contact form here */}
          <a href="[Your LinkedIn URL]" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            LinkedIn
          </a>
          <a href="[Your Github URL]" className="mt-4 ml-4 inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            GitHub
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
