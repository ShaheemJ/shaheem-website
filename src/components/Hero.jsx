/* Component */
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center text-center gap-6 px-4">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold " style={{ fontFamily: "'Satisfy', cursive" }}>
          Shaheem's Personal Portfolio
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ButtonPrimary 
            label="View My Resume"
            icon="download"
            href="./images/ShaheemJaleel_Resume.pdf"
            target="_blank"
          />
          <ButtonOutline 
            href="#about"
            label="Scroll down"
            icon="arrow_downward"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
