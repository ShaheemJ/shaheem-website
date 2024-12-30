
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/lbj.png',
      title: 'NBA Stat Predictor',
      tags: ['API', 'AI', 'Development'],
      projectLink: 'https://github.com'
    },
    {
      imgSrc: '/images/health.jpg',
      title: 'Healthcare Chatbot',
      tags: ['NLP', 'Web-design', 'Development'],
      projectLink: 'https://github.com'
    },
    {
      imgSrc: '/images/sudoku.png',
      title: 'Sudoku Solver',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com'
    },
    {
      imgSrc: '/images/blackjack.jpg',
      title: 'Blackjack',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com'
    },
    {
      imgSrc: '/images/nba.png',
      title: 'NBA Webscraper',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com'
    },
  ];





  const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">

               <h2 className="headline-2 mb-8 reveal-up">
                Some of my Projects!
               </h2>

               <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] ">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
               </div>

            </div>
        </section>
    )
}

export default Work