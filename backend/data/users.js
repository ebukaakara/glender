import bcrypt from 'bcryptjs';

const users = [
     {
          name: 'Admin User',
          email: 'admin@glender.com',
          password:  bcrypt.hashSync('test1234' , 10),
          isAdmin: true
     },
     {
          name: 'User one',
          email: 'userone@glender.com',
          password: bcrypt.hashSync('test1234' , 10)
     },
     {
          name: 'User two',
          email: 'usertwo@glender.com',
          password: bcrypt.hashSync('test1234' , 10)
     },
]

export default users;