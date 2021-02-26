import '../../styles/component_styles/ProductCard.css'

export default function ProductCard(props) {
    return (
        <div className="grid_content">
            <div className="prod-img" alt="prod"/>
            <p className="prod-name">{props.name}</p>
            <h1 className="prod-price">R$ {props.price}</h1>
        </div>
    )
}