import { Injectable } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { BlogModule } from "./blog/blog.module";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}

@Module({
  imports: [DatabaseModule, BlogModule],
})
export class AppModule {}
