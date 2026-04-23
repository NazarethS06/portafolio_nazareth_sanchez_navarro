import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Skill from '../components/Skill'
import Projects from '../components/Project'
import Resume from '../components/Resume'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
function Portafolio() {
    return (
        <> 
             <Navbar/>  
             <main> 
                <HeroSection/>
                <Skill/>
                <Projects/>
                <Resume/>
                <Contact/>
             </main>
             <Footer/>
 </>
            
            )}

  export default Portafolio