import profile from '../../assets/images/profile.jpg';
import { About } from './partials';

const Home = () => {
    return (
        <main className="container mx-auto grid grid-cols-3 gap-3 mt-5 max-w-screen-lg">
            <div>
                <About profile={profile} />
            </div>
        </main>
    )
}

export default Home;