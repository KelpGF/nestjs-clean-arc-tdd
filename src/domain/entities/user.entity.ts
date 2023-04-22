export class UserEntity {
  id?: string;
  name: string;
  email: string;

  constructor(data: Partial<UserEntity>) {
    Object.assign(this, data);
  }
}
