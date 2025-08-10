import React, { useState, useEffect } from 'react';
import { FaHeart, FaShareAlt, FaCode, FaCss3, FaTimes, FaStar, FaSearch } from 'react-icons/fa';

// CSS Library Component
export const CssLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('buttons');
  const [activeVariant, setActiveVariant] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [copied, setCopied] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [shareLink, setShareLink] = useState('');

  // All components data
  const components = {
    buttons: {
      title: 'Buttons',
      description: 'Various button styles for different actions and states',
      variants: [
        {
          name: 'Primary Button',
          description: 'A solid button for primary actions',
          css: `.btn-primary {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2563eb;
}`,
          example: <button className="btn-primary">Primary Button</button>
        },
        {
          name: 'Outline Button',
          description: 'A button with outline style for secondary actions',
          css: `.btn-outline {
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: #3b82f60d;
}`,
          example: <button className="btn-outline">Outline Button</button>
        },
        {
          name: 'Ghost Button',
          description: 'A minimal button with no background or border',
          css: `.btn-ghost {
  background-color: transparent;
  color: #3b82f6;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-ghost:hover {
  background-color: #3b82f60d;
}`,
          example: <button className="btn-ghost">Ghost Button</button>
        }
      ]
    },
    inputs: {
      title: 'Inputs',
      description: 'Stylish form inputs for better user experience',
      variants: [
        {
          name: 'Standard Input',
          description: 'A clean input field with subtle styling',
          css: `.input-standard {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-standard:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}`,
          example: <input type="text" className="input-standard" placeholder="Standard Input" />
        },
        {
          name: 'Floating Label Input',
          description: 'Input with animated floating label',
          css: `.input-floating {
  position: relative;
  margin-top: 20px;
}

.input-floating input {
  width: 100%;
  padding: 15px 10px 5px 10px;
  border: none;
  border-bottom: 1px solid #d1d5db;
  font-size: 16px;
  background-color: transparent;
}

.input-floating label {
  position: absolute;
  top: 15px;
  left: 10px;
  color: #6b7280;
  transition: all 0.3s;
  pointer-events: none;
}

.input-floating input:focus + label,
.input-floating input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 12px;
  color: #3b82f6;
}

.input-floating input:focus {
  outline: none;
  border-bottom-color: #3b82f6;
}`,
          example: (
            <div className="input-floating">
              <input type="text" id="float-input" placeholder=" " />
              <label htmlFor="float-input">Floating Label</label>
            </div>
          )
        }
      ]
    },
    cards: {
      title: 'Cards',
      description: 'Flexible card components for content display',
      variants: [
        {
          name: 'Basic Card',
          description: 'Simple card with shadow and rounded corners',
          css: `.card-basic {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
}

.card-basic h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #1e293b;
}

.card-basic p {
  color: #64748b;
  font-size: 14px;
}`,
          example: (
            <div className="card-basic">
              <h3>Basic Card</h3>
              <p>This is a simple card component with shadow and rounded corners.</p>
            </div>
          )
        },
        {
          name: 'Image Card',
          description: 'Card with header image and content',
          css: `.card-image {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
}

.card-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-image-content {
  padding: 15px;
}

.card-image-content h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #1e293b;
}

.card-image-content p {
  color: #64748b;
  font-size: 14px;
}`,
          example: (
            <div className="card-image">
              <img src="https://via.placeholder.com/300x150" alt="Card" />
              <div className="card-image-content">
                <h3>Image Card</h3>
                <p>This card includes an image on top.</p>
              </div>
            </div>
          )
        }
      ]
    },
    loaders: {
      title: 'Loaders',
      description: 'Animated loading indicators',
      variants: [
        {
          name: 'Spinner',
          description: 'Circular spinning loader',
          css: `.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
          example: <div className="loader-spinner"></div>
        },
        {
          name: 'Dots',
          description: 'Three bouncing dots loader',
          css: `.loader-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 40px;
}

.loader-dots div {
  width: 10px;
  height: 10px;
  background-color: #3b82f6;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.loader-dots div:nth-child(1) {
  animation-delay: -0.32s;
}

.loader-dots div:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1);
  }
}`,
          example: (
            <div className="loader-dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )
        }
      ]
    },
    forms: {
      title: 'Forms',
      description: 'Complete form styles and layouts',
      variants: [
        {
          name: 'Login Form',
          description: 'Complete login form with inputs and button',
          css: `.login-form {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 350px;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #1e293b;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #334155;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}

.form-submit {
  width: 100%;
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-submit:hover {
  background-color: #2563eb;
}`,
          example: (
            <form className="login-form">
              <h2>Login</h2>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="form-submit">Login</button>
            </form>
          )
        }
      ]
    },
    radio: {
      title: 'Radio Buttons',
      description: 'Custom radio button styles',
      variants: [
        {
          name: 'Standard Radio',
          description: 'Custom styled radio buttons',
          css: `.radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-option input {
  display: none;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  transition: border-color 0.3s;
}

.radio-option input:checked + .radio-custom {
  border-color: #3b82f6;
}

.radio-option input:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  background-color: #3b82f6;
  border-radius: 50%;
}

.radio-label {
  color: #334155;
}`,
          example: (
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="radio-group" />
                <span className="radio-custom"></span>
                <span className="radio-label">Option 1</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="radio-group" />
                <span className="radio-custom"></span>
                <span className="radio-label">Option 2</span>
              </label>
            </div>
          )
        }
      ]
    },
    animations: {
      title: 'Animations',
      description: 'CSS animations and transitions',
      variants: [
        {
          name: 'Fade In',
          description: 'Element fades in smoothly',
          css: `.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
          example: <div className="fade-in" style={{padding: '20px', background: '#3b82f6', color: 'white'}}>Fading Element</div>
        },
        {
          name: 'Bounce',
          description: 'Element bounces into view',
          css: `.bounce {
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
}`,
          example: <div className="bounce" style={{padding: '20px', background: '#3b82f6', color: 'white'}}>Bouncing Element</div>
        }
      ]
    },
    patterns: {
      title: 'Patterns',
      description: 'Background patterns and textures',
      variants: [
        {
          name: 'Checkerboard',
          description: 'Classic checkerboard pattern',
          css: `.pattern-checkerboard {
  width: 200px;
  height: 200px;
  background-color: #f1f5f9;
  background-image: 
    linear-gradient(45deg, #e2e8f0 25%, transparent 25%),
    linear-gradient(-45deg, #e2e8f0 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e2e8f0 75%),
    linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}`,
          example: <div className="pattern-checkerboard"></div>
        },
        {
          name: 'Dots',
          description: 'Polka dot pattern',
          css: `.pattern-dots {
  width: 200px;
  height: 200px;
  background-color: #f1f5f9;
  background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
  background-size: 15px 15px;
}`,
          example: <div className="pattern-dots"></div>
        }
      ]
    }
  };

  // Copy to clipboard with animation
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate share link
  const generateShareLink = (category, variantIndex) => {
    const baseUrl = window.location.href.split('?')[0];
    const link = `${baseUrl}?category=${category}&variant=${variantIndex}`;
    setShareLink(link);
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  // Check URL for shared component
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const variant = params.get('variant');
    
    if (category && components[category] && variant) {
      setActiveCategory(category);
      setActiveVariant(parseInt(variant));
    }
  }, []);

  // Toggle favorite
  const toggleFavorite = (category, variantIndex) => {
    const key = `${category}-${variantIndex}`;
    if (favorites.includes(key)) {
      setFavorites(favorites.filter(fav => fav !== key));
    } else {
      setFavorites([...favorites, key]);
    }
  };

  // Filter favorites
  const favoriteComponents = favorites.map(fav => {
    const [category, variantIndex] = fav.split('-');
    return {
      category,
      variantIndex: parseInt(variantIndex),
      ...components[category].variants[variantIndex],
      categoryTitle: components[category].title
    };
  });

  // Filter components based on search query
  const filteredCategories = Object.keys(components).filter(category => {
    if (!searchQuery) return true;
    return (
      components[category].title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      components[category].description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      components[category].variants.some(variant => 
        variant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        variant.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <div className="css-library">
      <header className="header">
        <div className="header-content">
          <FaCss3 className="logo" />
          <h1>Pure CSS Component Library</h1>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <nav className="main-nav">
            <button 
              className={`nav-btn ${!showFavorites ? 'active' : ''}`}
              onClick={() => setShowFavorites(false)}
            >
              Explore
            </button>
            <button 
              className={`nav-btn ${showFavorites ? 'active' : ''}`}
              onClick={() => setShowFavorites(true)}
            >
              Favorites {favorites.length > 0 && <span className="badge">{favorites.length}</span>}
            </button>
          </nav>
        </div>
      </header>

      <div className="main-container">
        {!showFavorites ? (
          <>
            <nav className="sidebar">
              {filteredCategories.map(category => (
                <button
                  key={category}
                  className={`sidebar-item ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveVariant(0);
                  }}
                >
                  {components[category].title}
                </button>
              ))}
              {filteredCategories.length === 0 && (
                <div className="no-results">No components found</div>
              )}
            </nav>

            <main className="content">
              <div className="category-header">
                <h2>{components[activeCategory].title}</h2>
                <p>{components[activeCategory].description}</p>
              </div>

              <div className="variant-selector">
                {components[activeCategory].variants.map((variant, index) => (
                  <button
                    key={index}
                    className={`variant-tab ${activeVariant === index ? 'active' : ''}`}
                    onClick={() => setActiveVariant(index)}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>

              <div className="component-display">
                <div className="component-preview">
                  {components[activeCategory].variants[activeVariant].example}
                </div>

                <div className="component-description">
                  <h3>{components[activeCategory].variants[activeVariant].name}</h3>
                  <p>{components[activeCategory].variants[activeVariant].description}</p>
                </div>

                <div className="component-actions">
                  <button 
                    className={`action-btn ${favorites.includes(`${activeCategory}-${activeVariant}`) ? 'favorited' : ''}`}
                    onClick={() => toggleFavorite(activeCategory, activeVariant)}
                  >
                    <FaHeart /> Favorite
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => generateShareLink(activeCategory, activeVariant)}
                  >
                    <FaShareAlt /> Share
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => copyToClipboard(components[activeCategory].variants[activeVariant].css)}
                  >
                    <FaCode /> Copy CSS
                  </button>
                </div>

                {copied && (
                  <div className="copy-notification">
                    <div className="copy-progress"></div>
                    CSS Copied!
                  </div>
                )}

                <div className="code-container">
                  <pre>
                    <code>{components[activeCategory].variants[activeVariant].css}</code>
                  </pre>
                </div>
              </div>
            </main>
          </>
        ) : (
          <main className="favorites-content">
            <h2>Your Favorites</h2>
            
            {favoriteComponents.length > 0 ? (
              <div className="favorites-grid">
                {favoriteComponents.map((fav, index) => (
                  <div key={index} className="favorite-item">
                    <div className="fav-category">{fav.categoryTitle}</div>
                    <div className="fav-preview">{fav.example}</div>
                    <div className="fav-info">
                      <div className="fav-name">{fav.name}</div>
                      <div className="fav-desc">{fav.description}</div>
                    </div>
                    <div className="fav-actions">
                      <button 
                        className="fav-remove"
                        onClick={() => toggleFavorite(fav.category, fav.variantIndex)}
                      >
                        <FaTimes />
                      </button>
                      <button 
                        className="fav-view"
                        onClick={() => {
                          setActiveCategory(fav.category);
                          setActiveVariant(fav.variantIndex);
                          setShowFavorites(false);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-favorites">
                <h3>No favorites yet</h3>
                <p>Explore components and click the heart to add them here</p>
                <button 
                  className="explore-btn"
                  onClick={() => setShowFavorites(false)}
                >
                  Explore Components
                </button>
              </div>
            )}
          </main>
        )}
      </div>

      <style jsx>{`
        .css-library {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .header {
          background-color: #1e293b;
          color: white;
          padding: 1rem 2rem;
          position: relative;
        }

        .header-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #3b82f6;
        }

        h1 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .search-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin-bottom: 1rem;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }

        .search-input {
          width: 100%;
          padding: 0.5rem 1rem 0.5rem 2rem;
          border-radius: 4px;
          border: none;
          font-size: 1rem;
        }

        .main-nav {
          display: flex;
          margin-top: 0.5rem;
          gap: 1rem;
        }

        .nav-btn {
          padding: 0.5rem 1rem;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          position: relative;
          font-size: 1rem;
        }

        .nav-btn.active {
          color: white;
        }

        .nav-btn.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #3b82f6;
        }

        .badge {
          background-color: #3b82f6;
          color: white;
          border-radius: 50%;
          padding: 0.1rem 0.4rem;
          font-size: 0.7rem;
          margin-left: 0.3rem;
        }

        .main-container {
          display: flex;
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .sidebar {
          width: 250px;
          background-color: #f8fafc;
          border-right: 1px solid #e2e8f0;
          padding: 1rem 0;
          overflow-y: auto;
        }

        .sidebar-item {
          display: block;
          width: 100%;
          padding: 0.75rem 1.5rem;
          text-align: left;
          border: none;
          background: none;
          cursor: pointer;
          color: #334155;
          transition: all 0.2s;
        }

        .sidebar-item:hover {
          background-color: #e2e8f0;
        }

        .sidebar-item.active {
          background-color: #e0f2fe;
          color: #0369a1;
          font-weight: 600;
          border-right: 3px solid #0ea5e9;
        }

        .no-results {
          padding: 1rem;
          color: #64748b;
          text-align: center;
        }

        .content, .favorites-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .favorites-content {
          padding: 2rem;
        }

        .favorites-content h2 {
          margin-bottom: 1.5rem;
          color: #1e293b;
        }

        .category-header {
          margin-bottom: 2rem;
        }

        .category-header h2 {
          font-size: 1.75rem;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .category-header p {
          color: #64748b;
        }

        .variant-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 1rem;
          flex-wrap: wrap;
        }

        .variant-tab {
          padding: 0.5rem 1rem;
          background: none;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .variant-tab:hover {
          background-color: #f1f5f9;
          color: #334155;
        }

        .variant-tab.active {
          background-color: #e0f2fe;
          color: #0369a1;
          font-weight: 600;
        }

        .component-display {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          position: relative;
        }

        .component-preview {
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          min-height: 200px;
        }

        .component-description {
          padding: 1.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .component-description h3 {
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .component-description p {
          color: #64748b;
        }

        .component-actions {
          display: flex;
          padding: 1rem 1.5rem;
          gap: 0.75rem;
          border-bottom: 1px solid #e2e8f0;
          flex-wrap: wrap;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #f1f5f9;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          color: #334155;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background-color: #e2e8f0;
        }

        .action-btn.favorited {
          background-color: #fee2e2;
          color: #b91c1c;
        }

        .copy-notification {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: #1e293b;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
          z-index: 10;
        }

        .copy-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: #3b82f6;
          animation: progress 2s linear forwards;
        }

        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }

        .code-container {
          padding: 1.5rem;
          background-color: #f8fafc;
        }

        pre {
          background-color: #1e293b;
          color: #f8fafc;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9rem;
        }

        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .favorite-item {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .fav-category {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 0.5rem;
        }

        .fav-preview {
          margin: 1rem 0;
          display: flex;
          justify-content: center;
          flex-grow: 1;
          align-items: center;
        }

        .fav-info {
          margin-bottom: 1rem;
        }

        .fav-name {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.3rem;
        }

        .fav-desc {
          color: #64748b;
          font-size: 0.8rem;
        }

        .fav-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .fav-remove {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0.3rem;
        }

        .fav-view {
          padding: 0.3rem 0.8rem;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .empty-favorites {
          text-align: center;
          margin-top: 3rem;
          color: #64748b;
        }

        .empty-favorites h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .empty-favorites p {
          margin-bottom: 1.5rem;
        }

        .explore-btn {
          padding: 0.5rem 1rem;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .explore-btn:hover {
          background-color: #2563eb;
        }

        /* Component styles that will be used in examples */
        .btn-primary {
          background-color: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .btn-primary:hover {
          background-color: #2563eb;
        }

        .btn-outline {
          background-color: transparent;
          color: #3b82f6;
          border: 2px solid #3b82f6;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background-color: #3b82f60d;
        }

        .btn-ghost {
          background-color: transparent;
          color: #3b82f6;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .btn-ghost:hover {
          background-color: #3b82f60d;
        }

        .input-standard {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #d1d5db;
          border-radius: 5px;
          font-size: 16px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .input-standard:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .input-floating {
          position: relative;
          margin-top: 20px;
          width: 100%;
        }

        .input-floating input {
          width: 100%;
          padding: 15px 10px 5px 10px;
          border: none;
          border-bottom: 1px solid #d1d5db;
          font-size: 16px;
          background-color: transparent;
        }

        .input-floating label {
          position: absolute;
          top: 15px;
          left: 10px;
          color: #6b7280;
          transition: all 0.3s;
          pointer-events: none;
        }

        .input-floating input:focus + label,
        .input-floating input:not(:placeholder-shown) + label {
          top: 0;
          font-size: 12px;
          color: #3b82f6;
        }

        .input-floating input:focus {
          outline: none;
          border-bottom-color: #3b82f6;
        }

        .card-basic {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 300px;
        }

        .card-basic h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .card-basic p {
          color: #64748b;
          font-size: 14px;
        }

        .card-image {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 300px;
        }

        .card-image img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .card-image-content {
          padding: 15px;
        }

        .card-image-content h3 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #1e293b;
        }

        .card-image-content p {
          color: #64748b;
          font-size: 14px;
        }

        .loader-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e2e8f0;
          border-top: 4px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          height: 40px;
        }

        .loader-dots div {
          width: 10px;
          height: 10px;
          background-color: #3b82f6;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .loader-dots div:nth-child(1) {
          animation-delay: -0.32s;
        }

        .loader-dots div:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
          }
          40% { 
            transform: scale(1);
          }
        }

        .login-form {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 25px;
          max-width: 350px;
        }

        .login-form h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #1e293b;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #334155;
          font-size: 14px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
        }

        .form-submit {
          width: 100%;
          padding: 10px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .form-submit:hover {
          background-color: #2563eb;
        }

        .radio-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .radio-option input {
          display: none;
        }

        .radio-custom {
          width: 18px;
          height: 18px;
          border: 2px solid #d1d5db;
          border-radius: 50%;
          margin-right: 10px;
          position: relative;
          transition: border-color 0.3s;
        }

        .radio-option input:checked + .radio-custom {
          border-color: #3b82f6;
        }

        .radio-option input:checked + .radio-custom::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 8px;
          height: 8px;
          background-color: #3b82f6;
          border-radius: 50%;
        }

        .radio-label {
          color: #334155;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 0.5s ease-in forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .bounce {
          animation: bounce 0.5s ease;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-20px);}
          60% {transform: translateY(-10px);}
        }

        .pattern-checkerboard {
          width: 200px;
          height: 200px;
          background-color: #f1f5f9;
          background-image: 
            linear-gradient(45deg, #e2e8f0 25%, transparent 25%),
            linear-gradient(-45deg, #e2e8f0 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #e2e8f0 75%),
            linear-gradient(-45deg, transparent 75%, #e2e8f0 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }

        .pattern-dots {
          width: 200px;
          height: 200px;
          background-color: #f1f5f9;
          background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
          background-size: 15px 15px;
        }
      `}</style>
    </div>
  );
};

// Export the CSS styles for external use
export const cssStyles = {
  buttons: {
    primary: `.btn-primary {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #2563eb;
}`,
    outline: `.btn-outline {
  background-color: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background-color: #3b82f60d;
}`,
    ghost: `.btn-ghost {
  background-color: transparent;
  color: #3b82f6;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-ghost:hover {
  background-color: #3b82f60d;
}`
  },
  inputs: {
    standard: `.input-standard {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-standard:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}`,
    floating: `.input-floating {
  position: relative;
  margin-top: 20px;
}

.input-floating input {
  width: 100%;
  padding: 15px 10px 5px 10px;
  border: none;
  border-bottom: 1px solid #d1d5db;
  font-size: 16px;
  background-color: transparent;
}

.input-floating label {
  position: absolute;
  top: 15px;
  left: 10px;
  color: #6b7280;
  transition: all 0.3s;
  pointer-events: none;
}

.input-floating input:focus + label,
.input-floating input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 12px;
  color: #3b82f6;
}

.input-floating input:focus {
  outline: none;
  border-bottom-color: #3b82f6;
}`
  },
  // ... (similar exports for other component categories)
};

export default CssLibrary;