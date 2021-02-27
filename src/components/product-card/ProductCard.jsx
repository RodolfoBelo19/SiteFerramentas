import '../../styles/component_styles/ProductCard.css'

export default function ProductCard(props) {
    return (
        <div className="grid_content">
            <div className="prod-img" alt="prod"/>
            <p className="prod-name">{props.name}</p>
            <p className="prod-price">R$ {props.price}</p>
        </div>
    )
}