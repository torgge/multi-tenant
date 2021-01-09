import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { EstadoIntegracion } from '../enums/estado-integracion.enum';
import { TipoSituacion } from '../enums/tipo-situacion.enum';
import { TipoRelation } from '../enums/tipo-relation';
import { OrigenIntegracion } from '../enums/contrato/origen-integracion.enum';
import { Exclude } from 'class-transformer';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ApiProperty } from '@nestjs/swagger';

@Unique(['id'])
export abstract class MainEntity {
  constructor(partial?: Partial<MainEntity>) {
    this.integracionEstado = EstadoIntegracion.AVALIABLE;
    this.integracionOrigen = OrigenIntegracion.NEW_ERP;
    this.userAlteracion = '123'; //configService.getAuthUser.id;
    Object.assign(this, partial);
  }

  @BeforeInsert()
  @BeforeUpdate()
  protected async updateDataIntegration(): Promise<void> {
    this.integracionEstado = this.integracionEstado
      ? this.integracionEstado
      : EstadoIntegracion.AVALIABLE;
    this.userAlteracion = this.userAlteracion ? this.userAlteracion : '123'; //configService.getAuthUser.id;
  }

  @ApiModelPropertyOptional({ type: String })
  @PrimaryGeneratedColumn(`uuid`)
  id: string;
  @Exclude({ toPlainOnly: true })
  @CreateDateColumn({ name: `fecha_creacion` })
  fechaCreacion: Date;
  @Exclude({ toPlainOnly: true })
  @UpdateDateColumn({ name: `fecha_alteracion` })
  fechaAlteracion: Date;
  @ApiProperty() @Column({ name: `codigo`, nullable: true }) codigo: string;
  @Exclude({ toPlainOnly: true })
  @Column({
    type: `uuid`,
    name: 'user_id',
  })
  userAlteracion = '123'; //configService.getAuthUser.id;
  @Exclude({ toPlainOnly: true }) @VersionColumn() version: number;

  @Column('enum', {
    enum: TipoSituacion,
    default: TipoSituacion.ACTIVO,
    nullable: false,
    comment:
      'situacion: [  ' +
      '  ACTIVO = "ACTIVO",\n' +
      '  INACTIVO = "INACTIVO",\n' +
      '  EVALUANDO = "EVALUANDO",\n' +
      '  BLOQUEADO = "BLOQUEADO"]',
  })
  situacion: TipoSituacion;

  @Exclude()
  @Column('enum', {
    name: 'integracion_estado',
    nullable: false,
    enum: EstadoIntegracion,
    default: EstadoIntegracion.AVALIABLE,
  })
  integracionEstado: EstadoIntegracion;

  @Exclude()
  @Column('enum', {
    name: 'integracion_origen',
    nullable: false,
    enum: OrigenIntegracion,
    default: OrigenIntegracion.NEW_ERP,
  })
  integracionOrigen: OrigenIntegracion;

  @Column({ name: 'codigo_interno', nullable: false })
  @Generated('increment')
  codigoInterno: number;

  static getRelations(tipo: TipoRelation) {
    return [];
  }
}
