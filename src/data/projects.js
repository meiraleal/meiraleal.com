const projects = [
    {
        className: 'meSenger',
        description: 'A 1-person chatbot platform built with React Native and ClojureScript. A personal project to challenge and inspire oneself.',
        clientDescription: 'Me-senger is an open source side-project of mine that I use to test some concepts and new technologies like Chatbots, AI, ClojureScript, Re-frame and React Native. Its source code is available at github.',
        links: {
            website: 'http://github.com/meiraleal/me-senger',
        },
        slug: 'me-senger',
        title: 'Me-senger',
        cover: require('./me-senger.png'),
        theme: {
            background: '#FFFFFF',
            light: true,
        },
    },
    {
        className: 'alipioDigital',
        description: 'Local guide app made with React Native and ClojureScript.',
        clientDescription: 'Alipio Digital was a local guide app for the neighboorhood of Alipio de Melo, Belo Horizonte. A summer project for tests with React Native. The website frontend was made using wordpress.',
        links: {
            android: 'https://play.google.com/store/apps/details?id=com.alipiodigital&hl=en',
            website: 'https://web.archive.org/web/20161108163343/http://www.alipiodigital.com:80/'
        },
        slug: 'alipio-digital',
        title: 'Alipio Digital',
        cover: require('./alipio-digital.png'),
        theme: {
            background: '#b63a5c',
        },
    },
    {
        className: 'porto-seguro',
        description: "Worked as a freelancer in the development of the new Porto Seguro\'s sales platform, used by their entire insurance & car rental.",
        clientDescription: 'The development team was divided into 2 SCRUM Squads, one focused on evolution of the platform and the other for the maintenance. I worked in the frontend of the evolution squad, as a remote freelancer. The platform was developed using Meteor, React and webpack, with different small systems working together (microservices). The backend infraestructure used was Amazon AWS and the CI/CD were the Atlassian suite (Jira, bitbucket, trello & others). The time management was done using TimeDoctor.',
        links: {
            website: 'https://corretor.portoseguro.com.br/corretoronline/',
        },
        slug: 'porto-seguro',
        title: 'Porto Seguro',
        cover: require('./porto-seguro.png'),
        theme: {
            background: '#00a5d1',
        },
    },
    {
        className: 'adnexio',
        description: 'Web platform to allow ad managers monitor and control their campaigns, ads and budget.',
        clientDescription: 'Adnexio is the solution used internally by Advantage Media Group, a Danish marketing agency focused in retargeting. The product integrated Google DoubleClick, Google Adwords and other services to function as a DSP. The platform was developed using C#, Angular 2/4, RxJS and typescript. I was responsible for the Frontend and part of the devOps. The infrastructure used was Amazon AWS integrated with Github. The communication was done mainly through Skype, Slack and Github Projects',
        links: {
            website: 'https://web.archive.org/web/20170818115716/http://www.advantagemedia.dk',
        },
        slug: 'adnexio',
        title: 'Adnexio',
        cover: require('./adnexio.png'),
        theme: {
            background: '#F7F7F7',
            light: true,
        },
    },
    {
        className: 'engarte',
        description: 'A marketplace for Engineers and engineering jobs.',
        clientDescription: 'Engarte was the leading marketplace & social network for engineers, architects and constructors around 2013. With more than 10k signed professionals and companies, the project was one of the selected for the program Startup Brasil of the year of 2014. Technologies used: Ruby on Rails, NodeJS, React. Backend: Amazon Services.',
        links: {
            website: 'https://web.archive.org/web/20130703025435/http://www.engarte.com:80/',
        },
        slug: 'engarte',
        title: 'Engarte',
        cover: require('./engarte.png'),
        theme: {
            background: '#33414b',
        },
    },
    {
        className: 'textCorner',
        description: 'Functional MVP of a marketplace for content writers. With it, the company got accepted to the now famous Startup Chile.',
        clientDescription: 'Functional MVP of a marketplace for content writers. With it, the company got accepted to the now famous Startup Chile. Technologies used: Ruby on Rails, Bootstrap. Backend: Heroku.',
        links: {
            website: 'https://web.archive.org/web/20130501054159/http://www.textcorner.com.br:80/',
        },
        slug: 'text-corner',
        title: 'TextCorner',
        cover: require('./text-corner.png'),
        theme: {
            background: '#f4f5fa',
            light: true,
        },
    },
    {
        className: 'via6',
        description: 'Via6 was the first business social network of Brazil, appearing around the same time Linkedin started in the US.',
        clientDescription: '',
        links: {
            website: 'https://web.archive.org/web/20101005100440/http://www.via6.com:80/',
        },
        slug: 'via6',
        title: 'Via6',
        cover: require('./via6.jpg'),
        theme: {
            background: '#e0e0e0',
            light: true
        },
    },
    {
        className: 'moipLabs',
        description: 'MoIP Labs is the open source community around the API of MoIP, one of the top brazilian digital payment gateways.',
        clientDescription: '',
        links: {
            website: 'https://labs.moip.com/',
        },
        slug: 'moip-labs',
        title: 'Moip Labs',
        cover: require('./moip-labs.png'),
        theme: {
            background: '#fff',
            light: true
        },
    },
];

export default projects;
