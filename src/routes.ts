import AppModule from './app.module';
import { DosenModule } from './dosen/dosen.module';
import { AuthModule } from './auth/auth.module';

export const routes = [
  {
    path: '/api/v1',
    module: AppModule,
  },
  {
    path: '/api/v1/dosen',
    module: DosenModule,
  },
  {
    path: '/api/v1/auth',
    module: AuthModule,
  }
];