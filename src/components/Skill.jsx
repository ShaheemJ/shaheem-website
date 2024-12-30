
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: '/images/c++.svg',
      label: 'C++',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/java.svg',
      label: 'Java',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skill = () => {
    return(
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up" >
                    Essential Tools I Use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Here are some of the tools and technologies that I work with.
                </p>

                <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
                    {
                        skillItem.map(({ imgSrc, label, desc}, key) => (
                            <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skill