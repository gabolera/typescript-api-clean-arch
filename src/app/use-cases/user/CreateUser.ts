import { UserEntity } from '../../entities/UserEntity'
import { UserRepository } from '../../repositories/UserRepository'

export class CreateUser implements CreateUserInterface {
  constructor(private userRepository: UserRepository) {}

  async create(data: CreateUserDate): Promise<UserEntity> {
    const user = new UserEntity({
      email: data.email,
      password: data.password,
    })

    const createdUser = await this.userRepository.create(user)

    return new UserEntity({
      id: createdUser.id,
      email: createdUser.email,
    })
  }
}

interface CreateUserInterface {
  create(data: Omit<CreateUserDate, 'people'>): Promise<any>
  create(data: Omit<CreateUserDate, 'name, surname'>): Promise<any>
}

type CreateUserDate = {
  email: string
  password: string
}
