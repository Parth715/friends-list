import { friend } from "./friends-list";

let friends: friend[] = [
    new friend("Alan", 37, "alan@gmail.com", false),
    new friend("Max", 34, "max@gmail.com", true),
    new friend("Chris", 27, "Chris@gmail.com", false),
    new friend("Betty", 24, "betty@gmail.com", true),
    new friend("Steve", 37, "steve@gmail.com", false),

];
console.log(friend.printHeader());
for(let fri of friends){
    console.log(fri.print());
}