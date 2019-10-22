/** 
 *  EasyHTTP Library
 *  Library for making HTTP requests
 * 
 *  @version 3.0.0
 *  @author Brad Traversy, Harlee Tholen
 *  @license MIT
 * 
*/

class EasyHTTP {
  // MAKE HTTP GET REQUEST
   async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData
  }

  // MAKE AN HTTP POST REQUEST
  async post(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }); 
      const resData = await response.json();
      return resData
  } 

  // MAKE AN HTTP PUT REQUEST
   async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData

} 

 // MAKE AN HTTP DELETE REQUEST
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
       'content-type': 'application/json'
    },
  });
 
  const resData = await 'resource deleted...';
  return resData
} 


}
