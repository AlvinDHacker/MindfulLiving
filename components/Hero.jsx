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
            <section class="pbg bg-grad">
                <div className="topText" style={{ marginBottom: '1.5em' }}>
                    <h1 className="tech-head">Tech <span className="tie-head">Tie</span>tans<span className="ml-2 colored-exclamation">!</span></h1>
                    <Glitch />
                </div>
            </section>
            <canvas class="background"></canvas>
        </>
    )
}