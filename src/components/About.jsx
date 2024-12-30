const aboutItems = [
    {
        label: 'Years of experience',
        number: 4,
    },
    {
        label: 'Available for work',
        icon: './images/shaheem_profile.png', // Path to the image
        status: true, // Indicates whether to show the status indicator
    },
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Hi! my name is Shaheem, and I&apos;m currently pursuing a degree in Computer Science at the University of Texas at Dallas. I&apos;ve always been passionate about technology and the STEM field, which inspired me to develop skills in programming and software development. I'm particularly interested in areas such as software development and artificial intelligence and am eager to contribute to a place with my expertise!
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number, icon, status }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    {icon ? (
                                        <figure className="img-box w-9 h-9 rounded-lg mr-3">
                                            <img
                                                src={icon}
                                                width={40}
                                                height={40}
                                                alt="Shaheem face"
                                                className="img-cover"
                                            />
                                        </figure>
                                    ) : (
                                        <span className="text-2xl font-bold md:text-3xl">{number}
                                        <span className="text-xl font-semibold md:text-2xl text-red-400" >+</span>
                                        </span>
                                    )}
                                    {status && (
                                        <span className="relative w-2 h-2 rounded-full bg-emerald-500 ml-2">
                                            <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping"></span>
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}

                        <img
                            src="./images/sjlogo.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


