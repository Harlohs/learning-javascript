// tied to index1

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //create XHR object
  const xhr = new XMLHttpRequest();

  // OPEN | specify request type, the url or file name, do you want it to be asynchronous |
  xhr.open('GET', 'data.txt', true);

  // Optional - used for spinners/loaders
  xhr.onprogress = function(){
    console.log('readystate', xhr.readyState)
  }

  xhr.onload = function(){  
    if(this.status === 200) {
      // console.log(this.responseText)
      document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`;
    }
  }

  // an older way of doing this function =========================
  // xhr.onreadystatechange = function () { 
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText)
  //   }
  // } ===========================================================

  xhr.onerror = function() {
    console.log('request error');
  }

  xhr.send();

  //readyState Values
    // 0: request not intitialized
    // 1: server connection established
    // 2: request recieved
    // 3: processing request
    // 4: request finished and response is ready


  // HTTP Statuses (common types)
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
};