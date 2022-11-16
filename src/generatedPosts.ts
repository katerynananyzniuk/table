import {faker} from '@faker-js/faker'
import _ from 'lodash'

function generatePosts() {
  return _.times(10, function() {
      return {
        postId: faker.random.numeric(),
        author: faker.name.fullName(),
        title: faker.lorem.words(),
        email: faker.internet.email(),
        body: faker.lorem.paragraph()
      }
    })
}

export const newTenPosts = generatePosts()