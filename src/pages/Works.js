import { nanoid } from "nanoid";

const Works = () => {
    const works = [
        {
            image: 'https://i.pinimg.com/736x/de/cf/f0/decff0dd4cb679eb1a94dfb4b1c605c9.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/da586d71391479.5bc43cb04c5b3.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
        {
            image: 'https://www.talentvis.com/files/images/blog/2021/09/6758222e_Beginners-Guide-to-New-Skill-UI-design.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
        {
            image: 'https://i.pinimg.com/736x/cf/d0/0f/cfd00ff613363792d38fb666df03331e.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
    ]

    return (
        <div id="works" className="md:overflow-y-auto md:h-screen">
            {
                works.map((work) => (
                <div className="w-full bg-gray-400 relative overflow-hidden group mb-3" key={nanoid()}>
                    <img src={work.image} alt=" " className="w-full object-cover" />
                    <div className="p-4 absolute bg-black/50 z-50 -bottom-72 group-hover:bottom-0 transition-all text-white">
                        <h2 className="text-xl mb-1">{work.title}</h2>
                        <p className="text-sm text-gray-200">{work.description}</p>
                        <div className="flex">
                            <a className="px-12 py-2 text-sm mt-3 cursor-pointer bg-transparent border text-white hover:bg-blue-600 hover:text-white transition-all" href={work.view}>View</a>
                            <a className="px-12 py-2 text-sm mt-3 ml-1 cursor-pointer bg-transparent border text-white hover:bg-blue-600 hover:text-white transition-all" href={work.download}>Download</a>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Works;