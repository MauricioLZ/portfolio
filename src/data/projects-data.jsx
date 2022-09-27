const projects = [
    {
        title: "Portfolio Website",
        year: 2022,
        platforms: ["Website", "PC"],
        engine: "React JS",
        coverImg: "https://i.imgur.com/rudNu09.png",
        media: [],
        link: "",
        description: "This very website that you're seeing! I got really excited once I thought about this Final Fantasy VII theme for it and it just took me a few weeks to get everything in order.\n\nThis was a great opportunity to practice my React skils. I learned React in 2019 and used it for work, but since then I hadn't really had the chance to come back to it. After taking a course in fullstack development earlier in 2022 this website ended up being the result of my prior knowledge with React combined with newly developed skills."
    },
    // {
    //     title: "Poke Guess",
    //     year: 2021,
    //     platforms: ["Game", "Mobile"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/G0b2pCU.jpg",
    //     media: ["https://i.imgur.com/0e8QudB.jpg", "https://i.imgur.com/fAHevH5.jpg", "https://i.imgur.com/C9MxO9m.jpg", "https://i.imgur.com/9Sdx8n5.jpg"],
    //     link: "",
    //     description: "Poké Guess is a very simple game made in 1 day meant to be a birthday gift for my nephew. It is a guessing game, as name suggests, where you see a Pokémon and you have to get its name right. It has all the 150 initial Pokémon.\n\nThere is also a basic math mode where Pokémon images are used to make simple sums and subtractions of numbers from 0 to 15 and multiplications from 1 to 3. There is also an image to show every Pokémon that can show up and it can be zoomed in or out and panned."
    // },
    // {
    //     title: "Demetra",
    //     year: 2018,
    //     platforms: ["App", "Mobile"],
    //     engine: "Xamarin C#",
    //     coverImg: "https://i.imgur.com/8oOLEuX.jpg",
    //     media: [],
    //     link: "",
    //     description: "Demetra is an app designed to help agricultors manage and improve their production. Connected to a database it lets the user search for existing products and register and visualize activities in their farms. These activities can be fertilizations, prunnings, product applications and others.\n\nIt is an app owned by Elysios and a project in which I was responsible for most of the initial work along with two coleagues. I designed the initial UX since we didn't have anyone specialized in that at the time and was also responsible for the majority of front end components. I also managed a part of the back end, even though the database itself was built by another colleague. It is available only in Brazil's App and Play stores."
    // },
    // {
    //     title: "Peregrino",
    //     year: 2018,
    //     platforms: ["App", "Android"],
    //     engine: "Cordova JS",
    //     coverImg: "https://i.imgur.com/OKVHGCI.jpg",
    //     media: ["https://i.imgur.com/WbfoNZb.jpg", "https://i.imgur.com/wNqtRyn.jpg", "https://i.imgur.com/abRK9pL.jpg", "https://i.imgur.com/oYIzHKM.jpg"],
    //     link: "",
    //     description: ""
    // },
    // {
    //     title: "Ultra Foodmess",
    //     year: 2018,
    //     platforms: ["Game", "PC"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/CbeJayn.jpg",
    //     media: ["https://i.imgur.com/6EGXmee.jpg", "https://i.imgur.com/Og5Rhj7.jpg", "https://i.imgur.com/X0ThNuj.jpg", "https://i.imgur.com/AEtU5ta.jpg"],
    //     link: "Website: http://www.ultrafoodmess.com",
    //     description: "Ultra Foodmess is a party game developed by Riftpoint, available on Xbox, Nintendo Switch and Steam. It is meant for 1 to 4 local players and consists of several minigames, where the first to win a predetermined number of these minigames is the winner of the competition.\n\nMy work on this project consisted mostly of implementing the user interface (UI), creating the animations and correctly displaying the majority of the visual elements while constantly communicating with the artist. I also worked on some mechanics for the game modes."
    // },
    // {
    //     title: "Spirit Revel",
    //     year: 2017,
    //     platforms: ["Game", "PC"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/kP3qxGI.jpg",
    //     media: ["https://i.imgur.com/SgMse74.jpg", "https://i.imgur.com/iw7iCrd.jpg", "https://i.imgur.com/XAHHwhA.jpg", "https://i.imgur.com/CJ9wD5S.jpg"],
    //     link: "",
    //     description: "Spirit Revel was a project for University, but one that I am very fond of. It was my final project for undergraduation with perhaps a too ambitious of a scope to be properly polished, but I am very proud of the end result.\n\nIt is a project I still want to go back to one day and reimagine a lot of things to expand upon the lore, art and mechanics. Since I was in charge of almost everything for this project and had only 5 months to do it some aspects of it are lacking, but it is a full game that can easily provide a one hour of an exciting experience."
    // },
    // {
    //     title: "Treinamento Virtual Lofra",
    //     year: 2017,
    //     platforms: ["Game", "PC", "Mobile"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/QwLpWDy.jpg",
    //     media: [""],
    //     link: "https://apkpure.com/treinamento-virtual-lofra/com.riftpoint.lofra.treinamentovirtuallofra",
    //     description: "Treinamento Virtual Lofra is an educational game for internal use that helped employees learn about their companies products. It was deployed both for mobile (Android and iOS) and web.\n\nThis game was made by Riftpoint by a team of 5 people in which I was responsible for most of the user interface (UI), animations and screen transitions. We faced some challenges with memory allocation, especially for web, but we solved it by changin the load pattern for images into the app."
    // },
    // {
    //     title: "Rush Hour",
    //     year: 2016,
    //     platforms: ["Game", "Mobile"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/CH1LkH2.jpg",
    //     media: ["https://i.imgur.com/DX14fBV.jpg", "https://i.imgur.com/6QRoZbJ.jpg", "https://i.imgur.com/0UeCiAp.jpg", "https://i.imgur.com/PHjfDnW.jpg"],
    //     link: "",
    //     description: "Rush Hour was a game I developed in about 4 months when I had an internship with Industry Corporation in Canada. This was a project in almost total autonomy, since the company was starting to abandon game development at the time.\n\nThe UI is not the nicest, but at least I can say I modeled it in Blender. Most of the assets for the game were from a package purchased from Unity’s asset store."
    // },
    // {
    //     title: "Downside",
    //     year: 2015,
    //     platforms: ["Game", "PC"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/c7bpf5q.jpg",
    //     media: ["https://i.imgur.com/4F4B0Ov.jpg", "https://i.imgur.com/tqTE1HX.jpg", "https://i.imgur.com/jKN7vey.jpg", "https://i.imgur.com/ehlfufM.jpg"],
    //     link: "",
    //     description: "Downside was developed in one week in a game jam organized by Unisinos University. Environment concern was the subject for the game jam and as a team of 5 we succeeded in winning the title of best game for that competition.\n\nThe gameplay consists of talking to citizens and finding out ways to improve life in 2 cities while adopting environmental friendly measures. One of the cities polutes to thrive and the other suffers from the polution of the former. By solving these problems the citizens of both of them end up improving their quality of life by figuring out how to make production more sustainable."
    // },
    // {
    //     title: "Sworn",
    //     year: 2014,
    //     platforms: ["Prototype", "Game", "PC"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/5rWEtMt.jpg",
    //     media: ["https://i.imgur.com/arkocg7.png", "https://i.imgur.com/QWIOHW7.png", "https://i.imgur.com/erJAdfR.jpg", "https://i.imgur.com/MhenchB.jpg"],
    //     link: "",
    //     description: "Sworn was a project for University that I made with my boyfriend. It is a multiplayer online exclusive game where one player controls a mage and the other controls a warrior. Whoever defeats the other character wins.\n\nIt was one of the few experiences I had in creating an online game, and it ended up working only in local networks."
    // },
    // {
    //     title: "Burn the Elements",
    //     year: 2014,
    //     platforms: ["Game", "Mobile"],
    //     engine: "Corona SDK",
    //     coverImg: "https://i.imgur.com/bDpio9d.jpg",
    //     media: ["https://i.imgur.com/I6A4X7I.jpg", "https://i.imgur.com/sp6WVZP.jpg", "https://i.imgur.com/LGFslnL.jpg", "https://i.imgur.com/YvpCZym.jpg"],
    //     link: "",
    //     description: "Burn the Elements was a University project made with lua with Corona SDK. It is a puzzle game where the player needs to use fire, earth, air, water and lightning to solve puzzles and kill all hunters in the forest.\n\nThis game was submitted to SBGames and it is my first game that I consider to be a fully playable game. It lacks polishing, but it is fully functional.\n\nThe idea of this game was to save the forest from the hunters, but thinking back I guess it doesn't make much sense to burn the forest for that goal."
    // },
    // {
    //     title: "Tenebris",
    //     year: 2012,
    //     platforms: ["Prototype", "Game", "PC"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/MpwbH6b.jpg",
    //     media: ["https://i.imgur.com/6Nrl9RZ.jpg", "https://i.imgur.com/gyGoHcr.jpg", "https://i.imgur.com/LwhiZkD.jpg", "https://i.imgur.com/4XJqsfy.jpg"],
    //     link: "",
    //     description: "Tenebris was my second University project in Unity, where you play as a knight to defeat enemies and reach the end of the stage. The concept created by my partner on this was pretty fun, with combat and a few different attacks. It was meant to have an archer and a mage too, but we were too inexperienced and ambitious for a 2 months project.\n\nI was responsible for programming, 3D modelling, animating and texturing. We clearly had no sense of size for objects or scenery in this game though, as everything seems gigantic and the character moves really fast to compensate."
    // },
    // {
    //     title: "Anti Gravity Man",
    //     year: 2011,
    //     platforms: ["Prototype", "Game", "PC"],
    //     engine: "Unity C#",
    //     coverImg: "https://i.imgur.com/JYXbzzU.jpg",
    //     media: [],
    //     link: "",
    //     description: "Anti Gravity Man was a University project and my first playable project in Unity. It is not a great game, but has some interesting mechanics and, well, it is playable."
    // },
];

export default projects;