// const employee = [
//  {
//    id: 1,
//    firstname: "Aarav",
//    email: "employee1@taskbridge.com",
//    password: "12345",
//    taskNumbers: { active: 2, newTask: 1, completed: 2, failed: 1 },
//    tasks: [
//      {
//        active: true,
//        newTask: false,
//        completed: false,
//        failed: false,
//        priority: "High",
//        title: "Design Login UI",
//        description:
//          "Design modern login interface\nUse dark theme styling\nEnsure responsive layout",
//        dateCreated: "01 Feb 2026",
//        dueDate: "09 Feb 2026",
//        category: "Design"
//      },
//      {
//        active: false,
//        newTask: true,
//        completed: false,
//        failed: false,
//        priority: "Medium",
//        title: "Profile Page",
//        description:
//          "Create employee profile page\nShow personal information clearly\nMaintain consistent UI design",
//        dateCreated: "03 Feb 2026",
//        dueDate: "07 Feb 2026",
//        category: "Frontend"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Low",
//        title: "Fix Navbar Bug",
//        description:
//          "Fix navbar alignment issues\nCorrect spacing across devices\nTest responsiveness thoroughly",
//        dateCreated: "20 Jan 2026",
//        dueDate: "23 Jan 2026",
//        category: "Development"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Medium",
//        title: "Update Icons",
//        description:
//          "Replace outdated dashboard icons\nEnsure visual consistency\nFollow design guidelines",
//        dateCreated: "18 Jan 2026",
//        dueDate: "24 Jan 2026",
//        category: "UI"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: false,
//        failed: true,
//        priority: "High",
//        title: "API Integration",
//        description:
//          "Integrate authentication APIs\nHandle error responses properly\nSecure user credentials",
//        dateCreated: "15 Jan 2026",
//        dueDate: "25 Jan 2026",
//        category: "Backend"
//      }
//    ]
//  },
//  {
//    id: 2,
//    firstname: "Vihaan",
//    email: "employee2@taskbridge.com",
//    password: "12345",
//    taskNumbers: { active: 1, newTask: 2, completed: 1, failed: 1 },
//    tasks: [
//      {
//        active: true,
//        newTask: false,
//        completed: false,
//        failed: false,
//        priority: "High",
//        title: "Dashboard Cards",
//        description:
//          "Build dashboard statistic cards\nDisplay task counts visually\nMaintain responsive grid layout",
//        dateCreated: "03 Feb 2026",
//        dueDate: "13 Feb 2026",
//        category: "Design"
//      },
//      {
//        active: false,
//        newTask: true,
//        completed: false,
//        failed: false,
//        priority: "Medium",
//        title: "Empty State UI",
//        description:
//          "Design empty task screens\nGuide users with helpful messages\nMaintain clean visual layout",
//        dateCreated: "04 Feb 2026",
//        dueDate: "10 Feb 2026",
//        category: "UI"
//      },
//      {
//        active: false,
//        newTask: true,
//        completed: false,
//        failed: false,
//        priority: "Low",
//        title: "Tooltip Copy",
//        description:
//          "Add tooltip guidance text\nImprove user understanding\nEnsure concise messaging",
//        dateCreated: "05 Feb 2026",
//        dueDate: "08 Feb 2026",
//        category: "UX"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Low",
//        title: "Optimize Images",
//        description:
//          "Compress application images\nReduce load time\nMaintain image quality",
//        dateCreated: "22 Jan 2026",
//        dueDate: "25 Jan 2026",
//        category: "Optimization"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: false,
//        failed: true,
//        priority: "Medium",
//        title: "Unit Testing",
//        description:
//          "Write unit test cases\nCover login functionality\nEnsure test reliability",
//        dateCreated: "18 Jan 2026",
//        dueDate: "24 Jan 2026",
//        category: "Testing"
//      }
//    ]
//  },
//  {
//    id: 3,
//    firstname: "Ishaan",
//    email: "employee3@taskbridge.com",
//    password: "12345",
//    taskNumbers: { active: 1, newTask: 1, completed: 2, failed: 0 },
//    tasks: [
//      {
//        active: true,
//        newTask: false,
//        completed: false,
//        failed: false,
//        priority: "High",
//        title: "Task List UI",
//        description:
//          "Build task list interface\nSupport responsive layouts\nEnsure smooth user experience",
//        dateCreated: "05 Feb 2026",
//        dueDate: "15 Feb 2026",
//        category: "Frontend"
//      },
//      {
//        active: false,
//        newTask: true,
//        completed: false,
//        failed: false,
//        priority: "Medium",
//        title: "Search Filter",
//        description:
//          "Add task search functionality\nFilter tasks efficiently\nImprove usability performance",
//        dateCreated: "06 Feb 2026",
//        dueDate: "12 Feb 2026",
//        category: "Frontend"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Low",
//        title: "Form Validation",
//        description:
//          "Add validation to forms\nPrevent empty submissions\nDisplay error messages",
//        dateCreated: "25 Jan 2026",
//        dueDate: "28 Jan 2026",
//        category: "Development"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Low",
//        title: "Refactor CSS",
//        description:
//          "Refactor existing CSS code\nRemove unused styles\nImprove maintainability",
//        dateCreated: "24 Jan 2026",
//        dueDate: "27 Jan 2026",
//        category: "UI"
//      }
//    ]
//  },
//  {
//    id: 4,
//    firstname: "Kabir",
//    email: "employee4@taskbridge.com",
//    password: "12345",
//    taskNumbers: { active: 2, newTask: 0, completed: 1, failed: 1 },
//    tasks: [
//      {
//        active: true,
//        newTask: false,
//        completed: false,
//        failed: false,
//        priority: "High",
//        title: "Create Sidebar",
//        description:
//          "Build collapsible sidebar\nSupport navigation items\nEnsure smooth animations",
//        dateCreated: "04 Feb 2026",
//        dueDate: "14 Feb 2026",
//        category: "UI"
//      },
//      {
//        active: true,
//        newTask: false,
//        completed: false,
//        failed: false,
//        priority: "Medium",
//        title: "Header Layout",
//        description:
//          "Improve header layout\nAlign elements properly\nEnsure responsive behavior",
//        dateCreated: "05 Feb 2026",
//        dueDate: "11 Feb 2026",
//        category: "UI"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Low",
//        title: "Dark Mode Fix",
//        description:
//          "Fix dark mode contrast\nImprove text readability\nTest across screens",
//        dateCreated: "21 Jan 2026",
//        dueDate: "24 Jan 2026",
//        category: "UI"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: false,
//        failed: true,
//        priority: "High",
//        title: "Role Access",
//        description:
//          "Implement role based access\nRestrict unauthorized actions\nSecure sensitive routes",
//        dateCreated: "10 Jan 2026",
//        dueDate: "20 Jan 2026",
//        category: "Security"
//      }
//    ]
//  },
//  {
//    id: 5,
//    firstname: "Rohan",
//    email: "employee5@taskbridge.com",
//    password: "12345",
//    taskNumbers: { active: 0, newTask: 2, completed: 1, failed: 1 },
//    tasks: [
//      {
//        active: false,
//        newTask: true,
//        completed: false,
//        failed: false,
//        priority: "Medium",
//        title: "Documentation",
//        description:
//          "Write project documentation\nExplain setup instructions\nMaintain clear structure",
//        dateCreated: "06 Feb 2026",
//        dueDate: "12 Feb 2026",
//        category: "Documentation"
//      },
//      {
//        active: false,
//        newTask: true,
//        completed: false,
//        failed: false,
//        priority: "Low",
//        title: "Changelog",
//        description:
//          "Prepare version changelog\nList recent updates\nMaintain release history",
//        dateCreated: "07 Feb 2026",
//        dueDate: "10 Feb 2026",
//        category: "Documentation"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: true,
//        failed: false,
//        priority: "Low",
//        title: "Code Cleanup",
//        description:
//          "Remove unused components\nRefactor redundant logic\nImprove code readability",
//        dateCreated: "23 Jan 2026",
//        dueDate: "26 Jan 2026",
//        category: "Maintenance"
//      },
//      {
//        active: false,
//        newTask: false,
//        completed: false,
//        failed: true,
//        priority: "High",
//        title: "Performance Audit",
//        description:
//          "Analyze performance bottlenecks\nIdentify slow components\nSuggest optimization improvements",
//        dateCreated: "14 Jan 2026",
//        dueDate: "24 Jan 2026",
//        category: "Optimization"
//      }
//    ]
//  }
// ];

// const admin = [
//     {
//         id: 101,
//         firstname: "akhil",
//         email: "akhil@taskbridge.com",
//         password: "12345"
//     }
// ];

const taskbridge = {
  organization: {
    id: "org-1a2b3c",
    name: "TaskBridge Solutions",
    category: "IT & Product",
    description: "A product-focused organization building internal tools for teams.",
    createdAt: "01 Feb 2026"
  },

  admin: {
    id: "admin-001",
    firstName: "Akhil",
    lastName: "Shetty",
    email: "akhil@taskbridge.com",
    password: "12345"
  },

  employees: [
    {
      id: "emp-001",
      firstName: "Aarav",
      lastName: "Mehta",
      email: "aarav@taskbridge.com",
      password: "12345",
      position: "UI Designer",
      taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 1 },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "High",
          title: "Design Login UI",
          description: "Create modern login screen with dark theme",
          dateCreated: "01 Feb 2026",
          dueDate: "05 Feb 2026",
          category: "Design"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "Medium",
          title: "Dashboard Wireframe",
          description: "Prepare dashboard wireframes",
          dateCreated: "02 Feb 2026",
          dueDate: "07 Feb 2026",
          category: "Design"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          priority: "Low",
          title: "Color Palette Research",
          description: "Research brand color palette",
          dateCreated: "03 Feb 2026",
          dueDate: "08 Feb 2026",
          category: "Research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Medium",
          title: "Typography Selection",
          description: "Finalize font families",
          dateCreated: "28 Jan 2026",
          dueDate: "31 Jan 2026",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          priority: "Low",
          title: "Icon Set Review",
          description: "Review icon consistency",
          dateCreated: "26 Jan 2026",
          dueDate: "29 Jan 2026",
          category: "Design"
        }
      ]
    },

    {
      id: "emp-002",
      firstName: "Riya",
      lastName: "Sharma",
      email: "riya@taskbridge.com",
      password: "12345",
      position: "Frontend Developer",
      taskNumbers: { active: 2, newTask: 0, completed: 2, failed: 0 },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "High",
          title: "Implement Login Logic",
          description: "Add form validation and auth logic",
          dateCreated: "01 Feb 2026",
          dueDate: "06 Feb 2026",
          category: "Development"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "Medium",
          title: "Setup Routing",
          description: "Configure React Router",
          dateCreated: "02 Feb 2026",
          dueDate: "06 Feb 2026",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Medium",
          title: "Tailwind Setup",
          description: "Configure Tailwind CSS",
          dateCreated: "29 Jan 2026",
          dueDate: "30 Jan 2026",
          category: "Setup"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Low",
          title: "Linting Rules",
          description: "Add ESLint config",
          dateCreated: "28 Jan 2026",
          dueDate: "29 Jan 2026",
          category: "Setup"
        }
      ]
    },

    {
      id: "emp-003",
      firstName: "Kunal",
      lastName: "Verma",
      email: "kunal@taskbridge.com",
      password: "12345",
      position: "Backend Developer",
      taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "High",
          title: "Auth API",
          description: "Create login APIs",
          dateCreated: "01 Feb 2026",
          dueDate: "06 Feb 2026",
          category: "Backend"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          priority: "Medium",
          title: "JWT Strategy",
          description: "Research token strategy",
          dateCreated: "03 Feb 2026",
          dueDate: "08 Feb 2026",
          category: "Research"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Low",
          title: "DB Schema Draft",
          description: "Draft initial schema",
          dateCreated: "29 Jan 2026",
          dueDate: "30 Jan 2026",
          category: "Database"
        }
      ]
    },

    {
      id: "emp-004",
      firstName: "Neha",
      lastName: "Iyer",
      email: "neha@taskbridge.com",
      password: "12345",
      position: "QA Engineer",
      taskNumbers: { active: 1, newTask: 1, completed: 2, failed: 0 },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "High",
          title: "Write Test Cases",
          description: "Prepare test cases for auth",
          dateCreated: "01 Feb 2026",
          dueDate: "06 Feb 2026",
          category: "Testing"
        },
        {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          priority: "Medium",
          title: "Edge Case Review",
          description: "Identify edge scenarios",
          dateCreated: "02 Feb 2026",
          dueDate: "07 Feb 2026",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Low",
          title: "Smoke Tests",
          description: "Initial smoke testing",
          dateCreated: "29 Jan 2026",
          dueDate: "30 Jan 2026",
          category: "Testing"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Low",
          title: "Bug Verification",
          description: "Verify resolved bugs",
          dateCreated: "30 Jan 2026",
          dueDate: "31 Jan 2026",
          category: "Testing"
        }
      ]
    },

    {
      id: "emp-005",
      firstName: "Siddharth",
      lastName: "Rao",
      email: "siddharth@taskbridge.com",
      password: "12345",
      position: "Intern",
      taskNumbers: { active: 1, newTask: 0, completed: 1, failed: 0 },
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          priority: "Low",
          title: "Documentation Cleanup",
          description: "Fix formatting in docs",
          dateCreated: "01 Feb 2026",
          dueDate: "05 Feb 2026",
          category: "Documentation"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          priority: "Low",
          title: "Read Codebase",
          description: "Understand project structure",
          dateCreated: "29 Jan 2026",
          dueDate: "30 Jan 2026",
          category: "Learning"
        }
      ]
    }
  ]
};


export const setLocalStorage = () => {
  localStorage.setItem("taskbridge", JSON.stringify(taskbridge));
};

export const getLocalStorage = () => {
  const taskbridgeStr = localStorage.getItem("taskbridge");

  let taskbridge = {
    organization: null,
    admin: null,
    employees: []
  };

  if (taskbridgeStr) {
    try {
      taskbridge = JSON.parse(taskbridgeStr);
    } catch (err) {
      console.error("Failed to parse taskbridge from localStorage:", err);
    }
  }

  return {
    organization: taskbridge.organization,
    admin: taskbridge.admin,
    employees: taskbridge.employees
  };
};


export const getOrganizationData = () => {
  try {
    const raw = localStorage.getItem("taskbridge");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.organization ?? null;
  } catch (error) {
    console.error("Failed to read organization data:", error);
    return null;
  }
};