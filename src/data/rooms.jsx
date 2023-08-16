
const rooms = [
    {
        "id": 1,
        "name": "Standard Room",
        "guests": 2,
        "foot": 30,
        "price": 29,
        "img": [require("../assets/images/room1.jpg"), require("../assets/images/room1-1.jpg"), require("../assets/images/room1-2.jpg"), require("../assets/images/room1-3.jpg"), require("../assets/images/room1-4.jpg"), require("../assets/images/room1-6.jpg"), require("../assets/images/room1-7.jpg")],
        "desc": "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.",
        "features": [`48" HD TV with more than 60 channels`, `Coffee and tea makers`, `Hot & cold bathing`, `High comfortable mattress bed`, `Hight quality bed sheets`, `Free WIFI internet connection`, `Connecting room by request`]
    },
    {
        "id": 2,
        "name": "Deluxe Room",
        "guests": 2,
        "foot": 35,
        "price": 39,
        "img": [require("../assets/images/room2.jpg"), require("../assets/images/room2-1.jpg"), require("../assets/images/room1-2.jpg"), require("../assets/images/room1-3.jpg"), require("../assets/images/room1-4.jpg"), require("../assets/images/room1-6.jpg"), require("../assets/images/room1-7.jpg")],
        "desc": "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.",
        "features": [`48" HD TV with more than 60 channels`, `Coffee and tea makers`, `Hot & cold bathing`, `High comfortable mattress bed`, `Hight quality bed sheets`, `Free WIFI internet connection`, `Connecting room by request`]
    },
    {
        "id": 3,
        "name": "Premier Room",
        "guests": 4,
        "foot": 40,
        "price": 49,
        "img": [require("../assets/images/room3.jpg"), require("../assets/images/room3-1.jpg"), require("../assets/images/room1-2.jpg"), require("../assets/images/room1-3.jpg"), require("../assets/images/room1-4.jpg"), require("../assets/images/room1-6.jpg"), require("../assets/images/room1-7.jpg")],
        "desc": "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.",
        "features": [`48" HD TV with more than 60 channels`, `Coffee and tea makers`, `Hot & cold bathing`, `High comfortable mattress bed`, `Hight quality bed sheets`, `Free WIFI internet connection`, `Connecting room by request`]

    },
    {
        "id": 4,
        "name": "Family Suite",
        "guests": 4,
        "foot": 60,
        "price": 59,
        "img": [require("../assets/images/room4.jpg"), require("../assets/images/room4-1.jpg"), require("../assets/images/room1-2.jpg"), require("../assets/images/room1-3.jpg"), require("../assets/images/room1-4.jpg"), require("../assets/images/room1-6.jpg"), require("../assets/images/room1-7.jpg")],
        "desc": "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.",
        "features": [`48" HD TV with more than 60 channels`, `Coffee and tea makers`, `Hot & cold bathing`, `High comfortable mattress bed`, `Hight quality bed sheets`, `Free WIFI internet connection`, `Connecting room by request`]

    },
    {
        "id": 5,
        "name": "Luxury Suite",
        "guests": 4,
        "foot": 70,
        "price": 79,
        "img": [require("../assets/images/room5.jpg"), require("../assets/images/room5-1.jpg"), require("../assets/images/room1-2.jpg"), require("../assets/images/room1-3.jpg"), require("../assets/images/room1-4.jpg"), require("../assets/images/room1-6.jpg"), require("../assets/images/room1-7.jpg")],
        "desc": "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.",
        "features": [`48" HD TV with more than 60 channels`, `Coffee and tea makers`, `Hot & cold bathing`, `High comfortable mattress bed`, `Hight quality bed sheets`, `Free WIFI internet connection`, `Connecting room by request`]

    },
    {
        "id": 6,
        "name": "Presidential Suite",
        "guests": 4,
        "foot": 90,
        "price": 99,
        "img": [require("../assets/images/room6.jpg"), require("../assets/images/room6-1.jpg"), require("../assets/images/room1-2.jpg"), require("../assets/images/room1-3.jpg"), require("../assets/images/room1-4.jpg"), require("../assets/images/room1-6.jpg"), require("../assets/images/room1-7.jpg")],
        "desc": "Amet nulla officia duis reprehenderit do labore aute pariatur anim consequat ullamco elit in duis incididunt eu officia do voluptate anim nulla officia id cillum esse in velit anim dolor enim exercitation veniam do deserunt dolor in id dolor culpa reprehenderit aute cillum amet sunt mollit incididunt quis qui ut enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in est ea incididunt pariatur non aute ullamco dolor est duis ut sint magna sint laboris dolore nulla et ut reprehenderit dolore consequat magna aliqua dolor in cupidatat ut consequat amet eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor cillum enim est consectetur pariatur nulla fugiat deserunt dolore nisi laboris pariatur et nisi fugiat dolore cupidatat id consectetur aliqua in adipisicing enim in ullamco do id sit nulla sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.",
        "features": [`48" HD TV with more than 60 channels`, `Coffee and tea makers`, `Hot & cold bathing`, `High comfortable mattress bed`, `Hight quality bed sheets`, `Free WIFI internet connection`, `Connecting room by request`]

    }
]

export default rooms;