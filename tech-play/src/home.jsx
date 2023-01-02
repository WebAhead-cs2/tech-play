import React from "react";

function Home(){
    return (
        
        <div className="categories-grid">
            <div className="img-category">
                <img src={require("./categories-pics/console.png")} alt="shit" />
                <div className="cat-name">Consoles</div>
            </div>
            <div className="img-category">
                <img src={require("./categories-pics/laptop.png")} alt="no"/>
                <div className="cat-name">Laptops</div>
            </div>
            <div className="img-category">
                <img src={require("./categories-pics/smartphone.png")} alt="no" />
                <div className="cat-name">Smartphones</div>
            </div>
            <div className="img-category">
                <img src={require("./categories-pics/tablet.png")} alt="no" />
                <div className="cat-name">Tablets</div>
            </div>
            <div className="img-category">
                <img src={require("./categories-pics/smartwatch.png")} alt="no" />
                <div className="cat-name">Smartwatches</div>
            </div>
            <div className="img-category">
                <img src={require("./categories-pics/accesories.png")} alt="no" />
                <div className="cat-name">Accesories</div>
            </div>
        </div>
    )
}

export default Home;