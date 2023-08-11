import { useEffect } from "react"
import Glitch from "./Glitch";

export default function Hero() {

  useEffect(() => {
    Particles.init({
      selector: ".background"
    });

    const particles = Particles.init({
      selector: ".background",
      color: ["#03dac6", "#ff0266", "#000000"],
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            color: ["#faebd7", "#03dac6", "#ff0266"],
            maxParticles: 43,
            connectParticles: false
          }
        }
      ]
    });
  })

  return (
    <>
      <div className="bg-grad">
        <section class="pbg">
          <div className="topText" style={{ marginBottom: '1.5em' }}>
            <h1 className="md:text-[118px] text-[60px] tech-head">Tech <span className="tie-head">Tie</span>tans<span className="ml-2 colored-exclamation">!</span></h1>
            <Glitch />
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,0L48,37.3C96,75,192,149,288,160C384,171,480,117,576,85.3C672,53,768,43,864,64C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <canvas class="background"></canvas>
    </>
  )
}