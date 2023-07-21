import { UserEntity } from '../entities/UserEntity'

export interface UserRepository {
  getAll(): Promise<UserEntity.Table[]>
  show(id: string): Promise<UserEntity.Table>
  create(people: UserEntity): Promise<UserEntity.Table>
  update(people: UserEntity): Promise<UserEntity.Table>
  delete(people: UserEntity): Promise<void>
}
