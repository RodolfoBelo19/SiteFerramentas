import '../../styles/component_styles/StdTitle.css';

export default function StdTitle(props) {
    return (
        <div>
            <div className="title-wrapper">
                <div className="title-cursor"></div><h1 className="about-title">{props.title}</h1>
            </div>
        </div>
    )
}

