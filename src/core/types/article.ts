import { tagCodec } from '@/core/types/tag'
import { profileCodec } from '@/core/types/profile'
import * as t from 'io-ts'

export const articleCodec = t.type({
  slug: t.string,
  title: t.string,
  description: t.string,
  body: t.string,
  tagList: t.array(tagCodec),
  createdAt: t.string,
  updatedAt: t.string,
  favorited: t.boolean,
  favoritesCount: t.number,
  author: profileCodec,
})

export type Article = t.TypeOf<typeof articleCodec>

export const articlesCodec = t.type({
  articles: articleCodec,
  articlesCount: t.number,
})

export type Articles = t.TypeOf<typeof articlesCodec>
