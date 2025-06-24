import '../CSS/Content.css';
import picture from '../Assests/Img/ts-avatar.jpg';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-blue/theme.css';  // or lara-dark-blue for dark theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function Content() {
    const products = [
        {
            img: picture,
            fuel: "Petrol",
            model: "2020 Model",
            seats: 5,
            title: "ASD, Camry 2.5 v",
            description: "qweqweqwe",
            price: "₱7000"
        },
        {
            img: picture,
            fuel: "Diesel",
            model: "2022 Model",
            seats: 7,
            title: "TorqueMax, X5",
            description: "Spacious family SUV.",
            price: "₱8500"
        },
        {
            img: picture,
            fuel: "Electric",
            model: "2024 Model",
            seats: 4,
            title: "Tesla Model 3",
            description: "Efficient electric drive.",
            price: "₱9000"
        },
        {
            img: picture,
            fuel: "Hybrid",
            model: "2023 Model",
            seats: 5,
            title: "EcoDrive Plus",
            description: "Hybrid car with style.",
            price: "₱7500"
        }
    ];

    return (
        <div className="content-wrapper">
            <h1 className="main-heading">
                Lorem, ipsum. <span className="highlight">Lorem.</span> Lorem, ipsum.
            </h1>

            <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptate quod, labore rem eum sed.
            </p>

            <div className="button-wrapper">
                <button className="cta-button">Lorem, ipsum dolor.</button>
                <div className="arrow-down"></div>
            </div>

            <div className="card-container">
                {products.map((product, index) => (
                    <div className="card" key={index}>
                        <div className="card-img">
                            <img src={product.img} alt={product.title} />
                            <div className="card-overlay">
                                <span>⛽ {product.fuel}</span>
                                <span>🚗 {product.model}</span>
                                <span>🧍 {product.seats} seats</span>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="card-title">
                                {product.title}
                                <span className="card-price">
                                    {product.price}
                                    <span className="card-price-label"> Price</span>
                                </span>
                            </div>

                            <div className="card-description">{product.description}</div>

                            <div className="card-actions">
                                <Button 
                                    icon="pi pi-info-circle" 
                                    label="View Details" 
                                    className="p-button-outlined" 
                                    severity="info"
                                />
                                <Button 
                                    icon="pi pi-cart-arrow-down" 
                                    label="Booking" 
                                    className="p-button-sm p-button-primary" 
                                    outlined 
                                />
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
}

export default Content;
