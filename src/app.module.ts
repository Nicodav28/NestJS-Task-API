import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://admin:Z6ZHFwqlijPQbduG@cluster0.7xzvoqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),
    TasksModule
  ],
})

export class AppModule {}
