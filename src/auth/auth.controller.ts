import { Controller, Post, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('generate-token')
  async generateToken() {
    const token = await this.authService.generateToken();
    return {
      status: HttpStatus.OK,
      message: 'successfully generated',
      token,
    };
  }
}