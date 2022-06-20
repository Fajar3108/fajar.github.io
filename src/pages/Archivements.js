import { nanoid } from 'nanoid'

const Archivements = () => {
    const archivements = [
        require('../assets/images/certificates/LKSN Maulana Fajar Ibrahim.jpg'),
        require('../assets/images/certificates/Fasilitator Lintasarta Digital School 2021-19.jpg'),
        require('../assets/images/certificates/FasilitatorProgramCloudandBackEndDeveloperScholarshipBatch10131072021-27.jpg'),
        require('../assets/images/certificates/Sertifikat PKL Maulana SMKN10.jpg'),
    ]

    return (
        <div className="grid md:grid-cols-2 gap-2">
            {
                archivements.map((archivement) => (
                    <div className="w-full overflow-hidden group" key={nanoid()}>
                        <a href="https://drive.google.com/drive/folders/12vJjHCnFMBEvcvfMyGIuyCjXC-LI_vo5" target="_blank" rel="noreferrer">
                            <img src={archivement} alt=" " className="w-full object-cover group-hover:scale-[1.2] transition-all " />
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default Archivements