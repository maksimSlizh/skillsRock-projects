import { IUser } from '@/types'

export type TUserFilter = Omit<IUser, 'id' | 'password'>
