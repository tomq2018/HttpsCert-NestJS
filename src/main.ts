import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';


async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../secrets/private_key.pem'),
    cert: fs.readFileSync('../secrets/rsa_public_key.pem'),
  };
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter({ https: httpsOptions }),
  // );

  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(3000);
}
bootstrap();
