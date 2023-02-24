import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { CreateUser } from '@/core/types/user'

// Tipo Task -> Lidar com Promises que nuncam falham
// Tipo Either -> Utilizado com alguma coisa asssincrona que podem quebrar
// Tipo TaskEither -> Lidar com Promises que falham/quebram

export type OutsideRegister<A> = (data: CreateUser) => Promise<A>

export type Register = <A>(outsideRegister: OutsideRegister<A>) =>
  (data: CreateUser) => TE.TaskEither<Error, A>

export const register: Register = (outsideRegister) => (data) => {
  return pipe(
    TE.tryCatch(
      () => outsideRegister(data),
      E.toError,
    ),
  )
}
