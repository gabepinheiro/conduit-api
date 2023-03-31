import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { URL } from 'url'

interface UrlBrand {
  readonly Url: unique symbol
}

export const urlCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, UrlBrand> => isUrl(value),
    'Url',
  ),
  () => 'Invalid Email',
)

export function isUrl (value: unknown) {
  try {
    const url = new URL(typeof value === 'string' ? value : '')
    return !!url
  } catch {
    return false
  }
}

export type Url = t.TypeOf<typeof urlCodec>
