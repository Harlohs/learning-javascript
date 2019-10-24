const data = [
  {
    name: 'john Doe',
    age: 32,
    gender: 'male',
    lookingfor:  'women',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    name: 'jenn smith',
    age: 30,
    gender: 'female',
    lookingfor:  'men',
    location: 'Provo UT',
    image: 'https://randomuser.me/api/portraits/women/15.jpg'
  },
  {
    name: 'jeff',
    age: 24,
    gender: 'male',
    lookingfor:  'men',
    location: 'New york NY',
    image: 'https://randomuser.me/api/portraits/men/14.jpg'
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;


  if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
  </ul>
    `

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
  } else {
    // no more profiles
    window.location.reload();
  }
}


// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}