import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb:localhost:27017'),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
