import { nanoid } from "nanoid";

const Works = () => {
    const works = [
         {
            image: require('../assets/images/works/Portfolio.png'),
            title: 'Portfolio Website',
            description: 'This website was created to display my personal portfolio.',
            download: 'https://github.com/fajar3108/fajar3108.github.io',
            view: 'https://fajar3108.github.io',
            tags: [
                'React JS', 'Tailwind'
            ]
        },
        {
            image: require('../assets/images/works/Admin Cirendeu.png'),
            title: 'Cirendeu Admin Panel',
            description: 'This website aims to manage the information data of a village',
            download: 'https://github.com/fajar3108/desa-sii',
            view: '',
            tags: [
                'Laravel', 'Bootstrap'
            ]
        },
        {
            image: require('../assets/images/works/Admin Slip Gaji.png'),
            title: 'Salary Management',
            description: 'This website was created to manage employee salaries from a company',
            download: 'https://github.com/Fajar3108/slip-gaji',
            view: '',
            tags: [
                'Laravel', 'Bootstrap'
            ]
        },
        {
            image: require('../assets/images/works/School Fintech.png'),
            title: 'School Fintech',
            description: 'This website was created to digitize transactions in schools, where users can top up, transfer, withdraw, and buy products',
            download: 'https://github.com/Fajar3108/usk',
            view: '',
            tags: [
                'Laravel', 'Bootstrap'
            ]
        },
    ]

    return (
        <div id="works" className="md:overflow-y-auto md:h-screen">
            {
                works.map((work) => (
                <div className="w-full bg-gray-400 relative overflow-hidden group mb-3" key={nanoid()}>
                    <img src={work.image} alt=" " className="w-full object-cover h-96" />
                    <div className="p-4 w-full absolute bg-black/70 z-50 -bottom-full group-hover:bottom-0 transition-all text-white">
                        <h2 className="text-xl mb-1">{work.title}</h2>
                        <div className="text-blue-600">
                            {
                                work.tags.map((tag) => (
                                    <span className="mr-2" key={nanoid()}>#{tag}</span>
                                ))
                            }
                        </div>
                        <p className="text-sm text-gray-200">{work.description}</p>
                        <div className="flex">
                            {
                                work.view.length > 0 ? <a className="px-12 py-2 text-sm mt-3 cursor-pointer bg-transparent border text-white hover:bg-blue-600 hover:text-white transition-all" href={work.view} target="_blank" rel="noreferrer">View</a> : "" 
                            }
                            <a className="px-12 py-2 text-sm mt-3 ml-1 cursor-pointer bg-transparent border text-white hover:bg-blue-600 hover:text-white transition-all" href={work.download} target="_blank" rel="noreferrer">Download</a>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Works;