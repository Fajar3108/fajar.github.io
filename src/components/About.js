import { FaDownload } from 'react-icons/fa';
import CV from '../assets/images/CV - Maulana Fajar Ibrahim.pdf';

const About = ({ profile }) => {
    return (
        <div id="about" className="pb-7 border-b-2">
            <img src={profile} alt="Profile" className="w-2/6" />
            <h4 className="font-bold mt-2">Maulana Fajar Ibrahim</h4>
            <p className="text-sm text-gray-900">I am a graduate of a vocational school majoring in software engineering who has a great interest in programming.</p>
            <a className="px-6 py-3 bg-blue-600 text-white transition-all text-sm hover:bg-blue-900 mt-3 inline-block" href={CV} target="_blank" rel="noreferrer">
                <span className="flex items-center"><FaDownload className="mr-2" />Download CV</span>
            </a>
        </div>
    )
}

export default About;