const projects = [
    {
        id: 1,
        title: "Bookshelf",
        category: 'Frontend',
        description:
            "Eine einfaceh CRUD Applikation die Firebase als Datenbank und Benutzer-Authentifizierung nutzt.",
        github: "https://github.com/vertskater/bookshelf-fs",
        live: "https://bookshelf-fs.vercel.app/",
        img: "/img/bookshelf-fs.png",
        techStack: ['/icons/firebase.svg', '/icons/css.svg', '/icons/typescript.svg', '/icons/react.svg']
    },
    {
        id: 2,
        title: "React Memory Game",
        category: 'Frontend',
        description:
            "Ein einfaches Merkspiel mit Highscore Anzeige und Punktestand Zähler.",
        github: "https://github.com/vertskater/memory-game/tree/main",
        live: "https://memory-game-woad-psi.vercel.app/",
        img: "/img/memory-game.png",
        techStack: ['/icons/react.svg', 'icons/javascript.svg', 'icons/sass.svg']
    },
    {
        id: 3,
        title: "React Shopping Cart",
        category: 'Frontend',
        description:
            "Ein kleines Webshop-Frontend mit Suchfunktion und Warenkorb",
        github: "https://github.com/vertskater/shopping-cart",
        live: "https://shopping-cart-six-lac.vercel.app/",
        img: "/img/shopping-cart.png",
        techStack: ['/icons/react.svg', '/icons/javascript.svg', '/icons/css.svg', '/icons/react-router.svg']
    },
    {
        id: 4,
        title: "Webshop PHP",
        category: 'Backend',
        description: "Ein Webshop mit PHP und MariaDB als Datenbank.",
        github: "https://github.com/vertskater/php-webshop",
        live: "",
        img: "/img/webshop-php.png",
        techStack: ['/icons/php.svg', '/icons/html.svg', '/icons/css.svg', '/icons/mariadb.svg']
    },
    {
        id: 5,
        title: "WordPress Theme",
        category: 'Backend/Frontend',
        description: "Ein WordPress-Theme zum Darstellen von Kursen im Schulungskontext.",
        github: "https://github.com/vertskater/wp_theme",
        live: "",
        img: "/img/wordpress.png",
        techStack: ['/icons/php.svg', '/icons/html.svg', '/icons/sass.svg', '/icons/css.svg', '/icons/mariadb.svg', '/icons/wordpress.svg']
    },
    {
        id: 6,
        title: "My-Drive",
        category: 'Frontend/Backend',
        description:
            "Eine Applikation mit Nodejs/Express/PostgreSQL zum Erstellen von Verzeichnissen und hochladen von Dateien.",
        github: "https://github.com/vertskater/my-drive",
        live: "https://my-drive-production.up.railway.app/",
        img: "/img/mydrive.png",
        techStack: ['/icons/nodejs.svg', "/icons/express.svg", '/icons/postgresql.svg', '/icons/prisma.svg', "/icons/javascript.svg"]
    },
    {
        id: 7,
        title: "Blog API",
        category: 'Backend',
        description:
            "Eine API zum Abrufen von Blogbeiträgen und Kommentaren. Umgesetzt mit Nodejs/Express/PostgreSQL.",
        github: "https://github.com/vertskater/blog-api",
        live: "https://blog-frontend-lac-seven.vercel.app/",
        img: "/img/blog-api.png",
        techStack: ['/icons/nodejs.svg', "/icons/express.svg", '/icons/postgresql.svg', '/icons/prisma.svg', '/icons/jwt.svg']
    },
    {
        id: 8,
        title: "Realtime Chat",
        category: 'Backend',
        description:
            "Ein Echtzeitchat mit Socket.io, Express als Backend und React als Frontend.",
        github: "https://github.com/vertskater/chat-app-backend",
        live: "https://chat-app-frontend-one-omega.vercel.app",
        img: "/img/chatapp.png",
        techStack: ['/icons/nodejs.svg', "/icons/express.svg", '/icons/postgresql.svg', '/icons/prisma.svg', '/icons/jwt.svg', '/icons/socketio.svg', '/icons/vite.svg']
    },
];

export default projects;