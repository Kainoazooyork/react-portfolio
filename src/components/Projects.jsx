import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"

function Projects() {

    return (
        <>
            <section>
                <h2>Projects</h2>

                <section>
                    <a href="https://Kainoazooyork.github.io/weather-forecaster">
                        <img src={project1} alt="" className = "projectImage"/>
                    </a>
                </section>
                <section>
                    <a href="https://Kainoazooyork.github.io/work-day-scheduler">
                        <img src={project2} alt=""className = "projectImage" />
                    </a>
                </section>
                <section>
                    <a href="https://Kainoazooyork.github.io/timed-quiz">
                        <img src={project3} alt=""className = "projectImage" />
                    </a>
                </section>
                <section>
                    <a href="https://gist.github.com/Kainoazooyork/70dfda1667839b9540b290624d5132d5">
                        <img src={project4} alt="" className = "projectImage"/>
                    </a>
                </section>
                <section>
                    <a href="https://pwa-text-editor-zlr8.onrender.com/">
                        <img src={project5} alt=""className = "projectImage" />
                    </a>
                </section>
                
            </section>
        </>
    )
}
 export default Projects