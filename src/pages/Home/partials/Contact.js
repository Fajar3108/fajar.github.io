const Contact = () => {
    const contacts = [
        {
            text: "maulanafajaribrahim@gmail.com",
            url: "mailto:maulanafajaribrahim@gmail.com"
        },
        {
            text: "Github",
            url: "https://www.github.com/Fajar3108"
        },
        {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/maulana-fajar-ibrahim-620a471a4/"
        },
        {
            text: 'Instagram',
            url: 'https://www.instagram.com/fajar3108.i',
        },
    ];

    return (
        <div id="contact" className="py-6 border-b-2">
            <h4 className="font-bold text-gray-500">CONTACT</h4>
            <ul className="text-gray-500 text-sm transition-all list-disc">
                {
                    contacts.map((contact) => (
                        <li><a href={contact.url} target="_blank" rel="noreferrer" className="hover:text-blue-700">{contact.text}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contact;