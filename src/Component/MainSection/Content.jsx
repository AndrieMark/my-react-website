// import './Content.css';
import '../CSS/Content.css'

function Content() {
    return (
        <div className="content-wrapper">
            {/* Header */}
            <h1 className="main-heading">
                Lorem, ipsum. <span className="highlight">Lorem.</span> Lorem, ipsum.
            </h1>

            {/* Paragraph */}
            <p className="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, error? Facilis, voluptate quod, labore rem eum sed distinctio doloribus est blanditiis corrupti necessitatibus quasi impedit delectus ex veritatis enim praesentium.
            </p>

            {/* Button with arrow */}
            <div className="button-wrapper">
                <button className="cta-button">Lorem, ipsum dolor.</button>
                <div className="arrow-down"></div>
            </div>

            {/* Cards */}
            <div className="card-container">
                <div className="card">
                    <h3>Lorem. 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="card">
                    <h3>Lorem. 2</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="card">
                    <h3>Lorem. 3</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
                <div className="card">
                    <h3>Lorem. 4</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                </div>
            </div>
        </div>
    );
}

export default Content;
