import { faker } from "@faker-js/faker";

export const getMockUser = () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
});
