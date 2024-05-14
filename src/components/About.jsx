import reactImg from "../assets/react.svg"
import selfie from "../assets/selfie.png"
function About() {

    return (
        <>
            <section>
                <h2>About Me</h2>
                <section>
                    <a href="https://github.com/kainoazooyork">
                        <img src={selfie} alt=""className = "selfie" />
                    </a>
                </section>
                    <p>
                    Hey! I'm Kainoa Furtado. I am a 45 year old web developer. I enjoy spending time with my son and long motorcycle rides.
                    </p>
                
                        
                <img src={reactImg} alt="" />
                <p></p>
            </section>
        </>
    )
}
 export default About