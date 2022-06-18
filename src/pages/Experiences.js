import {nanoid} from 'nanoid';

const Experiences = () => {
    const experiences = [
        {
            company: 'PT Solusi Intek Indonesia',
            position: 'Web Developer Internship',
            date: '5 April 2021 - 5 September 2021',
            description: 'Collaborate in helping to complete assigned projects, Develop village information website and salary management website',
        },
        {
            company: 'Dicoding x Lintasarta',
            position: 'Fasilitator Lintasarta Digischool 2021',
            date: '4 June 2021 - 31 August 2021',
            description: 'Guiding participants so that they can graduate on time with the best results, Help solve problems faced by students during the process of completing class',
        },
        {
            company: 'Dicoding x AWS',
            position: 'Facilitator Program Cloud and Back-End Developer Scholarship 2021',
            date: '10 June 2021 - 4 August 2021',
            description: 'Collaborate in helping to complete assigned projects, Develop village information website and salary management website',
        },
    ];

    return (
        <div id="experiences">
            {
                experiences.map((experience) => (
                    <div className="p-4 border mb-3" key={nanoid()}>
                        <h4 className="font-bold">{experience.company}</h4>
                        <p className="text-sm">{experience.position}</p>
                        <div className="text-sm text-gray-500">
                            <p>{experience.date}</p>
                            <p className="mt-2">{experience.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Experiences;