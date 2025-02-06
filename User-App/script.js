// let fetchUser1 = [];

// const fetchUser1 = async () => {
    
//    await fetch("https://randomuser.me/api/?results=24")
//     .then((res) => res.json())
//     .then ((data) => console.log(data.results))


// }
// fetchUser1();

let userDate = [];

const fetchUser = async () => {
    
   await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then ((data) => userDate = data.results)
    console.log(userDate)
}

const userDisplay = async () => {
    await fetchUser()

    const dateParser = (date) => {
        const newDate = new Date(date) .toLocaleDateString("fr-FR",{
            year : "numeric",
            month : "long",
            day : "numeric",
            hour : "numeric",
            minute : "numeric",
            second : "numeric"
        })
        return newDate
    }


    const calDay = (Date) => {
        const today = new Date();
        // console.log(today);

        const todayTimestamp = Date.parse(today);
        console.log(todayTimestamp); 
        const timestamp = Date.parse(Date)
        
        return Math.floor( todayTimestamp - timestamp /(1000*60*60*24))
    }

    calDay()


    document.body.innerHTML = userDate.map(
        (user) => 
             `
            <div class="card">
            <img src="${user.picture.large}" alt="La photo de ${user.name.last}">
            <h4>${user.name.first} <span>${user.name.last}</span></h4>
            <p> ${user.location.city}, ${dateParser(user.dob.date)}, a ${dateParser(user.dob.hour)}</p>
            <i> Membre depuis ${user.registered.date} </i>
            </div>
            `
        
    ).join("\n")
}

userDisplay();


