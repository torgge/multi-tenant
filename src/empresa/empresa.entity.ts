import { Column, Entity, OneToMany } from 'typeorm';
import { MainEntity } from '../shared/entities/main.entity';
import { ApiProperty } from '@nestjs/swagger';
import { TipoSituacion } from '../shared/enums/tipo-situacion.enum';
import { TipoRelation } from '../shared/enums/tipo-relation';

@Entity({ name: `empresa` })
export class Empresa extends MainEntity {
  constructor(partial: Partial<Empresa>) {
    super();
    Object.assign(this, partial);
  }

  @ApiProperty() @Column({ nullable: true }) public codigo: string;
  @ApiProperty() @Column({ nullable: false }) nombre: string;
  @ApiProperty() @Column({ length: 15, nullable: false }) ruc: string;
  @ApiProperty() @Column({ nullable: false }) public situacion: TipoSituacion;

  static getRelations(tipo: TipoRelation): string[] {
    switch (tipo) {
      case TipoRelation.QUERY:
        return ['sucursales'];
      case TipoRelation.FILTER:
        return ['sucursales'];
      default:
        return [];
    }
  }
}
