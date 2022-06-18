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
            image: 'https://i.pinimg.com/736x/de/cf/f0/decff0dd4cb679eb1a94dfb4b1c605c9.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
        {
            image: 'https://i.pinimg.com/736x/de/cf/f0/decff0dd4cb679eb1a94dfb4b1c605c9.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
        {
            image: 'https://i.pinimg.com/736x/de/cf/f0/decff0dd4cb679eb1a94dfb4b1c605c9.jpg',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dui platea amet congue faucibus in euismod. Quis in nunc, imperdiet pellentesque.',
            download: '',
            view: '',
        },
    ]

    return (
        <div id="works" className="md:overflow-y-scroll md:h-screen">
            {
                works.map((work) => (
                <div className="w-full bg-gray-400 relative overflow-hidden group mb-3">
                    <img src={work.image} alt=" " className="w-full object-cover" />
                    <div className="p-4 absolute bg-black/50 z-50 -bottom-40 group-hover:bottom-0 transition-all text-white">
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