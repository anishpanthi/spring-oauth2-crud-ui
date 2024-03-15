export class User {
  id: number | null;
  name: string;
  email: string;
  preferred_username: string;

  constructor(user: Partial<User> = {}) {
    this.id = user?.id || null;
    this.name = user?.name || '';
    this.email = user?.email || '';
    this.preferred_username = user?.preferred_username || '';
  }
}
