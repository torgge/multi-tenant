import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantModule } from './tenant/tenant.module';
import { BooksModule } from './books/books.module';
import { Tenant } from './tenant/tenant.entity';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'furioso-server',
      port: 5432,
      username: 'postgres',
      password: 'dY2bnChgkNnZAiS',
      database: 'postgres',
      schema: 'public',
      entities: [Tenant],
      synchronize: true,
    }),
    TenantModule,
    BooksModule,
    EmpresaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
