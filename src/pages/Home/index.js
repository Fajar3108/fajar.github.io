import profile from '../../assets/images/profile.jpg';
import { About, Contact, Skills, Works } from './partials';

const Home = () => {
    return (
        <main className="container mx-auto grid grid-cols-3 gap-3 my-5 max-w-screen-lg">
            <div>
                <About profile={profile} />
                <Skills />
                <Contact />
            </div>
            <div className="col-span-2">
                <Works />
            </div>
        </main>
    )
}

export default Home;