export interface ITodo {
  id: number
  text: string
  iscompleted: boolean
}

export interface IUser {
  id: string
  email: string
  password?: string
  username: string
  firstName: string
  lastName: string
  company: string
}
