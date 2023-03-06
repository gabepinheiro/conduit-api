import { profileCodec } from '@/core/types/profile'

import * as t from 'io-ts'

export const commentCodec = t.type({
  id: t.number,
  createdAtL: t.string,
  updatedAt: t.string,
  body: t.string,
  authpr: profileCodec,
})

export type Comment = t.TypeOf<typeof commentCodec>
