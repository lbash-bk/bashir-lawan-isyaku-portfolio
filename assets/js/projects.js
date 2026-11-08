
/* ==========================================================================
   projects.js
   Portfolio project content and rendering.
   All project information is maintained in the PROJECTS array.

   To add a project:
   1. Copy an existing project object.
   2. Update its information.
   3. Add it to PROJECTS.

   Use null for unavailable links.
   ========================================================================== */

var SHOW_PENDING = false;

var PROJECTS = [

  // ============================================================
  // 1. BANK CUSTOMER CHURN ANALYSIS
  // ============================================================

  {
    id: 'bank-customer-churn-analysis',
    title: 'Bank Customer Churn Analysis',
    category: 'analytics',
    kind: 'Independent Data Analytics Project',
    status: 'Completed',

    summary:
      'An end-to-end customer churn analysis involving data cleaning, data integration, exploratory analysis, and Power BI dashboard development to identify customer retention patterns and factors associated with churn.',

    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Jupyter Notebook',
      'Power BI'
    ],

    links: {
      github: 'https://github.com/lbash-bk/Bank_Customers_Churn_Analysis.git',
      live: null,
      docs: null
    },

    thumb: 'assets/images/projects/Customer Behaviour and Churn Drivers.png',

    sections: [

      {
        heading: 'Business problem',
        items: [
          'Customer churn is an important business challenge because losing customers can affect revenue, customer lifetime value, and long-term business performance.',
          'The objective of this project was to analyze customer information and account characteristics to understand churn patterns and identify customer segments with higher churn rates.'
        ]
      },

      {
        heading: 'Dataset overview',
        items: [
          'Analyzed a bank customer dataset containing 10,000 customer records.',
          'The dataset included customer demographics, geographical information, account balances, product ownership, credit card ownership, activity status, and churn status.',
          'Prepared and integrated customer and account information for exploratory data analysis and dashboard reporting.'
        ]
      },

      {
        heading: 'Data cleaning and preparation',
        items: [
          'Inspected customer information and account information datasets to identify missing values, duplicate records, and inconsistent data.',
          'Removed duplicate customer records using CustomerID as the identifying field.',
          'Handled missing values and standardized salary and other relevant fields.',
          'Converted categorical Yes/No account indicators into consistent numerical representations where appropriate.',
          'Prepared the cleaned datasets for integration and subsequent analysis.'
        ]
      },

      {
        heading: 'Exploratory data analysis',
        items: [
          'Performed univariate, bivariate, and multivariate exploratory data analysis using Python and Pandas.',
          'Analyzed churn distribution across geographical regions, gender, age groups, customer activity, and product ownership.',
          'Investigated relationships between account balances, credit card ownership, and customer churn.',
          'Used visualizations and correlation analysis to examine customer behavior and identify important patterns.'
        ]
      },

      {
        heading: 'Key findings',
        items: [
          'Total customers analyzed: 10,000.',
          'Customers who churned: 2,037 (20.37%).',
          'Customers retained: 7,963 (79.63%).',
          'Germany recorded the highest geographical churn rate at 32.44%.',
          'Female customers recorded a churn rate of 25.07%, compared with 16.46% among male customers.',
          'Customers aged 46–55 had the highest age-group churn rate at 50.57%, followed by customers aged 56–65 at 48.32%.',
          'Inactive members recorded a churn rate of 26.85%, compared with 14.27% among active members.',
          'Customers with three products had an 82.71% churn rate, while customers with four products had a 100% churn rate.',
          'The average balance of churned customers was 91,108.54, compared with 72,745.30 among retained customers.'
        ]
      },

      {
        heading: 'Power BI dashboard',
        items: [
          'Developed an interactive Power BI dashboard to communicate customer retention and churn performance.',
          'Created KPI cards for total customers, churned customers, retained customers, churn rate, and retention rate.',
          'Designed visualizations to examine churn by geography, gender, age group, activity status, product ownership, credit card ownership, and account balance.',
          'Included interactive filters to support customer segmentation and further exploration of churn patterns.',
          'Organized the dashboard to support business-focused interpretation of customer behavior.'
        ]
      },

      {
        heading: 'Business recommendations',
        items: [
          'Investigate the reasons behind the high churn rate among customers in Germany and develop targeted retention strategies.',
          'Consider targeted engagement strategies for inactive customers, who demonstrate a higher churn rate than active customers.',
          'Investigate the needs and experiences of customers in higher-risk age groups.',
          'Review product-related customer experiences, especially among customers holding three or four products, before making retention decisions.',
          'Use customer segmentation and continuous churn monitoring to support proactive retention initiatives.'
        ]
      }

    ],

    screenshots: [
      {
        src: 'assets/images/projects/BANK CUSTOMER CHURN ANALYSIS.png',
        alt: 'Bank Customer Churn Analysis dashboard',
        caption: 'Bank Customer Churn Analysis Dashboard'
      },
      {
        src: 'assets/images/projects/Customer Behaviour and Churn Drivers.png',
        alt: 'Customer Behaviour and Churn Drivers visualization',
        caption: 'Customer Behaviour and Churn Drivers'
      }
    ]
  },


  // ============================================================
  // 2. E-COMMERCE SALES PERFORMANCE ANALYSIS
  // ============================================================

  {
    id: 'sales-performance-analysis',
    title: 'E-Commerce Sales Performance Analysis and Dashboard',
    category: 'analytics',
    kind: 'Independent Data Analytics Project',
    status: 'Completed',

    summary:
      'A sales performance analysis of 5,000 e-commerce transactions using Python and Power BI to evaluate revenue, order performance, product categories, geographical regions, and payment methods.',

    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Jupyter Notebook',
      'Matplotlib',
      'Seaborn',
      'Power BI'
    ],

    links: {
      github: 'https://github.com/lbash-bk/E-Commerce-Sales-Performance-Analysis-and-Dashboard',
      live: null,
      docs: null
    },

    thumb: 'assets/images/projects/sales_performance_dashboard.png',

    sections: [

      {
        heading: 'Business problem',
        items: [
          'Businesses need reliable sales information to understand revenue performance, identify successful products, evaluate regional contributions, and make informed decisions.',
          'The objective of this project was to analyze e-commerce transaction data and develop an interactive dashboard for monitoring sales performance and key business indicators.'
        ]
      },

      {
        heading: 'Dataset overview',
        items: [
          'Worked with a structured e-commerce sales dataset containing 5,000 transactions.',
          'The dataset included transaction information, product categories, sales regions, payment methods, quantities, and financial metrics.'
        ]
      },

      {
        heading: 'Data cleaning and preparation',
        items: [
          'Imported and inspected the raw dataset using Python and Pandas.',
          'Reviewed data types, missing values, duplicate records, and inconsistencies.',
          'Cleaned and standardized relevant columns to ensure consistency during analysis.',
          'Prepared the dataset for exploratory analysis and Power BI reporting.'
        ]
      },

      {
        heading: 'Exploratory data analysis',
        items: [
          'Analyzed total revenue, order volume, and average order value.',
          'Evaluated product category performance using revenue, order volume, and units sold.',
          'Compared sales performance across geographical regions.',
          'Examined payment method distribution and transaction patterns.',
          'Used Python visualizations to identify business patterns and communicate analytical findings.'
        ]
      },

      {
        heading: 'Key findings',
        items: [
          'Total transactions analyzed: 5,000 orders.',
          'Total revenue: 5,109,775.74.',
          'Average order value: approximately 1,021.96.',
          'Electronics was the highest-revenue product category, generating 1,829,899.22.',
          'Electronics recorded 1,777 orders and 7,109 units sold.',
          'The West region generated the highest regional revenue of 1,345,582.16.',
          'Card payments accounted for 2,270 orders.'
        ]
      },

      {
        heading: 'Power BI dashboard',
        items: [
          'Developed an interactive Power BI dashboard to present sales performance and business KPIs.',
          'Presented revenue, order volume, and average order value using KPI cards.',
          'Visualized revenue performance across product categories and geographical regions.',
          'Examined sales distribution by payment method.',
          'Designed the dashboard to help users quickly identify high-performing categories and regions.'
        ]
      },

      {
        heading: 'Business insights and recommendations',
        items: [
          'Continue monitoring Electronics performance because it contributes significantly to overall revenue.',
          'Investigate the factors driving strong sales performance in the West region.',
          'Use payment method distribution to support payment experience and transaction strategy decisions.',
          'Monitor average order value and order volume to evaluate future sales performance.'
        ]
      }

    ],

    screenshots: [
      {
        src: 'assets/images/projects/sales_performance_dashboard.png',
        alt: 'E-commerce sales performance Power BI dashboard',
        caption: 'E-Commerce Sales Performance Dashboard'
      }
    ]
  },


  // ============================================================
  // 3. DATA SCIENCE NIGERIA BOOTCAMP PROJECT
  // ============================================================

  {
    id: 'bootcamp-sales-data-analysis',
    title: 'Sales Data Analysis and Power BI Dashboard',
    category: 'analytics',
    kind: 'Data Science Nigeria Bootcamp Project | 2026',
    status: 'Completed',

    summary:
      'A sales transaction data analysis project completed during the 2026 Data Science Nigeria Bootcamp, focusing on data quality, transaction validation, exploratory analysis, and Power BI dashboard development.',

    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Jupyter Notebook',
      'Power BI'
    ],

    links: {
      github: 'https://github.com/lbash-bk/2026-Nigerian-Data-Science-Bootcamp-Project.git',
      live: null,
      docs: null
    },

    thumb: 'assets/images/projects/sales_performance_and_management _audit_dashboard.png',

    sections: [

      {
        heading: 'Project overview',
        items: [
          'Completed a practical sales data analysis assignment as part of the 2026 Data Science Nigeria Bootcamp.',
          'The project focused on preparing transaction data, investigating data quality issues, validating financial calculations, and presenting findings through a Power BI dashboard.',
          'Completed and submitted the project within the bootcamp deadline.'
        ]
      },

      {
        heading: 'Dataset overview',
        items: [
          'Original dataset dimensions: 432 rows and 16 columns.',
          'After duplicate removal and data preparation: 420 rows and 20 columns.',
          'Worked with sales transaction information, product details, quantities, costs, and revenue-related fields.'
        ]
      },

      {
        heading: 'Data cleaning and quality assessment',
        items: [
          'Inspected the original dataset to understand its structure, data types, and quality issues.',
          'Identified and removed 12 duplicate TransactionID records.',
          'Investigated 31 missing values in the Cost_Per_Unit_NGN column.',
          'Handled missing unit costs using product-based imputation.',
          'Standardized and prepared the dataset for subsequent analysis.',
          'Performed data quality checks to improve the reliability of the prepared dataset.'
        ]
      },

      {
        heading: 'Revenue validation',
        items: [
          'Reviewed the relationship between transaction quantities, unit prices, and calculated revenue.',
          'Validated revenue calculations against the available transaction records.',
          'Successfully validated revenue matches for 398 out of 420 records with non-missing comparison values.',
          'Used the validation process to identify and assess inconsistencies in the transaction data.'
        ]
      },

      {
        heading: 'Exploratory data analysis',
        items: [
          'Performed exploratory analysis to investigate sales performance and transaction patterns.',
          'Examined the prepared data to understand important business indicators and sales trends.',
          'Prepared analytical results for presentation through Power BI.'
        ]
      },

      {
        heading: 'Power BI dashboard',
        items: [
          'Developed a sales performance dashboard to communicate important business indicators.',
          'Created a separate data quality and audit dashboard to present data preparation and validation information.',
          'Used dashboard visualizations to make sales performance and data quality information easier to understand.',
          'Presented the project results through Power BI dashboard reporting.'
        ]
      },

      {
        heading: 'Project outcome',
        items: [
          'Successfully transformed an initially unclean dataset into a structured analytical dataset.',
          'Identified and addressed duplicate transaction records and missing unit cost values.',
          'Performed revenue validation to assess the accuracy of transaction calculations.',
          'Delivered an analytical project with supporting Power BI dashboards within the bootcamp deadline.'
        ]
      }

    ],

    screenshots: [
      {
        src: 'assets/images/projects/sales_performance_and_management _audit_dashboard.png',
        alt: 'Sales performance dashboard',
        caption: 'Sales Performance Dashboard'
      },
      {
        src: 'assets/images/projects/data_quality and_audit_dashboard.png',
        alt: 'Data quality and audit dashboard',
        caption: 'Data Quality and Audit Dashboard'
      }
    ]
  },


  // ============================================================
  // 4. FUD STUDY HUB
  // ============================================================

  {
    id: 'fud-study-hub',
    title: 'FUD Study Hub',
    category: 'software',
    kind: 'Founder, Project Manager and System Architect',
    status: 'Live',

    summary:
      'A centralized academic resource management platform developed to help Federal University Dutse students access lecture notes, handouts, past examination questions, and other study materials through a single platform.',

    tools: [
      'Python',
      'Django',
      'PostgreSQL',
      'SQLite',
      'HTML',
      'CSS',
      'JavaScript',
      'Git',
      'GitHub'
    ],

    links: {
      github: 'https://github.com/lbash-bk/FUD-study-hub.git',
      live: 'https://fud-study-hub.onrender.com',
      docs: null
    },

    thumb: 'assets/images/projects/fud_study_hub.png',

    sections: [

      {
        heading: 'Problem statement',
        items: [
          'Students often faced difficulties accessing lecture notes, handouts, past examination questions, and other academic resources scattered across different sources.',
          'The project was initiated to provide a centralized platform where students could access relevant academic materials based on their departments, academic levels, and courses.',
          'Gathered user input to understand students’ needs and inform the design of the platform.'
        ]
      },

      {
        heading: 'My role and responsibilities',
        items: [
          'Founded the project and served as Project Manager and System Architect.',
          'Designed the system architecture and contributed to technical decision-making.',
          'Coordinated project activities and collaborated with team members across different development responsibilities.',
          'Contributed to the implementation of the platform using Django and modern web technologies.'
        ]
      },

      {
        heading: 'Architecture and technologies',
        items: [
          'Used Python and Django for backend development and application logic.',
          'Developed the frontend using HTML, CSS, and JavaScript.',
          'Used SQLite during development and PostgreSQL for production.',
          'Implemented authenticated access and role-based material upload permissions.',
          'Deployed the application on Render.'
        ]
      },

      {
        heading: 'Main features',
        items: [
          'User registration and authentication.',
          'Academic material organization by department, academic level, course, and material type.',
          'Material upload functionality for authorized lecturers and class representatives.',
          'Academic material browsing and filtering.',
          'Study material viewing and downloading.',
          'Administrative management of uploaded academic resources.'
        ]
      },

      {
        heading: 'Project outcome',
        items: [
          'Successfully developed and deployed a working academic resource management platform.',
          'Provided students with a centralized way to access academic learning materials.',
          'Applied software engineering principles, database management, system architecture, and project coordination throughout development.'
        ]
      }

    ],

    screenshots: [
      {
        src: 'assets/images/projects/fud_study_hub.png',
        alt: 'FUD Study Hub home page',
        caption: 'Home Page'
      },
      {
        src: 'assets/images/projects/fud_study_hub_1.png',
        alt: 'FUD Study Hub login page',
        caption: 'Login Page'
      },
      {
        src: 'assets/images/projects/fud_study_hub_2.png',
        alt: 'FUD Study Hub departments list',
        caption: 'Departments List Page'
      },
      {
        src: 'assets/images/projects/fud_study_hub_3.png',
        alt: 'FUD Study Hub academic materials list',
        caption: 'Materials List Page'
      },
      {
        src: 'assets/images/projects/fud_study_hub_4.png',
        alt: 'FUD Study Hub material upload page',
        caption: 'Material Upload Page'
      },
      {
        src: 'assets/images/projects/fud_study_hub_5.png',
        alt: 'FUD Study Hub material management page',
        caption: 'Material Management Page'
      },
      {
        src: 'assets/images/projects/fud_study_hub_6.png',
        alt: 'FUD Study Hub admin dashboard',
        caption: 'Admin Dashboard'
      }
    ],

    note: 'The live site runs on free hosting, so the first visit can take up to a minute to wake up.'
  }

];


/* ==========================================================================
   RENDERING HELPERS
   ========================================================================== */

function el(tag, attrs, children) {
  var node = document.createElement(tag);

  Object.keys(attrs || {}).forEach(function (k) {
    if (k === 'text') node.textContent = attrs[k];
    else node.setAttribute(k, attrs[k]);
  });

  (children || []).forEach(function (c) {
    if (c) node.appendChild(c);
  });

  return node;
}


function tagList(tools) {
  return el(
    'ul',
    { 'class': 'tag-list' },
    tools.map(function (t) {
      return el('li', { 'class': 'tag', text: t });
    })
  );
}


function statusBadge(status) {
  if (status === 'In progress') {
    return el('span', {
      'class': 'badge badge--progress',
      text: status
    });
  }

  if (status === 'Live') {
    return el('span', {
      'class': 'badge badge--live',
      text: status
    });
  }

  return null;
}


function linkButton(label, href, style) {
  return el('a', {
    'class': 'btn ' + style,
    href: href,
    rel: 'noopener',
    text: label
  });
}


/* ==========================================================================
   PROJECT CARDS
   ========================================================================== */

function projectCard(p) {

  var thumb = p.thumb
    ? el('div', {
        'class': 'project-card__thumb'
      }, [
        el('img', {
          src: p.thumb,
          alt: p.title + ' preview',
          loading: 'lazy'
        })
      ])
    : el('div', {
        'class': 'project-card__thumb',
        text: 'Preview image coming soon'
      });


  var meta = el('div', {
    'class': 'project-card__meta'
  }, [
    statusBadge(p.status),
    el('span', { text: p.kind })
  ]);


  var actions = el('div', {
    'class': 'project-card__actions'
  }, [
    linkButton(
      'View case study',
      'project.html?id=' + encodeURIComponent(p.id),
      'btn--primary'
    ),

    p.links.github
      ? linkButton('GitHub', p.links.github, 'btn--secondary')
      : null,

    p.links.live
      ? linkButton('Live site', p.links.live, 'btn--secondary')
      : null
  ]);


  return el('article', {
    'class': 'project-card reveal',
    'data-category': p.category
  }, [
    thumb,

    el('div', {
      'class': 'project-card__body'
    }, [
      el('h3', { text: p.title }),
      meta,

      el('p', {
        'class': 'project-card__summary',
        text: p.summary
      }),

      tagList(p.tools),
      actions
    ])
  ]);
}


function renderProjectGrid() {

  var grid = document.getElementById('project-grid');

  if (!grid) return;

  PROJECTS.forEach(function (p) {
    grid.appendChild(projectCard(p));
  });
}


/* ==========================================================================
   CASE STUDY PAGE
   ========================================================================== */

function renderCaseStudy() {

  var root = document.getElementById('case-root');

  if (!root) return;

  var id = new URLSearchParams(window.location.search).get('id');

  var index = PROJECTS.findIndex(function (p) {
    return p.id === id;
  });

  var p = PROJECTS[index];


  if (!p) {

    root.appendChild(el('div', {
      'class': 'container section'
    }, [
      el('h1', { text: 'Project not found' }),

      el('p', {
        text: 'This project does not exist.'
      }),

      el('a', {
        'class': 'btn btn--primary',
        href: 'index.html#projects',
        text: 'Back to all projects'
      })
    ]));

    document.title = 'Project not found | Bashir Lawan Isyaku';

    return;
  }


  document.title = p.title + ' | Bashir Lawan Isyaku';


  var heroActions = el('div', {
    'class': 'project-card__actions'
  }, [
    p.links.github
      ? linkButton('View on GitHub', p.links.github, 'btn--light')
      : null,

    p.links.live
      ? linkButton('Open live site', p.links.live, 'btn--outline-light')
      : null,

    p.links.docs
      ? linkButton('Read documentation', p.links.docs, 'btn--outline-light')
      : null
  ]);


  root.appendChild(el('section', {
    'class': 'case-hero on-dark'
  }, [
    el('div', {
      'class': 'container'
    }, [

      el('a', {
        'class': 'back',
        href: 'index.html#projects',
        text: 'Back to projects'
      }),

      el('h1', { text: p.title }),

      el('p', { text: p.summary }),

      heroActions

    ])
  ]));


  var body = el('div', {
    'class': 'container section'
  }, []);


  var meta = el('dl', {
    'class': 'case-meta'
  }, [

    el('div', {}, [
      el('dt', { text: 'Role' }),
      el('dd', { text: p.kind })
    ]),

    el('div', {}, [
      el('dt', { text: 'Status' }),
      el('dd', { text: p.status })
    ]),

    el('div', {}, [
      el('dt', { text: 'Tools' }),
      el('dd', { text: p.tools.join(', ') })
    ])

  ]);


  body.appendChild(meta);


  if (p.note) {

    body.appendChild(el('div', {
      'class': 'callout',
      style: 'margin-top: var(--space-5)'
    }, [
      el('p', { text: p.note })
    ]));

  }


  p.sections.forEach(function (s) {

    if (s.pending && !SHOW_PENDING) return;

    var section = el('section', {
      'class': 'case-section'
    }, [
      el('h2', { text: s.heading })
    ]);


    if (s.pending) {

      section.appendChild(el('div', {
        'class': 'placeholder-note',
        text: 'To be added: ' + s.note
      }));

    } else {

      section.appendChild(el('ul', {},

        s.items.map(function (i) {
          return el('li', { text: i });
        })

      ));

    }

    body.appendChild(section);

  });


  /* Screenshots */

  if (p.screenshots && p.screenshots.length) {

    var shots = el('section', {
      'class': 'case-section'
    }, [
      el('h2', { text: 'Project Screenshots' })
    ]);


    var grid = el('div', {
      'class': p.screenshots.length > 1
        ? 'grid grid--2'
        : 'grid'
    }, []);


    p.screenshots.forEach(function (s) {

      var img = el('img', {
        src: s.src,
        alt: s.alt,
        loading: 'lazy'
      });


      var open = el('a', {
        href: s.src,
        target: '_blank',
        rel: 'noopener',
        'aria-label': 'Open full-size image: ' + (s.caption || s.alt)
      }, [img]);


      grid.appendChild(el('figure', {}, [
        open,
        el('figcaption', {
          text: s.caption || ''
        })
      ]));

    });


    shots.appendChild(grid);
    body.appendChild(shots);

  }


  /* Previous and next projects */

  var prev = PROJECTS[index - 1];
  var next = PROJECTS[index + 1];


  body.appendChild(el('nav', {
    'class': 'case-nav',
    'aria-label': 'Other projects'
  }, [

    prev
      ? el('a', {
          href: 'project.html?id=' + prev.id,
          text: 'Previous: ' + prev.title
        })
      : el('span'),

    next
      ? el('a', {
          href: 'project.html?id=' + next.id,
          text: 'Next: ' + next.title
        })
      : el('span')

  ]));


  root.appendChild(body);

}


/* ==========================================================================
   INITIALIZE
   ========================================================================== */

renderProjectGrid();
renderCaseStudy();
