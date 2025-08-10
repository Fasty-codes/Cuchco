import React, { useState } from 'react';

const CodingAlgorithms = () => {
  const [activeCategory, setActiveCategory] = useState('intro');
  const [activeAlgorithm, setActiveAlgorithm] = useState('whatIsDSA');
  const [language, setLanguage] = useState('en'); // 'en' or 'ml'

  // Complete algorithm database
  const algorithmData = {
    intro: {
      whatIsDSA: {
        name: {
          en: "What is DSA?",
          ml: "എന്താണ് DSA?"
        },
        description: {
          en: "Data Structures and Algorithms (DSA) are fundamental concepts in computer science that help in organizing and processing data efficiently.",
          ml: "ഡാറ്റ സ്ട്രക്ചറുകളും അൽഗോരിതങ്ങളും (DSA) കമ്പ്യൂട്ടർ സയൻസിലെ അടിസ്ഥാന ആശയങ്ങളാണ്, ഡാറ്റ എഫിഷ്യന്റായി ഓർഗനൈസ് ചെയ്യാനും പ്രോസസ്സ് ചെയ്യാനും ഇവ സഹായിക്കുന്നു."
        },
        whyImportant: {
          en: "Why is DSA important?",
          ml: "DSA എന്തുകൊണ്ട് പ്രധാനമാണ്?"
        },
        whyImportantDesc: {
          en: [
            "Improves problem-solving skills",
            "Optimizes memory & speed in programs",
            "Essential for coding interviews at top tech companies"
          ],
          ml: [
            "പ്രോബ്ലം സോൾവിംഗ് സ്കില്ലുകൾ മെച്ചപ്പെടുത്തുന്നു",
            "മെമ്മറിയും സ്പീഡും ഒപ്റ്റിമൈസ് ചെയ്യുന്നു",
            "ടോപ്പ് ടെക് കമ്പനികളിലെ ഇന്റർവ്യൂകൾക്ക് അത്യാവശ്യം"
          ]
        },
        complexity: {
          time: { en: "N/A", ml: "N/A" },
          space: { en: "N/A", ml: "N/A" }
        }
      }
    },
    sorting: {
      bubbleSort: {
        name: {
          en: "Bubble Sort",
          ml: "ബബിൾ സോർട്ട്"
        },
        description: {
          en: "Repeatedly swaps adjacent elements if they are in the wrong order.",
          ml: "അടുത്തടുത്തുള്ള എലമെന്റുകൾ താരതമ്യം ചെയ്ത് സ്വാപ്പ് ചെയ്യുന്നു."
        },
        complexity: {
          time: { en: "O(n²)", ml: "O(n²)" },
          space: { en: "O(1)", ml: "O(1)" }
        },
        code: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}`,
        example: {
          en: "Input: [5, 3, 8, 4, 2]\nOutput: [2, 3, 4, 5, 8]",
          ml: "ഇൻപുട്ട്: [5, 3, 8, 4, 2]\nഔട്ട്പുട്ട്: [2, 3, 4, 5, 8]"
        }
      },
      quickSort: {
        name: {
          en: "Quick Sort",
          ml: "ക്വിക് സോർട്ട്"
        },
        description: {
          en: "Divide & conquer algorithm that picks a 'pivot' and partitions the array.",
          ml: "ഒരു 'പിവറ്റ്' തിരഞ്ഞെടുത്ത് അറേയെ പാർട്ടീഷൻ ചെയ്യുന്നു."
        },
        complexity: {
          time: { en: "O(n log n) avg", ml: "O(n log n) ശരാശരി" },
          space: { en: "O(log n)", ml: "O(log n)" }
        },
        code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
        example: {
          en: "Input: [10, 7, 8, 9, 1, 5]\nOutput: [1, 5, 7, 8, 9, 10]",
          ml: "ഇൻപുട്ട്: [10, 7, 8, 9, 1, 5]\nഔട്ട്പുട്ട്: [1, 5, 7, 8, 9, 10]"
        }
      },
      mergeSort: {
        name: {
          en: "Merge Sort",
          ml: "മെർജ് സോർട്ട്"
        },
        description: {
          en: "Divide and conquer algorithm that divides the array into halves, sorts them, and merges them back.",
          ml: "അറേയെ പകുതിയായി വിഭജിച്ച് ഓരോ ഭാഗവും സോർട്ട് ചെയ്ത് ലയിപ്പിക്കുന്നു."
        },
        complexity: {
          time: { en: "O(n log n)", ml: "O(n log n)" },
          space: { en: "O(n)", ml: "O(n)" }
        },
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIdx = 0, rightIdx = 0;
  
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx++]);
    } else {
      result.push(right[rightIdx++]);
    }
  }
  
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}`,
        example: {
          en: "Input: [38, 27, 43, 3, 9, 82, 10]\nOutput: [3, 9, 10, 27, 38, 43, 82]",
          ml: "ഇൻപുട്ട്: [38, 27, 43, 3, 9, 82, 10]\nഔട്ട്പുട്ട്: [3, 9, 10, 27, 38, 43, 82]"
        }
      }
    },
    searching: {
      linearSearch: {
        name: {
          en: "Linear Search",
          ml: "ലീനിയർ സർച്ച്"
        },
        description: {
          en: "Sequentially checks each element in the list until a match is found.",
          ml: "ഓരോ എലമെന്റും ക്രമത്തിൽ പരിശോധിച്ച് മൂല്യം കണ്ടെത്തുന്നു."
        },
        complexity: {
          time: { en: "O(n)", ml: "O(n)" },
          space: { en: "O(1)", ml: "O(1)" }
        },
        code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
        example: {
          en: "Input: [10, 20, 30, 40, 50], target: 30\nOutput: 2 (index)",
          ml: "ഇൻപുട്ട്: [10, 20, 30, 40, 50], ടാർഗെറ്റ്: 30\nഔട്ട്പുട്ട്: 2 (ഇൻഡെക്സ്)"
        }
      },
      binarySearch: {
        name: {
          en: "Binary Search",
          ml: "ബൈനറി സർച്ച്"
        },
        description: {
          en: "Efficiently finds an item in a sorted array by repeatedly dividing the search interval in half.",
          ml: "സോർട്ട് ചെയ്ത അറേയിൽ ഇടവേള പകുതിയായി കുറച്ച് മൂല്യം കണ്ടെത്തുന്നു."
        },
        complexity: {
          time: { en: "O(log n)", ml: "O(log n)" },
          space: { en: "O(1)", ml: "O(1)" }
        },
        code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
        example: {
          en: "Input: [1, 3, 5, 7, 9], target: 5\nOutput: 2 (index)",
          ml: "ഇൻപുട്ട്: [1, 3, 5, 7, 9], ടാർഗെറ്റ്: 5\nഔട്ട്പുട്ട്: 2 (ഇൻഡെക്സ്)"
        }
      }
    },
    graph: {
      bfs: {
        name: {
          en: "Breadth-First Search (BFS)",
          ml: "ബ്രെഡ്ത്-ഫേഴ്സ്റ്റ് സർച്ച് (BFS)"
        },
        description: {
          en: "Explores all neighbor nodes at the present depth before moving deeper.",
          ml: "ഒരേ ലെവലിലെ നോഡുകൾ ആദ്യം സന്ദർശിക്കുന്നു."
        },
        complexity: {
          time: { en: "O(V + E)", ml: "O(V + E)" },
          space: { en: "O(V)", ml: "O(V)" }
        },
        code: `function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  visited.add(start);
  
  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}`,
        example: {
          en: "Graph: { A: ['B', 'C'], B: ['D'], C: [], D: [] }\nOutput: A → B → C → D",
          ml: "ഗ്രാഫ്: { A: ['B', 'C'], B: ['D'], C: [], D: [] }\nഔട്ട്പുട്ട്: A → B → C → D"
        }
      },
      dfs: {
        name: {
          en: "Depth-First Search (DFS)",
          ml: "ഡെപ്ത്-ഫേഴ്സ്റ്റ് സർച്ച് (DFS)"
        },
        description: {
          en: "Explores as far as possible along each branch before backtracking.",
          ml: "ഓരോ ബ്രാഞ്ചിലും സാധ്യമായ എല്ലാം സന്ദർശിച്ച് പിന്നീട് ബാക്ക് ട്രാക്ക് ചെയ്യുന്നു."
        },
        complexity: {
          time: { en: "O(V + E)", ml: "O(V + E)" },
          space: { en: "O(V)", ml: "O(V)" }
        },
        code: `function dfs(graph, start) {
  const stack = [start];
  const visited = new Set();
  visited.add(start);
  
  while (stack.length) {
    const node = stack.pop();
    console.log(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
}`,
        example: {
          en: "Graph: { A: ['B', 'C'], B: ['D'], C: [], D: [] }\nOutput: A → C → B → D",
          ml: "ഗ്രാഫ്: { A: ['B', 'C'], B: ['D'], C: [], D: [] }\nഔട്ട്പുട്ട്: A → C → B → D"
        }
      }
    },
    dynamic: {
      fibonacci: {
        name: {
          en: "Fibonacci (DP)",
          ml: "ഫിബൊനാച്ചി (DP)"
        },
        description: {
          en: "Computes Fibonacci numbers using dynamic programming to avoid redundant calculations.",
          ml: "ഫിബൊനാച്ചി നമ്പറുകൾ കണ്ടുപിടിക്കാൻ ഡൈനാമിക് പ്രോഗ്രാമിംഗ് ഉപയോഗിക്കുന്നു."
        },
        complexity: {
          time: { en: "O(n)", ml: "O(n)" },
          space: { en: "O(n)", ml: "O(n)" }
        },
        code: `function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  return memo[n];
}`,
        example: {
          en: "Input: 6\nOutput: 8 (Fibonacci sequence: 1, 1, 2, 3, 5, 8)",
          ml: "ഇൻപുട്ട്: 6\nഔട്ട്പുട്ട്: 8 (ഫിബൊനാച്ചി സീക്വൻസ്: 1, 1, 2, 3, 5, 8)"
        }
      }
    }
  };

  const categories = [
    { id: 'intro', name: { en: "DSA Intro", ml: "DSA ആമുഖം" } },
    { id: 'sorting', name: { en: "Sorting", ml: "സോർട്ടിംഗ്" } },
    { id: 'searching', name: { en: "Searching", ml: "തിരയൽ" } },
    { id: 'graph', name: { en: "Graph", ml: "ഗ്രാഫ്" } },
    { id: 'dynamic', name: { en: "DP", ml: "ഡൈനാമിക് പ്രോഗ്രാമിംഗ്" } }
  ];

  // Safe data access with defaults
  const currentCategoryData = algorithmData[activeCategory] || {};
  const currentAlgorithmData = currentCategoryData[activeAlgorithm] || {};
  
  const complexity = currentAlgorithmData.complexity || {
    time: { en: "N/A", ml: "N/A" },
    space: { en: "N/A", ml: "N/A" }
  };

  return (
    <div className="dsa-showcase">
      <style>{`
        .dsa-showcase {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        
        .header h1 {
          color: #2c3e50;
          margin-bottom: 10px;
          font-size: 2.2rem;
        }
        
        .language-toggle {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .language-toggle button {
          padding: 8px 20px;
          border: none;
          background: #3498db;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        
        .language-toggle button.active {
          background: #2c3e50;
        }
        
        .content-container {
          display: flex;
          gap: 20px;
        }
        
        .category-nav {
          flex: 0 0 200px;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .category-nav h3 {
          margin-bottom: 15px;
          color: #2c3e50;
          font-size: 1.1rem;
          padding-bottom: 8px;
          border-bottom: 1px solid #ddd;
        }
        
        .category-nav ul {
          list-style: none;
          padding: 0;
        }
        
        .category-nav li {
          padding: 10px 15px;
          margin-bottom: 5px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s;
          font-size: 0.95rem;
        }
        
        .category-nav li:hover {
          background: #e9ecef;
        }
        
        .category-nav li.active {
          background: #3498db;
          color: white;
          font-weight: 500;
        }
        
        .algorithm-details {
          flex: 1;
          background: white;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .algorithm-details h2 {
          color: #2c3e50;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
          font-size: 1.8rem;
        }
        
        .algorithm-description {
          margin-bottom: 20px;
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        .complexity {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
          border-left: 4px solid #3498db;
        }
        
        .complexity h3 {
          margin-bottom: 10px;
          font-size: 1.1rem;
          color: #2c3e50;
        }
        
        .complexity p {
          margin: 8px 0;
          font-size: 0.95rem;
        }
        
        .algorithm-code {
          background: #282c34;
          color: #abb2bf;
          padding: 18px;
          border-radius: 6px;
          overflow-x: auto;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 20px;
          tab-size: 2;
        }
        
        .example {
          margin-top: 20px;
          padding: 18px;
          background: #e8f4f8;
          border-radius: 6px;
          border-left: 4px solid #2ecc71;
        }
        
        .example h3 {
          margin-bottom: 10px;
          color: #27ae60;
        }
        
        .example pre {
          white-space: pre-wrap;
          font-family: 'Courier New', Courier, monospace;
          margin: 10px 0;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .content-container {
            flex-direction: column;
          }
          
          .category-nav {
            flex: 1;
            margin-bottom: 20px;
          }
          
          .header h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="header">
        <h1>{language === 'en' ? "DSA & Algorithms Reference" : "DSA & അൽഗോരിതങ്ങൾ"}</h1>
        <div className="language-toggle">
          <button 
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
          <button 
            className={language === 'ml' ? 'active' : ''}
            onClick={() => setLanguage('ml')}
          >
            Malayalam
          </button>
        </div>
      </div>

      <div className="content-container">
        <div className="category-nav">
          <h3>{language === 'en' ? "Categories" : "വിഭാഗങ്ങൾ"}</h3>
          <ul>
            {categories.map(category => (
              <li
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => {
                  setActiveCategory(category.id);
                  const firstAlgorithm = Object.keys(algorithmData[category.id] || {})[0];
                  setActiveAlgorithm(firstAlgorithm || '');
                }}
              >
                {category.name[language]}
              </li>
            ))}
          </ul>
        </div>

        <div className="algorithm-details">
          {currentAlgorithmData.name ? (
            <>
              <h2>{currentAlgorithmData.name[language]}</h2>
              <p className="algorithm-description">{currentAlgorithmData.description[language]}</p>
              
              {currentAlgorithmData.whyImportant && (
                <>
                  <h3>{currentAlgorithmData.whyImportant[language]}</h3>
                  <ul>
                    {(currentAlgorithmData.whyImportantDesc?.[language] || []).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="complexity">
                <h3>{language === 'en' ? "Complexity" : "കോംപ്ലക്സിറ്റി"}</h3>
                <p><strong>{language === 'en' ? "Time:" : "സമയം:"}</strong> {complexity.time[language]}</p>
                <p><strong>{language === 'en' ? "Space:" : "സ്പേസ്:"}</strong> {complexity.space[language]}</p>
              </div>

              {currentAlgorithmData.code && (
                <>
                  <h3>{language === 'en' ? "Implementation" : "ഇംപ്ലിമെന്റേഷൻ"}</h3>
                  <pre className="algorithm-code">{currentAlgorithmData.code}</pre>
                </>
              )}

              {currentAlgorithmData.example && (
                <div className="example">
                  <h3>{language === 'en' ? "Example" : "ഉദാഹരണം"}</h3>
                  <pre>{currentAlgorithmData.example[language]}</pre>
                </div>
              )}
            </>
          ) : (
            <p>{language === 'en' ? "Select an algorithm to view details" : "വിശദാംശങ്ങൾ കാണാൻ ഒരു അൽഗോരിതം തിരഞ്ഞെടുക്കുക"}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingAlgorithms;