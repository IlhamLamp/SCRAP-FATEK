import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor (private readonly jwtService: JwtService) {}

  async generateToken(): Promise<string> {
    const payload = { username: 'publicUser'};
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: any): Promise<any> {
    return { username: payload.username}
  }
}
