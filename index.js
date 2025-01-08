const people = [
    {name: "Mango", isActive: true, friend: ["Poly", "Ajax","Kiwi"], skills: "football", balance: 5000},
    {name: "Poly",  isActive: false, friend: ["Chelsy","Poly","Mango","Magge"], skills: "backetball", balance: 10000},
    {name: "Kiwi", isActive: false, friend: ["Ajax", "Chelsy",], skills: "paint", balance: 25000},
    {name: "Ajax",  isActive: true, friend: ["Magge", "Kiwi","Mango"], skills: "tenis", balance: 15000},
    {name: "Chelsy", isActive: false, friend: ["Magge","Kiwi","Mango","Ajax"], skills: "read", balance: 20000},
    {name: "Magge",isActive: true, friend:  ["Poly","Chelsy"], skills: "serfing", balance: 10000}
]
//1
const sum = people.reduce((acc, people) => acc + people.balance, 0);
console.log(sum);
//2
const chelsyFriends = people.reduce((acc, people) => {
    for(let i = 0; i < people.friend.length; i++){
        if(people.friend[i] === "Chelsy"){
            acc.push(people.name);
        }
    }
    return(acc);
},[]);
console.log(chelsyFriends);
const maggeFriends = people.reduce((acc, people) => {
    for(let i = 0; i < people.friend.length; i++){
        if(people.friend[i] === "Magge"){
            acc.push(people.name);
        }
    }
    return(acc);
},[]);
console.log(maggeFriends);
//3
const sort = (a,b) => b.friend.length-a.friend.length;

const sortFriend = people.sort(sort)
console.log(sortFriend);
//4
const skillsSort = people.reduce((acc, people) => {
    acc.push(people.skills);
    acc.sort();
    return(acc);
},[])
console.log(skillsSort);