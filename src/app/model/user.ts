export class User {
  id: number | null;
  name: string;
  email: string;
  password: string;

  constructor(user: Partial<User> = {}) {
    this.id = user?.id || null;
    this.name = user?.name || '';
    this.email = user?.email || '';
    this.password = user?.password || '';
  }
}
