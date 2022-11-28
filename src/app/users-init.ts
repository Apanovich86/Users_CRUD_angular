export class Init {
  load() {
    if(localStorage.getItem('userList') === null || localStorage.getItem('userList') == undefined) {
      console.log('No users found... Creating...');
      let users = [
        {
          userId:1,
          userName:'Prashant',
          email:'Panigrahi@gmail.com',
          phoneNumber: '0972454466'
        },
        {
          userId:2,
          userName:'Abhishek',
          email:'Singh@meta.ua',
          phoneNumber: '0983214567'
        }, {
          userId:3,
          userName:'Akshay',
          email:'Rathod@gmail.com',
          phoneNumber: '0963452314'
        },
      ];

      localStorage.setItem('userList', JSON.stringify(users));
      return
    } else {
      console.log('Found users...');
    }
  }
}
