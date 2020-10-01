 const PROJECTS =  [
     
    { 
        id: 14, 
        usedToBuild:'Boostrap', 
        imageUrl:"../images/Home.png", 
        name: 'Website #1', 
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.", 
        usesBootstrap: true,
    },

    { 
        id: 15, 
        usedToBuild:'React', 
        imageUrl:"../images/Home.png", 
        name: 'Wesbite #2', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.', 
        usesReact: true 
    },

    { 
        id: 16, 
        usedToBuild:'React Native', 
        imageUrl:"../images/Home.png", 
        name: 'Website #3', 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.', 
        usesReact: true 
    },
];



const PROJECT_PAGES = [
    {
        id: 1,
        imageUrl: require("../images/Home.png"),
        page: 'Home Section',
        name:'Speech Therapy Website',
        ux_description:'Before writing a single line of code, I first researched similar websites and worked closely with a client to discuss user and business needs. User-experience was at the heart of...blah, blah, blah...',
        description: "In this section I utilized Bootstrap's many features, incorporated font-awesome icons, and leveraged google fonts to create an intuitive, warm-feeling, and professional-looking Speech Therapy website.",
        project:'Bootstrap Project',
        // features: ['Carousel', 'Button', 'Card'],
        
    },
    {
        id: 2,
        imageUrl: require("../images/About.png"),
        page: 'About Section',
        description: 'In this section I...',
    },
    {
        id: 3,
        imageUrl: require("../images/getStarted.png"),
        page: 'Get Started Section',
        description: 'In this section I...',
    }, 
    {
        id: 4,
        imageUrl: require("../images/Footer.png"),
        page: 'Footer Section',
        description: 'In this section I...',
    },       
   
];

export  {PROJECTS, PROJECT_PAGES};

