import * as t from 'io-ts'
import { withMessage } from 'io-ts-types/withMessage'

interface EmailBrand {
  readonly Email: unique symbol
}

export const emailCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, EmailBrand> => isEmail(value),
    'Email',
  ),
  () => 'Invalid Email',
)

export type Email = t.TypeOf<typeof emailCodec>

function isEmail (value: string) {
  return /^\w+.+?@\w+.?$/.test(value)
}
