import { Entity } from './Entity'
import { randomUUID } from 'crypto'
import { hashSync } from 'bcrypt'

export class UserEntity implements Entity {
  private _action?: 'new' = undefined
  private _id: string
  private _email: string
  private _password?: string
  private hashSalt = 'gaboleraTeste'

  constructor(data: UserEntity.Constructor) {
    if (!data.email) {
      throw new Error('Email precisa ser informado para a entidade!')
    }

    if (!data.id && !data.password) {
      throw new Error('É necessário informar uma senha para criar um usuário!')
    }

    if (!data.id) {
      data.id = randomUUID()
      this._action = 'new'
    }

    if (this._action === 'new' && data.password) {
      data.password = this.crypt(data.password)
    }

    this._id = data.id
    this._email = data.email
    this._password = data.password
  }

  public get id(): string {
    return this._id
  }

  public get email(): string {
    return this._email
  }

  public set setPassword(newPassword: string) {
    this._password = this.crypt(newPassword)
  }

  public set setEmail(newEmail: string) {
    this._email = newEmail
  }

  payload(): UserEntity.Table {
    return {
      id: this._id,
      email: this._email,
      password: this._password,
    }
  }

  crypt(text: string) {
    return hashSync(text, this.hashSalt)
  }
}

export namespace UserEntity {
  export type Table = {
    id?: string
    email: string
    password?: string
  }

  export type Constructor = Table
}
