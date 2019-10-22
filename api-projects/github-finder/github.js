class Github {
  constructor() {
    this.client_id = '00357039ed4f798a2c9b';
    this.client_secret = '2b4394e30caa314facc8e5970e840576cfa38cf6'; 
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)
  
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`)
  

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos 
    }
  }

}