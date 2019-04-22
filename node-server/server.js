var express = require("express");
const cors = require("cors");
var app = express();
app.listen(3000, () => {
  console.log("http://localhost:3000/posts  to get the posts");
  console.log(
    "http://localhost:3000/user?userId=x  to get the user, where x is userId"
  );
});

let postsResponse = [
  {
    userid: 1,
    username: "Leanne Graham",
    userPictureUrl: "https://via.placeholder.com/150/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    userid: 2,
    username: "Ervin Howell",
    userPictureUrl: "https://via.placeholder.com/150/4d564d",
    pictureUrl: "https://via.placeholder.com/600/35185e",
    id: 2,
    title: "qui est esse"
  },
  {
    userid: 3,
    username: "Clementine Bauch",
    userPictureUrl: "https://via.placeholder.com/150/d32776",
    pictureUrl: "https://via.placeholder.com/600/c984bf",
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
  },
  {
    userid: 4,
    username: "Patricia Lebsack",
    userPictureUrl: "https://via.placeholder.com/150/24f355",
    pictureUrl: "https://via.placeholder.com/600/8f209a",
    id: 4,
    title: "eum et est occaecati"
  },
  {
    userid: 5,
    username: "Chelsey Dietrich",
    userPictureUrl: "https://via.placeholder.com/150/92c952",
    pictureUrl: "https://via.placeholder.com/600/45601a",
    id: 5,
    title: "nesciunt quas odio"
  },
  {
    userid: 6,
    username: "Mrs. Dennis Schulist",
    userPictureUrl: "https://via.placeholder.com/150/54176f",
    pictureUrl: "https://via.placeholder.com/600/5e12c6",
    id: 6,
    title: "dolorem eum magni eos aperiam quia"
  }
];

let users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    coverUrl: "https://via.placeholder.com/600/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    coverUrl: "https://via.placeholder.com/600/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    coverUrl: "https://via.placeholder.com/600/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    coverUrl: "https://via.placeholder.com/600/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    coverUrl: "https://via.placeholder.com/600/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    coverUrl: "https://via.placeholder.com/600/56a8c2",
    pictureUrl: "https://via.placeholder.com/600/56acb2",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478"
      }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications"
    }
  }
];

app.get("/posts", cors(), (req, res, next) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(postsResponse, null, 4));
});

app.get("/user", cors(), (req, res, next) => {
  let user;
  users.forEach(usr => {
    if (usr.id == req.query["userId"]) {
      user = usr;
    }
  });
  res.header("Content-Type", "application/json");

  if (req.query["userId"] == null) {
    res.send(JSON.stringify(users, null, 4));
  }
  res.send(JSON.stringify(user, null, 4));
});
