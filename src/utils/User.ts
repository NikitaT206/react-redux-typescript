import { faker } from '@faker-js/faker';

class User {
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    };
  }

  name: string;
  location: {
    lat: number;
    lng: number;
  };
}

export const user = new User();
