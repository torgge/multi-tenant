import { Module } from '@nestjs/common';
import { TenantModule } from '../tenant/tenant.module';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';

@Module({
  imports: [TenantModule],
  controllers: [EmpresaController],
  providers: [EmpresaService],
})
export class EmpresaModule {}
