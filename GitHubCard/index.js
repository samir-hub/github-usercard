/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/samir-hub')
.then( (response) => {
  console.log(response)
  // response.data.message.forEach( item => {
  //   let newDog = DogCard(item)
  //   entryPoint.appendChild(newDog)
  // })

  let newPerson = GitCard(response);
  cardsContainer.appendChild(newPerson);
  
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( item => {
  // let newDog = DogCard(item)
  // entryPoint.appendChild(newDog)
  axios.get(`https://api.github.com/users/${item}`)
  .then( (response) => {
    console.log(response)
    // response.data.message.forEach( item => {
    //   let newDog = DogCard(item)
    //   entryPoint.appendChild(newDog)
    // })
  
    let newPerson = GitCard(response);
    cardsContainer.appendChild(newPerson);
    
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function GitCard(object){
  
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  
  const newImage = document.createElement('img');
  newImage.src = object.data.avatar_url; 
  
  const info = document.createElement('div');
  info.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = object.data.name; 

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = object.data.login; 

  const location = document.createElement('p');
  location.textContent = `Location: ${object.data.location||"none"}`; 

  const profile = document.createElement('p');

  const profileInfo = document.createElement('a');
  profileInfo.textContent = `Profile: ${object.data.html_url}`
  profileInfo.href = object.data.html_url;

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.data.followers}`;
  
  const following = document.createElement('p');
  following.textContent = `Following: ${object.data.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.data.bio|| "none"}`;

  newCard.appendChild(newImage);
  newCard.appendChild(info);

  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  profile.appendChild(profileInfo);
  
  
  return newCard
}

let cardsContainer = document.querySelector('.cards');

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
