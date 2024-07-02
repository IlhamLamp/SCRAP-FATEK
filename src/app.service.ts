import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [{
      path: '/api/v1',
      desc: 'home',
    },
    {
      path: '/api/v1/dosen',
      desc: [
        {
          path: '/api/v1/dosen?search=aca',
          desc: 'search by nama or prodi or nidn',
        },
        {
          path: '/api/v1/dosen?filter=akuntansi,hukum',
          desc: 'filter by prodi, you can add more than one',
        },
      ],
    },
    {
      path: '/api/v1/dosen/:id',
      desc: 'select dosen by id',
    },
    {
      path: '/api/v1/auth/generate-token',
      desc: 'generate token for access all dosen',
    }] ;
  }
}