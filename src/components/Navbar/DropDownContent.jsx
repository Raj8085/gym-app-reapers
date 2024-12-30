import "./DropDown.css";

const DropDownContent = () => {
  return (
    <div className="menu">
      <div className="menu-column">
        <h3>NEW RELEASES</h3>
        <p>BEST SELLERS</p>
        <p>GIFT GUIDE</p>
      </div>
      <div className="menu-column">
        <h3>SPORTS BRAS</h3>
        <p>Light Support</p>
        <p>Medium Support</p>
        <p>Heavy Support</p>
        <p className="shop-all">SHOP ALL</p>

        <h3>TOPS</h3>
        <p>Long Sleeve</p>
        <p>Tanks</p>
        <p className="shop-all">SHOP ALL</p>
      </div>
      <div className="menu-column">
        <h3>SHORTS</h3>
        <p>Seamless</p>
        <p>Pocketed</p>
        <p className="shop-all">SHOP ALL</p>

        <h3>LEGGINGS</h3>
        <p>Seamless</p>
        <p>Flared</p>
        <p>Pocketed</p>
        <p className="shop-all">SHOP ALL</p>
      </div>
      <div className="menu-column">
        <h3>OUTERWEAR</h3>
        <p>Hoodies</p>
        <p>Quarterzips</p>
        <p>Jackets</p>
        <p className="shop-all">SHOP ALL</p>
      </div>
      <div className="menu-column">
        <h3>COLLECTIONS</h3>
        <p>Infinity</p>
        <p>Performance</p>
        <p>Legacy</p>
        <p>Battle</p>
        <p className="shop-all">SHOP ALL</p>
      </div>
      <div className="menu-image">
        <img
          src="https://via.placeholder.com/200" 
          alt="Legacy Collection"
        />
        <div className="image-overlay">LEGACY COLLECTION</div>
      </div>
    </div>
  );
};

export default DropDownContent;
