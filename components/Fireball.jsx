import { useLayoutEffect } from "react"

export default function Fireball() {

    useLayoutEffect(() => {
        const root = document.documentElement;

        const primaryColor1 = getComputedStyle(root).getPropertyValue(
            "--primary-color-1"
        );
        const primaryColor2 = getComputedStyle(root).getPropertyValue(
            "--primary-color-2"
        );
        const startGradientAnimationValues = `${primaryColor2}; ${primaryColor1}; ${primaryColor2}`;
        const endGradientAnimationValues = `${primaryColor1}; ${primaryColor2}; ${primaryColor1}`;
        const animationDuration = getComputedStyle(root).getPropertyValue(
            "--animation-duration"
        );
        const animationDurationGradient = `${animationDuration.split("s")[0] * 2}s`;

        const startGradient = document.getElementById("startGradient");
        const endGradient = document.getElementById("endGradient");
        const startGradientAnimation = document.getElementById(
            "startGradientAnimation"
        );
        const endGradientAnimation = document.getElementById("endGradientAnimation");

        startGradient.setAttribute("stop-color", primaryColor2);
        endGradient.setAttribute("stop-color", primaryColor1);
        startGradientAnimation.setAttribute("values", startGradientAnimationValues);
        endGradientAnimation.setAttribute("values", endGradientAnimationValues);
        startGradientAnimation.setAttribute("dur", animationDurationGradient);
        endGradientAnimation.setAttribute("dur", animationDurationGradient);
    })

    return (
        <>

            <div class="cell-wrapper">
                <div class="cell-core"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" class="cell">
                    <lineargradient id="cell-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop id="startGradient" offset="0%">
                            <animate id="startGradientAnimation" attributeName="stop-color" repeatCount="indefinite"></animate>
                        </stop>

                        <stop id="endGradient" offset="100%">
                            <animate id="endGradientAnimation" attributeName="stop-color" repeatCount="indefinite"></animate>
                        </stop>
                    </lineargradient>
                    <path className="cell-path" fill="url('#cell-gradient')"></path>
                </svg>
            </div>
            <script>


            </script>
        </>
    )
}