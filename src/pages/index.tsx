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
      <div className="m-3">
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
        <p className="mb-3 text-gray-500 dark:text-gray-400">From a young age, my curiosity and passion for technology and computers was ignited by experimenting with my father's computer. I would eagerly devour technology magazines to learn about the latest cutting-edge inventions. As I grew older, my passion for technology, computers, and business continued to flourish. I have knowledge and understanding of programming languages such as C, Python, Ruby, Java, Javascript, HTML/HTML5, CSS, and SQL. My hardworking, honest, determined, goal-oriented, and ambitious nature drives me to apply my skills to the workplace and assist in solving problems and providing innovative solutions. My objective is to make a meaningful contribution to the tech industry by leveraging my expertise to deliver top-quality work and achieve success.</p>

        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Why I Want To Be A Developer At Sovtech?</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">I am excited about the opportunity to become a developer at SovTech because of the company's commitment to innovation and quality. As a rapidly growing technology company, SovTech offers the chance to work on cutting-edge projects that use the latest technologies and tools. I am passionate about technology and enjoy working on challenging and exciting projects, so I believe SovTech would be the perfect place for me to develop my skills and advance my career. The company's dynamic and collaborative work culture fosters creativity and growth, which I find very appealing. Additionally, SovTech's commitment to employee development and career growth through training and mentorship programs aligns with my career goals. I am eager to join a team of talented and dedicated developers at SovTech who are committed to delivering high-quality solutions to clients around the world.</p>
      </div>

    </main>
  )
}
