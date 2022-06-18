import { nanoid } from "nanoid";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const contacts = [
        {
            text: "maulanafajaribrahim@gmail.com",
            url: "mailto:maulanafajaribrahim@gmail.com",
            icon: <FaEnvelope />
        },
        {
            text: "Github",
            url: "https://www.github.com/Fajar3108",
            icon: <FaGithub />
        },
        {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/maulana-fajar-ibrahim-620a471a4/",
            icon: <FaLinkedin />
        },
        {
            text: 'Instagram',
            url: 'https://www.instagram.com/fajar3108.i',
            icon: <FaInstagram />
        },
    ];

    return (
        <div id="contact" className="py-6 border-b-2 mb-3">
            <h4 className="font-bold text-gray-500">CONTACT</h4>
            <ul className="text-gray-500 text-sm transition-all">
                {
                    contacts.map((contact) => (
                        <li key={nanoid()} className="flex items-center py-1 hover:text-blue-700 ">
                            {contact.icon}
                            <a href={contact.url} target="_blank" rel="noreferrer" className="ml-2">{contact.text}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contact;