import './styles/ProjectCard.css';

interface Props {
    heading: string;
    image: string;
    caption: string;
}

function ProjectCard({heading, image, caption}: Props){
    return <>
        <div className='card-div'>
            <div className="img-div">
                <img src={image} height="200px" width="200px"/>
            </div>
            <div className='content-div'>
                <h1>{heading}</h1>
                <p>{caption}</p>
            </div>
        </div>
    </>
}

export default ProjectCard