import React, { useState, useEffect } from 'react';
import { 
  FiShoppingCart, FiPlus, FiMinus, FiX, FiSearch, FiStar, 
  FiShare2, FiChevronDown, FiClock, FiExternalLink
} from 'react-icons/fi';
import { BsBoxSeam, BsCheckCircleFill, BsCurrencyExchange } from 'react-icons/bs';
import { GiCube, GiChessQueen } from 'react-icons/gi';
import { FaRegStar, FaStar, FaStarHalfAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import './Store.css';

// Product data with multiple images and buy links
const products = [
  {
    id: 1,
    name: "GAN 356 M Magnetic 3x3 Speed Cube",
    price: 49.99,
    description: "Flagship magnetic speed cube with adjustable magnets and tensioning",
    category: "cubes",
    rating: 4.9,
    reviews: 128,
    images: [
      "https://www.cubelelo.com/cdn/shop/files/1_76e161a2-4788-4b5e-b8a2-37dc4fcb4484_700x.png?v=1713506405",
      "https://www.cubelelo.com/cdn/shop/files/1_76e161a2-4788-4b5e-b8a2-37dc4fcb4484_700x.png?v=1713506405",
      "https://www.cubelelo.com/cdn/shop/files/1_76e161a2-4788-4b5e-b8a2-37dc4fcb4484_700x.png?v=1713506405"
    ],
    details: "The GAN 356 M is a premium magnetic speed cube featuring GAN's unique GES v3 tensioning system with 48 adjustable magnets for customizable performance. The frosted surface provides excellent grip while solving.",
    inStock: true,
    buyLink: "https://example.com/buy/gan356m",
    shareLink: "https://cuchcostore.com/products/gan356m"
  },
  {
    id: 2,
    name: "Professional Tournament Chess Set",
    price: 89.99,
    description: "Staunton tournament chess set with weighted pieces",
    category: "chess",
    rating: 4.8,
    reviews: 96,
    images: [
      "https://m.media-amazon.com/images/I/81qK+QthQoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bZJSmqJVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81fVdHJyWBL._AC_SL1500_.jpg"
    ],
    details: "This professional tournament chess set meets all standards. The pieces are weighted and felted for smooth movement. The board is made of tournament-grade materials.",
    inStock: true,
    buyLink: "https://example.com/buy/chesstournament",
    shareLink: "https://cuchcostore.com/products/chesstournament"
  },
  {
    id: 3,
    name: "MoYu RS3M 2020 Speed Cube",
    price: 12.99,
    description: "Budget-friendly magnetic speed cube with excellent performance",
    category: "cubes",
    rating: 4.7,
    reviews: 215,
    images: [
      "https://m.media-amazon.com/images/I/61Yy+g+1QmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Yy+g+1QmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61Yy+g+1QmL._AC_SL1500_.jpg"
    ],
    details: "The MoYu RS3M 2020 is an excellent budget option for speedcubers, featuring magnetic positioning and smooth turning right out of the box.",
    inStock: true,
    buyLink: "https://example.com/buy/moyurs3m",
    shareLink: "https://cuchcostore.com/products/moyurs3m"
  },
  {
    id: 4,
    name: "Travel Magnetic Chess Set",
    price: 24.99,
    description: "Compact magnetic chess set for on-the-go play",
    category: "chess",
    rating: 4.5,
    reviews: 87,
    images: [
      "https://m.media-amazon.com/images/I/81fVdHJyWBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81fVdHJyWBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81fVdHJyWBL._AC_SL1500_.jpg"
    ],
    details: "This portable chess set features magnetic pieces that stay in place during travel. The board folds neatly and includes storage for all pieces.",
    inStock: true,
    buyLink: "https://example.com/buy/travelchess",
    shareLink: "https://cuchcostore.com/products/travelchess"
  },
  {
    id: 5,
    name: "GAN Megaminx M",
    price: 59.99,
    description: "High-end magnetic megaminx puzzle",
    category: "cubes",
    rating: 4.8,
    reviews: 42,
    images: [
      "https://m.media-amazon.com/images/I/71vZ4VqPRBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vZ4VqPRBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vZ4VqPRBL._AC_SL1500_.jpg"
    ],
    details: "The GAN Megaminx M features 132 magnets for precise control and stability during solves. The innovative design provides smooth turning and excellent corner cutting.",
    inStock: true,
    buyLink: "https://example.com/buy/ganmegaminx",
    shareLink: "https://cuchcostore.com/products/ganmegaminx"
  },
  {
    id: 6,
    name: "Luxury Wooden Chess Set",
    price: 129.99,
    description: "Handcrafted wooden chess set with elegant design",
    category: "chess",
    rating: 4.9,
    reviews: 56,
    images: [
      "https://m.media-amazon.com/images/I/81bZJSmqJVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bZJSmqJVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bZJSmqJVL._AC_SL1500_.jpg"
    ],
    details: "This beautiful handcrafted chess set features weighted wooden pieces with felt bottoms and a polished wooden board. Perfect for display and serious play.",
    inStock: true,
    buyLink: "https://example.com/buy/luxurychess",
    shareLink: "https://cuchcostore.com/products/luxurychess"
  },
  {
    id: 7,
    name: "YJ MGC 4x4 Speed Cube",
    price: 29.99,
    description: "Professional-grade 4x4 magnetic speed cube",
    category: "cubes",
    rating: 4.7,
    reviews: 93,
    images: [
      "https://m.media-amazon.com/images/I/71H3+3O0MXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71H3+3O0MXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71H3+3O0MXL._AC_SL1500_.jpg"
    ],
    details: "The YJ MGC 4x4 features a unique magnetic positioning system that helps with alignment during solves. The smooth turning and excellent corner cutting make it a favorite among speedcubers.",
    inStock: true,
    buyLink: "https://example.com/buy/yjmgc4x4",
    shareLink: "https://cuchcostore.com/products/yjmgc4x4"
  },
  {
    id: 8,
    name: "Electronic Chess Computer",
    price: 149.99,
    description: "Smart chess computer with multiple difficulty levels",
    category: "chess",
    rating: 4.6,
    reviews: 78,
    images: [
      "https://m.media-amazon.com/images/I/71Qd8UZ1MFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Qd8UZ1MFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Qd8UZ1MFL._AC_SL1500_.jpg"
    ],
    details: "This electronic chess computer offers 100 difficulty levels, from beginner to expert. The LCD display shows moves and game information, and the system includes teaching modes.",
    inStock: true,
    buyLink: "https://example.com/buy/electronicchess",
    shareLink: "https://cuchcostore.com/products/electronicchess"
  }
];

// Currency conversion rates
const currencyRates = {
  USD: 1,
  INR: 82.5,
  EUR: 0.92,
  AED: 3.67,
  GBP: 0.79
};

const Store = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currency, setCurrency] = useState('USD');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [notification, setNotification] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Load data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedSearchHistory = localStorage.getItem('searchHistory');
    const savedCurrency = localStorage.getItem('currency');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedSearchHistory) setSearchHistory(JSON.parse(savedSearchHistory));
    if (savedCurrency) setCurrency(savedCurrency);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    localStorage.setItem('currency', currency);
  }, [cart, searchHistory, currency]);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Currency conversion
  const convertPrice = (price) => {
    return (price * currencyRates[currency]).toFixed(2);
  };

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.trim() && !searchHistory.includes(term)) {
      setSearchHistory(prev => [term, ...prev].slice(0, 5));
    }
  };

  // Add to cart with animation
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      const newCart = existingItem
        ? prevCart.map(item => 
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
      
      // Trigger animation
      const addedItem = newCart.find(item => item.id === product.id);
      addedItem.added = true;
      setTimeout(() => {
        setCart(prev => prev.map(item => 
          item.id === product.id ? { ...item, added: false } : item
        ));
      }, 3000);
      
      return newCart;
    });
    
    showNotification(`${product.name} added to cart`);
  };

  // Remove from cart with animation
  const removeFromCart = (productId) => {
    const product = cart.find(item => item.id === productId);
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    showNotification(`${product.name} removed from cart`, 'error');
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate totals
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Share product
  const shareProduct = (product) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: product.shareLink,
      })
      .then(() => showNotification('Shared successfully'))
      .catch(() => showNotification('Share failed', 'error'));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(product.shareLink);
      showNotification('Link copied to clipboard');
    }
  };

  // Handle buy now
  const handleBuyNow = (product) => {
    window.open(product.buyLink, '_blank');
  };

  // Change product image
  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="store">
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
          <div className="notification-progress"></div>
        </div>
      )}

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <GiCube className="cube-icon" />
            <h1>CUCHCO STORE</h1>
          </div>
          
          <div className="header-actions">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search cubes, chess sets..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setShowSearchHistory(true)}
                onBlur={() => setTimeout(() => setShowSearchHistory(false), 200)}
              />
              <FiSearch className="search-icon" />
              {showSearchHistory && searchHistory.length > 0 && (
                <div className="search-history">
                  <div className="search-history-header">
                    <FiClock />
                    <span>Recent searches</span>
                  </div>
                  {searchHistory.map((term, index) => (
                    <div 
                      key={index} 
                      className="search-history-item"
                      onClick={() => {
                        setSearchTerm(term);
                        setShowSearchHistory(false);
                      }}
                    >
                      {term}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="currency-selector">
              <button 
                className="currency-button"
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              >
                <BsCurrencyExchange />
                <span>{currency}</span>
                <FiChevronDown className={`dropdown-icon ${showCurrencyDropdown ? 'open' : ''}`} />
              </button>
              {showCurrencyDropdown && (
                <div className="currency-dropdown">
                  {Object.keys(currencyRates).map(curr => (
                    <button
                      key={curr}
                      className={`currency-option ${currency === curr ? 'active' : ''}`}
                      onClick={() => {
                        setCurrency(curr);
                        setShowCurrencyDropdown(false);
                      }}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              className="cart-button"
              onClick={() => setIsCartOpen(true)}
            >
              <FiShoppingCart />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="category-nav">
        <div className="category-container">
          <button
            className={`category-button ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button
            className={`category-button ${activeCategory === 'cubes' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cubes')}
          >
            <GiCube />
            <span>Speed Cubes</span>
          </button>
          <button
            className={`category-button ${activeCategory === 'chess' ? 'active' : ''}`}
            onClick={() => setActiveCategory('chess')}
          >
            <GiChessQueen />
            <span>Chess Sets</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => {
              setSelectedProduct(null);
              setCurrentImageIndex(0);
            }}
            addToCart={addToCart}
            currency={currency}
            convertPrice={convertPrice}
            shareProduct={shareProduct}
            buyNow={handleBuyNow}
            currentImageIndex={currentImageIndex}
            changeImage={changeImage}
          />
        ) : (
          <>
            <h2 className="section-title">
              {activeCategory === 'all' ? 'All Products' : 
              activeCategory === 'cubes' ? 'Speed Cubes' : 'Chess Sets'}
            </h2>
            
            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <BsBoxSeam className="empty-icon" />
                <p>No products found matching your criteria</p>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    addToCart={addToCart} 
                    onClick={() => setSelectedProduct(product)}
                    currency={currency}
                    convertPrice={convertPrice}
                    buyNow={handleBuyNow}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <CartSidebar
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setIsCartOpen(false)}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          currency={currency}
          convertPrice={convertPrice}
          buyNow={handleBuyNow}
        />
      )}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, addToCart, onClick, currency, convertPrice, buyNow }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="star half-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image-container" onClick={onClick}>
        <img src={product.images[0]} alt={product.name} className="product-image" />
        {product.inStock ? (
          <span className="in-stock">In Stock</span>
        ) : (
          <span className="out-of-stock">Out of Stock</span>
        )}
      </div>
      <div className="product-details">
        <h3 className="product-name" onClick={onClick}>{product.name}</h3>
        <div className="product-rating">
          {renderStars()}
          <span className="rating-count">({product.reviews})</span>
        </div>
        <p className="product-price">
          {currency} {convertPrice(product.price)}
        </p>
        <div className="product-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="add-to-cart-button"
            disabled={!product.inStock}
          >
            <FiShoppingCart className="cart-icon" />
            Add to Cart
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              buyNow(product);
            }}
            className="buy-now-button"
            disabled={!product.inStock}
          >
            <FiExternalLink className="buy-icon" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Product Details Component
const ProductDetails = ({ 
  product, onBack, addToCart, currency, convertPrice, shareProduct,
  buyNow, currentImageIndex, changeImage
}) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar 
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="product-details-page">
      <button className="back-button" onClick={onBack}>
        &larr; Back to products
      </button>
      
      <div className="product-details-container">
        <div className="product-images">
          <div className="main-image-container">
            <img src={product.images[currentImageIndex]} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                onClick={() => changeImage(index)}
              >
                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-details-info">
          <h2>{product.name}</h2>
          <div className="product-meta">
            <div className="product-rating">
              {renderStars(product.rating)}
              <span>{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
            </div>
            <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <p className="product-price">
            {currency} {convertPrice(product.price)}
          </p>
          
          <div className="product-actions">
            <button
              onClick={() => addToCart(product)}
              className="add-to-cart-button"
              disabled={!product.inStock}
            >
              <FiShoppingCart className="cart-icon" />
              Add to Cart
            </button>
            <button
              onClick={() => buyNow(product)}
              className="buy-now-button"
              disabled={!product.inStock}
            >
              <FiExternalLink className="buy-icon" />
              Buy Now
            </button>
            <button 
              className="share-button"
              onClick={() => shareProduct(product)}
            >
              <FiShare2 /> Share
            </button>
          </div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Sidebar Component
const CartSidebar = ({ 
  cart, cartTotal, onClose, updateQuantity, removeFromCart,
  currency, convertPrice, buyNow
}) => {
  return (
    <div className="cart-overlay">
      <div className="cart-backdrop" onClick={onClose}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart ({cart.reduce((count, item) => count + item.quantity, 0)})</h2>
          <button className="close-cart" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingCart className="empty-cart-icon" />
              <p>Your cart is empty</p>
              <button className="continue-shopping-button" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item) => (
                  <CartItem 
                    key={item.id} 
                    item={item} 
                    updateQuantity={updateQuantity} 
                    removeFromCart={removeFromCart} 
                    currency={currency}
                    convertPrice={convertPrice}
                  />
                ))}
              </ul>
              
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Subtotal:</span>
                  <span>{currency} {convertPrice(cartTotal)}</span>
                </div>
                
                <button
                  className="checkout-button"
                  onClick={() => {
                    cart.forEach(item => buyNow(item));
                    onClose();
                  }}
                >
                  Buy All Items Now
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Cart Item Component
const CartItem = ({ item, updateQuantity, removeFromCart, currency, convertPrice }) => {
  return (
    <li className="cart-item">
      <div className="cart-item-image-container">
        <img src={item.images[0]} alt={item.name} className="cart-item-image" />
        {item.added && (
          <div className="added-confirmation">
            <BsCheckCircleFill className="check-icon" />
            <span>Added to cart</span>
          </div>
        )}
      </div>

      <div className="cart-item-details">
        <div className="cart-item-header">
          <h3>{item.name}</h3>
          <p className="cart-item-price">
            {currency} {convertPrice(item.price * item.quantity)}
          </p>
        </div>
        
        <div className="cart-item-actions">
          <div className="quantity-selector">
            <button 
              className="quantity-button"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <FiMinus />
            </button>
            <span className="quantity-value">{item.quantity}</span>
            <button 
              className="quantity-button"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <FiPlus />
            </button>
          </div>

          <button
            className="remove-item-button"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default Store;