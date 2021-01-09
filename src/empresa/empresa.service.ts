import { TenantService } from '../tenant/tenant-service.decorator';
import { Inject } from '@nestjs/common';
import { TENANT_CONNECTION } from '../tenant/tenant.module';
import { Empresa } from './empresa.entity';

@TenantService()
export class EmpresaService {
  constructor(@Inject(TENANT_CONNECTION) private connection) {}

  async findAll(): Promise<Empresa[]> {
    const repository = await this.connection.getRepository(Empresa);
    return repository.find();
  }
}
