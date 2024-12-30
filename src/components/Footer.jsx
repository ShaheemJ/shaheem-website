


const Footer = () => {
    return(
        <footer className="section">
            <div className="container">

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/" className="logo reveal-up">
                        <img src="./images/sjlogo.png" width={40} height={40} alt="Logo" />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                           &copy;  <span className="text-zinc-200">2024 Shaheem Jaleel</span>

                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer