import { register, OutsideRegister } from './register'
import { CreateUser } from '@/core/types/user'
import { pipe } from 'fp-ts/lib/function'
import { unsafeEmail, mapAllTE } from '@/config/tests/fixtures'

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuário ${data.username} cadastrado com sucesso.`
}

const data: CreateUser = {
  email: unsafeEmail('john.doe@email.com'),
  username: 'johndoe',
  password: 'johndoe123!',
}

it('Deveria cadastrar um usuário com sucesso', async () => {
  return pipe(
    data,
    register(registerOk),
    mapAllTE(result => expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso.`)),
  )()
})
