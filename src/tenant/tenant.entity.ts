import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({ name: 'tenant' })
@Unique(['name'])
export class Tenant {
  @PrimaryColumn({
    type: 'varchar',
    nullable: false,
    default: 'conexion01',
    comment: 'Nombre de conexión',
  })
  name: string;
  @Column({
    type: 'varchar',
    nullable: false,
    default: '127.1.1.1',
    comment: 'Host de conexión',
  })
  host: string;
  @Column({
    type: 'varchar',
    nullable: false,
    default: 'postgres',
    comment: 'Tipo de conexión',
  })
  type: string;
  @Column({
    type: 'integer',
    nullable: false,
    default: 5432,
    comment: 'Poerto de conexción de la base de datos',
  })
  port: number;
  @Column({
    type: 'varchar',
    nullable: false,
    default: 'admin',
    comment: 'Usuario de la base de datos',
  })
  username: string;
  @Column({
    type: 'varchar',
    nullable: false,
    default: 'admin',
    comment: 'Password de la base de datos',
  })
  password: string;
  @Column({
    type: 'varchar',
    nullable: false,
    default: 'public',
    comment: 'Schema de la base de datos',
  })
  schema: string;
  @Column({
    type: 'varchar',
    nullable: false,
    default: 'postgres',
    comment: 'Nombre de la base de datos',
  })
  database: string;
  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
    comment: 'Crear automaticamente la estructura del base de datos?',
  })
  synchronize: boolean;
  @Column({
    type: 'json',
    nullable: true,
    comment: 'Configuracion de seguridad',
  })
  ssl: JSON;
  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
    comment: 'Exhibir log de sql ?',
  })
  logging: boolean;
}
