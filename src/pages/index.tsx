import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Faizaan Khan</h1>
      </div>
      <div>
        <Image className="w-100 h-100 rounded-full" src="/avatar.jpg" alt="me" width="250" height="250" />
      </div>
      <div className='m-3'>
      <a href="https://github.com/faizaankhan-sa" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      GitHub
  </span>
</a>
<a href="https://www.linkedin.com/in/faizaankhansa/" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      LinkedIn
  </span>
</a>
      </div>
      <div className="mx-32 text-justify">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">About Me</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">My passion for technology and computers started at an early age with me experimenting with my fathers computer. I would read technology magazines to see what was the latest cutting-edge inventions. Fast forward a couple of years later and I still have a passion for technology and computers. I have knowledge and understanding of programming languages such as C, Python, Ruby, Java, Javascript, HTML/HTML5, CSS and SQL. I'm hardworking, honest, determined, goal orientated and ambitious. My objective is to apply my skills to the workplace and assist in solving problems and providing solutions.</p>

        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Why I Want To Be A Developer At Sovtech?</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">Choosing SovTech as the company to pursue your software development career is an excellent choice for many reasons. SovTech is a rapidly growing technology company that provides innovative solutions to businesses and startups around the world. With its focus on the latest technologies and tools, SovTech offers its developers the opportunity to work on cutting-edge projects and stay ahead of the curve in the software development industry. The company also has a dynamic and collaborative work culture that fosters creativity and growth, which makes it an ideal place to develop your skills and advance your career. Additionally, SovTech offers excellent employee benefits and career development opportunities, such as training and mentorship programs, to help you achieve your career goals. If you are passionate about technology and want to work with a company that values its employees and their growth, then SovTech is the right place for you to become a software developer.</p>
      </div>

    </main>
  )
}
