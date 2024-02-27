import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule,MongooseModule.forRoot("mongodb+srv://neeramrutia:neer4neer4@cluster0.yktffqd.mongodb.net/")],
})
export class AppModule {}
