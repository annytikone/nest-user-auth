import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb:localhost:27017'),
    MongooseModule.forRoot('mongodb+srv://aniket:aniket@cluster0.bn6fu.mongodb.net/kinisRoleTest?retryWrites=true&w=majority'),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
