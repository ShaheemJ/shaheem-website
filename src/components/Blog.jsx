import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlogCard from "./BlogCard";
import { ButtonOutline } from "./Button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const posts = [
    {
        title: "Who's Going to Win?",
        summary: "Heres how I took my statistical analysis of the NBA to the next level.",
        imgSrc: "./images/python.svg",
        link: "/blogs/post-1",
    },
    {
        title: "Who's Going to Win?",
        summary: "Heres how I took my statistical analysis of the NBA to the next level.",
        imgSrc: "./images/python.svg",
        link: "/blogs/post-1",
    },
    {
        title: "Who's Going to Win?",
        summary: "Heres how I took my statistical analysis of the NBA to the next level.",
        imgSrc: "./images/python.svg",
        link: "/blogs/post-1",
    },
    {
        title: "Who's Going to Win?",
        summary: "Heres how I took my statistical analysis of the NBA to the next level.",
        imgSrc: "./images/python.svg",
        link: "/blogs/post-1",
    },
];

const Blog = () => {
    useGSAP(() => {
        gsap.to(".scrub-slide", {
            scrollTrigger: {
                trigger: ".scrub-slide",
                start: "-200% 80%",
                end: "400% 80%",
                scrub: true,
            },
            x: "-1000",
        });
    });

    return (
        <section id="blogs" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Check out my programming journey
                </h2>

                {/* Scrollable Wrapper */}
                <div className="scrub-slide-wrapper overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                    <div className=" flex items-stretch gap-3 w-fit">
                        {posts.map(({ title, summary, imgSrc, link }, key) => (
                            <BlogCard
                                key={key}
                                title={title}
                                imgSrc={imgSrc}
                                summary={summary}
                                link={link}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <ButtonOutline
                        href="/blogs"
                        label="View All"
                        icon="expand_circle_down"
                    />
                </div>
            </div>
        </section>
    );
};

export default Blog;
