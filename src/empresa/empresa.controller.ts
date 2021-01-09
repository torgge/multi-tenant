import { Controller, Get } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  async findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }
}
