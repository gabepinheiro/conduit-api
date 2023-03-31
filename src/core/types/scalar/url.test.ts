import { pipe } from 'fp-ts/function'
import { mapAllE } from '@/config/tests/fixtures'
import { urlCodec } from './url'

it('Deveria vailidar a url corretamente', () => {
  pipe(
    'https://url.com',
    urlCodec.decode,
    mapAllE(result => expect(result).toBe('https://url.com')),
  )
})

it('Deveria retornar um erro quando o email for inválido', () => {
  pipe(
    'invalid-url',
    urlCodec.decode,
    mapAllE(error => {
      const errorMessage = Array.isArray(error) ? error[0]?.message : ''
      expect(errorMessage).toBe('Invalid URL')
    }),
  )
})
