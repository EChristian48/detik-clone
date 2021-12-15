import faker from 'faker'
import { News } from '~/types'
import { range } from './utils'

export const dummyNews = (count: number): News[] =>
  range(count).map(() => ({
    title: faker.lorem.words(6),
    category: faker.lorem.word(),
    img: faker.random.image()
  }))

export const dummyTags = (count: number): string[] =>
  range(count).map(() => faker.lorem.words(2))
