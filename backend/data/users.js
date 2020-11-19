import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Alim Hamza',
        email: 'alim@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Mika J',
        email: 'mika@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;