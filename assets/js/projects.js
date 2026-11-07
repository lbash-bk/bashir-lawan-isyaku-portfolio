/* ==========================================================================
   projects.js: ALL project content lives here.
   To add a project: copy one object in PROJECTS, change the values, save.
   - Use null for anything you do not have yet (links with null are hidden).
   - Sections with `pending: true` show a "to be added" note while you work.
     Set SHOW_PENDING to false to hide every pending note before going live.
   ========================================================================== */

var SHOW_PENDING = true;

var PROJECTS = [
  {
    id: 'sales-performance-analysis',
    title: 'Sales Performance Analysis and Dashboard',
    category: 'analytics',
    kind: 'Independent project',
    status: 'Completed',
    summary: 'Cleaned and standardized e-commerce sales data, then analyzed revenue, profitability, product categories, regions and sales channels.',
    tools: ['Python', 'Pandas', 'Power BI'],
    links: {
      github: 'https://github.com/lbash-bk/E-Commerce-Sales-Performance-Analysis-and-Dashboard',
      live: null,
      docs: null
    },
    thumb: 'assets/images/projects/sales_performance_dashboard.png',
    sections: [
      { heading: 'Business problem', pending: true, note: 'Describe the business questions this analysis answers.' },
      { heading: 'Data preparation', items: ['Cleaned and standardized e-commerce sales data using Python and Pandas.'] },
      { heading: 'Analysis', items: ['Analyzed revenue, profitability, product categories, regional performance and sales channels to identify business patterns.', 'Built visualizations and a Power BI dashboard to communicate key performance indicators and findings.'] },
      { heading: 'Key findings', pending: true, note: 'Add your findings with the real numbers (for example revenue by region or category).' },
      { heading: 'Dashboard screenshots', pending: true, note: 'Add screenshots to assets/images/projects/ and list them in the screenshots field.' }
    ],
    screenshots: ['assets/images/projects/sales_performance_dashboard.png', 'assets/images/projects/sales_performance_dashboard_2.png']
  },
  {
    id: 'bootcamp-sales-data-analysis',
    title: 'Sales Data Analysis and Power BI Dashboard (2026 Data Science Nigeria Bootcamp)',
    category: 'analytics',
    kind: 'Bootcamp project, 2026',
    status: 'Completed',
    summary: 'Cleaned a sales transaction dataset, investigated data quality issues and built a Power BI dashboard of key performance indicators.',
    tools: ['Python', 'Pandas', 'Power BI'],
    links: {
      github: 'https://github.com/lbash-bk/2026-Nigerian-Data-Science-Bootcamp-Project',
      live: null,
      docs: null
    },
    thumb: null,
    sections: [
      { heading: 'Data preparation', items: ['Cleaned and prepared a sales transaction dataset using Python and Pandas.', 'Identified and removed 12 duplicate TransactionID records.', 'Investigated missing values in the Cost per Unit column and handled 31 missing records.'] },
      { heading: 'Analysis', items: ['Performed exploratory data analysis to investigate sales performance and business trends.', 'Developed a Power BI dashboard to communicate key performance indicators and analytical findings.', 'Completed and submitted the project within the bootcamp deadline.'] },
      { heading: 'Key findings', pending: true, note: 'Add findings and the total revenue figure here once confirmed.' },
      { heading: 'Dashboard screenshots', pending: true, note: 'Add dashboard screenshots.' }
    ],
    screenshots: []
  },
  {
    id: 'bank-customer-churn-analysis',
    title: 'Bank Customer Churn Analysis',
    category: 'analytics',
    kind: 'Independent project',
    status: 'In progress',
    summary: 'Cleaning and combining customer and account data to investigate customer characteristics and churn-related patterns.',
    tools: ['Python', 'Pandas'],
    links: { github: null, live: null, docs: null },
    thumb: null,
    sections: [
      { heading: 'Data cleaning', items: ['Inspected customer and account datasets and addressed duplicate records, inconsistent data types and data-quality issues.', 'Used Python and Pandas to clean and prepare structured data for further analysis.'] },
      { heading: 'Current work', items: ['Combining customer and account information to investigate customer characteristics and churn-related patterns.'] },
      { heading: 'Findings and recommendations', pending: true, note: 'Results will be added when the analysis is complete.' }
    ],
    screenshots: []
  },
  {
    id: 'fud-study-hub',
    title: 'FUD Study Hub',
    category: 'software',
    kind: 'Founder, Project Manager and System Architect',
    status: 'Live',
    summary: 'A platform where Federal University Dutse students find lecture notes, past examination questions and other academic resources.',
    tools: ['Python', 'Django', 'PostgreSQL', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    links: {
      github: null, // add your repository link when ready
      live: 'https://fud-study-hub.onrender.com',
      docs: null
    },
    thumb: null,
    sections: [
      { heading: 'Problem', items: ['Students found it difficult to access lecture notes, past examination questions and other academic resources. I gathered user input to understand the problem before designing the solution.'] },
      { heading: 'My role', items: ['Founder, Project Manager and System Architect.', 'Designed and developed a centralized academic-resource platform.'] },
      { heading: 'Architecture and technologies', items: ['Python and Django for the application, with HTML, CSS and JavaScript for the interface.', 'SQLite during development and PostgreSQL in production.', 'Deployed on Render.'] },
      { heading: 'Main features', items: ['User access (accounts).', 'Upload and download workflows for study materials.'] },
      { heading: 'Screenshots', pending: true, note: 'Add application screenshots.' }
    ],
    screenshots: [],
    note: 'The live site runs on free hosting, so the first visit can take up to a minute to wake up.'
  }
];

/* ---------------------------- rendering helpers ---------------------------- */

function el(tag, attrs, children) {
  var node = document.createElement(tag);
  Object.keys(attrs || {}).forEach(function (k) {
    if (k === 'text') node.textContent = attrs[k];
    else node.setAttribute(k, attrs[k]);
  });
  (children || []).forEach(function (c) { if (c) node.appendChild(c); });
  return node;
}

function tagList(tools) {
  return el('ul', { 'class': 'tag-list' }, tools.map(function (t) { return el('li', { 'class': 'tag', text: t }); }));
}

function statusBadge(status) {
  if (status === 'In progress') return el('span', { 'class': 'badge badge--progress', text: status });
  if (status === 'Live') return el('span', { 'class': 'badge badge--live', text: status });
  return null;
}

function linkButton(label, href, style) {
  return el('a', { 'class': 'btn ' + style, href: href, rel: 'noopener', text: label });
}

function projectCard(p) {
  var thumb = p.thumb
    ? el('div', { 'class': 'project-card__thumb' }, [el('img', { src: p.thumb, alt: p.title + ' preview', loading: 'lazy' })])
    : el('div', { 'class': 'project-card__thumb', text: 'Preview image coming soon' });

  var meta = el('div', { 'class': 'project-card__meta' }, [statusBadge(p.status), el('span', { text: p.kind })]);
  var actions = el('div', { 'class': 'project-card__actions' }, [
    linkButton('View case study', 'project.html?id=' + encodeURIComponent(p.id), 'btn--primary'),
    p.links.github ? linkButton('GitHub', p.links.github, 'btn--secondary') : null,
    p.links.live ? linkButton('Live site', p.links.live, 'btn--secondary') : null
  ]);

  var card = el('article', { 'class': 'project-card reveal', 'data-category': p.category }, [
    thumb,
    el('div', { 'class': 'project-card__body' }, [
      el('h3', { text: p.title }), meta,
      el('p', { 'class': 'project-card__summary', text: p.summary }),
      tagList(p.tools), actions
    ])
  ]);
  return card;
}

function renderProjectGrid() {
  var grid = document.getElementById('project-grid');
  if (!grid) return;
  PROJECTS.forEach(function (p) { grid.appendChild(projectCard(p)); });
}

function renderCaseStudy() {
  var root = document.getElementById('case-root');
  if (!root) return;
  var id = new URLSearchParams(window.location.search).get('id');
  var index = PROJECTS.findIndex(function (p) { return p.id === id; });
  var p = PROJECTS[index];

  if (!p) {
    root.appendChild(el('div', { 'class': 'container section' }, [
      el('h1', { text: 'Project not found' }),
      el('p', { text: 'This project does not exist. ' }),
      el('a', { 'class': 'btn btn--primary', href: 'index.html#projects', text: 'Back to all projects' })
    ]));
    document.title = 'Project not found | Bashir Lawan Isyaku';
    return;
  }
  document.title = p.title + ' | Bashir Lawan Isyaku';

  var heroActions = el('div', { 'class': 'project-card__actions' }, [
    p.links.github ? linkButton('View on GitHub', p.links.github, 'btn--light') : null,
    p.links.live ? linkButton('Open live site', p.links.live, 'btn--outline-light') : null,
    p.links.docs ? linkButton('Read documentation', p.links.docs, 'btn--outline-light') : null
  ]);

  root.appendChild(el('section', { 'class': 'case-hero on-dark' }, [
    el('div', { 'class': 'container' }, [
      el('a', { 'class': 'back', href: 'index.html#projects', text: 'Back to projects' }),
      el('h1', { text: p.title }),
      el('p', { text: p.summary }),
      heroActions
    ])
  ]));

  var body = el('div', { 'class': 'container section' }, []);
  var meta = el('dl', { 'class': 'case-meta' }, [
    el('div', {}, [el('dt', { text: 'Role' }), el('dd', { text: p.kind })]),
    el('div', {}, [el('dt', { text: 'Status' }), el('dd', { text: p.status })]),
    el('div', {}, [el('dt', { text: 'Tools' }), el('dd', { text: p.tools.join(', ') })])
  ]);
  body.appendChild(meta);

  if (p.note) body.appendChild(el('div', { 'class': 'callout', style: 'margin-top: var(--space-5)' }, [el('p', { text: p.note })]));

  p.sections.forEach(function (s) {
    if (s.pending && !SHOW_PENDING) return;
    var section = el('section', { 'class': 'case-section' }, [el('h2', { text: s.heading })]);
    if (s.pending) {
      section.appendChild(el('div', { 'class': 'placeholder-note', text: 'To be added: ' + s.note }));
    } else {
      section.appendChild(el('ul', {}, s.items.map(function (i) { return el('li', { text: i }); })));
    }
    body.appendChild(section);
  });

  if (p.screenshots.length) {
    var shots = el('section', { 'class': 'case-section' }, [el('h2', { text: 'Screenshots' })]);
    var grid = el('div', { 'class': 'grid grid--2' }, []);
    p.screenshots.forEach(function (s) {
      grid.appendChild(el('figure', {}, [el('img', { src: s.src, alt: s.alt, loading: 'lazy' }), el('figcaption', { text: s.caption || '' })]));
    });
    shots.appendChild(grid);
    body.appendChild(shots);
  }

  var prev = PROJECTS[index - 1], next = PROJECTS[index + 1];
  body.appendChild(el('nav', { 'class': 'case-nav', 'aria-label': 'Other projects' }, [
    prev ? el('a', { href: 'project.html?id=' + prev.id, text: 'Previous: ' + prev.title }) : el('span'),
    next ? el('a', { href: 'project.html?id=' + next.id, text: 'Next: ' + next.title }) : el('span')
  ]));

  root.appendChild(body);
}

renderProjectGrid();
renderCaseStudy();
