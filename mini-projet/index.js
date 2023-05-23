let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

// fonction qui nous permets de trouver les utilisateurs actif

function countActiveUsers(users) {
  return users.filter(user => user.isActive).length;
}

console.log(`We currently have ${countActiveUsers(users)} active users.`);

// fonction qui nous permets de trouver les utilisateurs actif avec les yeux bleux

function getActiveUsers(users) {
  return users.filter(user => user.isActive);
}

function hasBlueEyes(activeUsers) {
  return activeUsers.filter(user => user.eyeColor === "blue").length;
}

const activeUsers = getActiveUsers(users);
const blueEyesCount = hasBlueEyes(activeUsers);
console.log(`Out of our currently ${activeUsers.length} active users, ${blueEyesCount} have blue eyes.`);

// fonction qui nous permets de trouver la moyenne d'age les utilisateurs actif

function getActiveUsersAges(users) {
  return users.filter(user => user.isActive).map(user => user.age);
}

function computeActiveUsersAverageAge(ages) {
  const sum = ages.reduce((total, age) => total + age, 0);
  return sum / ages.length;
}

const activeUsersAges = getActiveUsersAges(users);
const averageAge = computeActiveUsersAverageAge(activeUsersAges);
console.log(`Out of our currently ${activeUsers.length} active users, the average age is ${averageAge}.`);

// fonction qui nous permets de trouver les utilisateurs actif qui ont changé de compagnie

function getMultronUsers(users) {
  return users.filter(user => user.company === "MULTRON");
}

function setMultronToCenturia(users) {
  const multronUsers = getMultronUsers(users);
  multronUsers.forEach(user => {
    user.company = "CENTURIA";
  });
  return multronUsers.length;
}

const changedCompaniesCount = setMultronToCenturia(users);
console.log(`${changedCompaniesCount} user companies have been changed from MULTRON to CENTURIA.`);

// fonction qui nous permets de trouver les utilisateurs avec les yeux marrons et qui travaille pour CENTURIA

function getBrownEyedUsers(users) {
  return users.filter(user => user.eyeColor === "brown");
}

function excludeCenturiaWorkers(users) {
  return users.filter(user => user.company !== "CENTURIA");
}

// fonction qui permets de trouver les utilisateurs actif ou inactif avec les yeux marrons

const brownEyedUsers = getBrownEyedUsers(users);
const excludedUsers = excludeCenturiaWorkers(brownEyedUsers);
console.log(`${excludedUsers.length} users with brown eyes do not work at CENTURIA`);
console.log(`Out of our brown-eyes users ${countActiveUsers(brownEyedUsers)} are active and ${brownEyedUsers.length - countActiveUsers(brownEyedUsers)} are inactive`);

// fonction qui permets de trouver les utilisateurs actif ou inactif avec les yeux verts

const greenEyedUsers = users.filter(user => user.eyeColor === "green");
console.log(`Out of our green-eyes users ${countActiveUsers(greenEyedUsers)} are active and ${greenEyedUsers.length - countActiveUsers(greenEyedUsers)} are inactive`);

// fonction qui permets de trouver les utilisateurs actif ou inactif avec les yeux bleux

const blueEyedUsers = users.filter(user => user.eyeColor === "blue");
console.log(`Out of our blue-eyes users ${countActiveUsers(blueEyedUsers)} are active and ${blueEyedUsers.length - countActiveUsers(blueEyedUsers)} are inactive`);
