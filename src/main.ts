import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as fs from 'fs';


async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('../secrets/private.key'),
  //   cert: fs.readFileSync('../secrets/cert.pem'),
  // };
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter({ https: httpsOptions }),
  // );

  // const app = await NestFactory.create(AppModule, { httpsOptions });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
