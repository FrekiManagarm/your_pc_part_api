import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  initApp(): {
    app: { name: string; version: string; github: string; };
    developers: { name: string; github: string }[];
  } {
    return {
      app: {
        name: "Your PC Parts API",
        version: "v0",
        github: ""
      },
      developers: [
        {
          name: 'Mathieu CHAMBAUD',
          github: '',
        }
      ]
    }
  }
}
