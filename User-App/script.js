let userDate = [];

const fetchUser1 = () => {
    
    fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then ((data) => console.log(data.results))


}
fetchUser();

let userDate = [];

const fetchUser = () => {
    
    fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then ((data) => console.log(data.results))
}
fetchUser();


