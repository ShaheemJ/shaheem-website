import PropTypes from "prop-types";






const BlogCard = ({title, summary, imgSrc, link}) => {
    return(
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ">


            <p className="text-white font-bold mb-8">
                {title}
            </p>

            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
                    <img src={imgSrc} alt="title" width={44} height={44} loading='lazy' className="img-cover" />
                </figure>

                <div>
                    <p className="text-zinc-200">{summary}</p>

                    <p className="text-xs text-zinc-400 tracking-wider">
                        {link}
                    </p>

                </div>
            </div>

        </div>
    )
}

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}

export default BlogCard