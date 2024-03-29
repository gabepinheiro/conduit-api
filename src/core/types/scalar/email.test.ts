import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/lib/function'
import { emailCodec } from './email'

describe('Scalar -> Email type', () => {
  it('Deveria validar o email corretamente', () => {
    pipe(
      'john@doe.com',
      emailCodec.decode,
      E.map(result => expect(result).toBe('john@doe.com')),
    )
  })

  it('Deveria retornar um erro quando o email for invalido', () => {
    pipe(
      'invalid-email',
      emailCodec.decode,
      E.mapLeft(error => {
        const errorMessage = Array.isArray(error) ? error[0]?.message : ''
        expect(errorMessage).toBe('Invalid email')
      }),
    )
  })
})
