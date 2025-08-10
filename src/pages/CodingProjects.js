import React, { useState } from 'react';
import './CodingProjects.css';

const CodingProjects = () => {
  const [projects, setProjects] = useState([
    // HTML/CSS Projects
    {
      id: 1,
      title: "Personal Portfolio Website",
      language: "HTML/CSS",
      level: "Beginner",
      description: "Create a simple portfolio website to showcase your projects.",
      detailedDescription: `
        This project involves building a responsive personal portfolio website using HTML and CSS. 
        The website should include the following sections:
        - Hero section with your name and a brief introduction
        - About Me section with your background and skills
        - Projects section showcasing your work (can link to GitHub)
        - Contact section with a form or your contact information
        
        Key Features:
        - Fully responsive design using media queries
        - Clean, modern layout with proper spacing
        - Semantic HTML5 structure
        - CSS animations for interactive elements
        - Mobile-first approach
        
        Technologies Used: HTML5, CSS3, Flexbox/Grid
      `,
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <style>
    /* Basic Reset */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    /* Header Styles */
    header {
      background: #3498db;
      color: white;
      padding: 2rem 0;
      text-align: center;
    }
    
    /* Navigation */
    nav {
      display: flex;
      justify-content: center;
      background: #2980b9;
      padding: 1rem 0;
    }
    
    nav a {
      color: white;
      text-decoration: none;
      margin: 0 1rem;
      padding: 0.5rem 1rem;
    }
    
    /* Sections */
    section {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Web Developer & Designer</p>
  </header>
  
  <nav>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
  
  <section id="about">
    <h2>About Me</h2>
    <p>I'm a passionate web developer with experience in HTML, CSS, and JavaScript.</p>
  </section>
  
  <section id="projects">
    <h2>My Projects</h2>
    <div class="project-grid">
      <!-- Projects will be listed here -->
    </div>
  </section>
  
  <section id="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name">
      <input type="email" placeholder="Your Email">
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
</body>
</html>`,
      likes: 125,
      liked: false,
      tags: ["portfolio", "responsive", "flexbox", "semantic-html"]
    },
    {
      id: 2,
      title: "Restaurant Landing Page",
      language: "HTML/CSS",
      level: "Beginner",
      description: "Design a landing page for a restaurant with menu and contact sections.",
      detailedDescription: `
        Create an attractive restaurant landing page with HTML and CSS. This project should include:
        
        Sections:
        1. Hero section with restaurant name and a call-to-action button
        2. About section describing the restaurant's history and philosophy
        3. Menu section displaying food categories and items with prices
        4. Gallery section showcasing food photos
        5. Contact section with address, phone, and a reservation form
        
        Technical Requirements:
        - Use CSS Grid for the main layout
        - Implement responsive design for all screen sizes
        - Add hover effects on menu items and buttons
        - Include a fixed navigation menu
        - Use Google Fonts for typography
        
        Bonus Features:
        - Add a food filter system in the menu
        - Implement a simple image slider in the gallery
        - Add a map using Google Maps API
      `,
      code: "No code available for this project",
      likes: 98,
      liked: false,
      tags: ["landing-page", "grid", "forms", "responsive"]
    },

    // React.js Projects
    {
      id: 3,
      title: "React Todo App",
      language: "React.js",
      level: "Beginner",
      description: "Build a todo application with add, delete, and complete functionality.",
      detailedDescription: `
        Create a functional todo application with React that includes:
        
        Core Features:
        - Add new todo items
        - Mark todos as complete
        - Delete todos
        - Filter todos (all/active/completed)
        - Persist todos using localStorage
        
        Advanced Features:
        - Edit existing todos
        - Drag and drop to reorder
        - Due dates and priorities
        - Dark/light mode toggle
        
        Technical Implementation:
        - Use React hooks (useState, useEffect)
        - Implement custom hooks for localStorage
        - Create reusable components
        - Add PropTypes for type checking
        - Implement proper accessibility
        
        Stretch Goals:
        - Add user authentication
        - Sync with a backend API
        - Implement offline capability
      `,
      code: `import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`,
      likes: 89,
      liked: false,
      tags: ["hooks", "localstorage", "crud", "components"]
    },
    // ... (other projects follow same pattern with full details and code)
  ]);

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setProjects(projects.map(project => {
      if (project.id === id) {
        return {
          ...project,
          likes: project.liked ? project.likes - 1 : project.likes + 1,
          liked: !project.liked
        };
      }
      return project;
    }));
  };

  const filteredProjects = projects.filter(project => {
    const matchesLanguage = filter === "All" || project.language.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLanguage && matchesSearch;
  });

  const languages = ["All", "HTML/CSS", "React.js", "Node.js", "PHP", "Python", "Java", "React Native", "Flutter", "JavaScript"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const viewProjectDetails = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  return (
    <div className="coding-projects-container">
      <h1 className="page-title">Coding Projects Hub</h1>
      <p className="page-subtitle">Find projects for all skill levels and languages</p>
      
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>
        
        <div className="filter-buttons">
          <div className="language-filters">
            <h3>Languages:</h3>
            {languages.map(lang => (
              <button
                key={lang}
                className={filter === lang ? "active" : ""}
                onClick={() => setFilter(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => viewProjectDetails(project)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`level-badge ${project.level.toLowerCase()}`}>
                  {project.level}
                </span>
              </div>
              <div className="project-language">{project.language}</div>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <button 
                  className={`like-button ${project.liked ? "liked" : ""}`}
                  onClick={(e) => handleLike(project.id, e)}
                >
                  <i className={`fas fa-heart ${project.liked ? "liked" : ""}`}></i>
                  {project.likes}+
                </button>
                <span className="view-button">View Project</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-projects">
            <i className="fas fa-exclamation-circle"></i>
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
      
      <div className="stats-section">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>{projects.length}+</p>
        </div>
        <div className="stat-card">
          <h3>Total Likes</h3>
          <p>{projects.reduce((sum, project) => sum + project.likes, 0)}+</p>
        </div>
        <div className="stat-card">
          <h3>Languages</h3>
          <p>{languages.length - 1}+</p>
        </div>
      </div>

      {showDetails && selectedProject && (
        <div className="project-details-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeDetails}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-subheader">
                <span className="modal-language">{selectedProject.language}</span>
                <span className={`modal-level ${selectedProject.level.toLowerCase()}`}>
                  {selectedProject.level}
                </span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-stats">
                <span className="likes-count">
                  <i className={`fas fa-heart ${selectedProject.liked ? "liked" : ""}`}></i>
                  {selectedProject.likes} likes
                </span>
                <div className="project-tags">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-description">
                <h3>Project Details</h3>
                <div className="description-content">
                  {selectedProject.detailedDescription.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="code-section">
                <h3>Example Code</h3>
                {selectedProject.code === "No code available for this project" ? (
                  <div className="no-code-available">
                    <i className="fas fa-code"></i>
                    <p>No code available for this project</p>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code>{selectedProject.code}</code>
                  </pre>
                )}
              </div>
              
              <div className="project-actions">
                <button className="action-button primary">
                  <i className="fas fa-code"></i> View Full Code
                </button>
                <button className="action-button secondary">
                  <i className="fas fa-video"></i> Video Tutorial
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodingProjects;