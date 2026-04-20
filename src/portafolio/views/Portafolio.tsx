import Navbar from '../components/Navbar'
import HeroSection from '../components/heroSection'
import Skill from '../components/skill'
import Projects from '../components/Project'
import Resume from '../components/resume'
import Footer from '../components/footer'


function Portafolio() {
    return (
        <> 
             <Navbar/>  
             <main> 
                <HeroSection/>
                <Skill/>
                <Projects/>
                <Resume/>
             </main>
             <Footer/>
 </>
            
            )}

  export default Portafolio