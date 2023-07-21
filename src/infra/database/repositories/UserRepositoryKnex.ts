import { UserEntity } from '../../../app/entities/UserEntity'
import { UserRepository } from '../../../app/repositories/UserRepository'

export class UserRepositoryKnex implements UserRepository {
  async getAll(): Promise<UserEntity.Table[]> {
    const xx = new UserEntity({ email: 'xx' })
    return [xx.payload()]
  }

  async show(id: string): Promise<UserEntity.Table> {
    return new UserEntity({ email: 'xx' }).payload()
  }

  async create(people: UserEntity): Promise<UserEntity.Table> {
    return new UserEntity({ email: 'xx' }).payload()
  }

  async update(people: UserEntity): Promise<UserEntity.Table> {
    return new UserEntity({ email: 'xx' }).payload()
  }

  async delete(people: UserEntity): Promise<void> {}
}
