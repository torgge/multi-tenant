import { Book } from '../../books/book.entity';
import { Tenant } from '../../tenant/tenant.entity';
import { Empresa } from '../../empresa/empresa.entity';

export default class ConfigurationHelper {
  static entities = () => [Book, Empresa];

  static parseConfiguration(tenant: Tenant): any {
    return {
      name: tenant.name,
      type: tenant.type,
      host: tenant.host,
      port: tenant.port,
      username: tenant.username,
      password: tenant.password,
      schema: tenant.schema,
      database: tenant.database,
      entities: ConfigurationHelper.entities(),
      synchronize: tenant.synchronize,
      ssl: tenant.ssl,
      logging: tenant.logging,
      // namingStrategy: new CustomNamingStrategy(),}
    };
  }
}
