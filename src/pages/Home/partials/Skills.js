const Skills = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'PHP', 'GIT', 'MYSQL','Figma', 'Bootstrap', 'Tailwind', 'Laravel', 'React JS',
    ];

    return (
        <div id='skills' className="py-6 border-b-2">
            <h4 className="font-bold text-gray-500">SKILLS</h4>
            <div className="flex flex-wrap mt-1">
                {
                    skills.map((skill) => (
                        <p className="px-2 py-1 mr-1 mb-1 bg-white text-gray-500 border border-gray-500 text-sm">{skill}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;