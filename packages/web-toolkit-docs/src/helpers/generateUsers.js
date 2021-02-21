import faker from 'faker'

export default function generateUsers(n = 30) {
  const list = new Array(n).fill(true).map((_, n) => ({
    id: n + 1,
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetName(),
      suite: faker.address.streetSuffix(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
    },
    phone: faker.phone.phoneNumber(),
    website: faker.internet.url(),
  }))

  return list
}

