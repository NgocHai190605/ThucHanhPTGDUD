import "./ProductCard.css";
import shirt from '../../assets/images/shirt.jpg'

function ProductCard(){
    return(
        <div className="product-card">
            <img src="{shirt}" alt="Ao thun" className="ao-image"/>
            <div className="info-ao">
                <h3 className="ten-ao">Ao thun nam</h3>
                <p className="gia-ao">199.000</p>
                <button className="add-btn">Add to cart</button>
            </div>
        </div>
    );
}
export default ProductCard;