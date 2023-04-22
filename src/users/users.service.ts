import { Injectable } from '@nestjs/common';
import { User } from 'src/types/user.type';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            user_id: '1',
            email: 'admin@example.com',
            password: 'admin',
            role: '1',
            name: 'admin',
            date_of_birth: '19/04/2023',
            avatar: '',
            address: '',
            phone: '',
            createdAt: '19/04/2023',
            updatedAt: '19/04/2023'
        },
        {
            user_id: '2',
            email: 'user@example.com',
            password: 'user',
            role: '2',
            name: 'user',
            date_of_birth: '19/04/2023',
            avatar: '',
            address: '',
            phone: '',
            createdAt: '19/04/2023',
            updatedAt: '19/04/2023'
        },
    ]

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email)
    }
}
