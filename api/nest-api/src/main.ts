import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntToStringInterceptor } from './infrastructure/utils/BigIntToStringInterceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new BigIntToStringInterceptor());
    await app.listen(3000);
}
bootstrap();
