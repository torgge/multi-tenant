export enum EstadoIntegracion {
  PROCESSED = 'PROCESSED', //Integracion concluída com sucesso
  AVALIABLE = 'AVALIABLE', //Disponible para integracion
  INACTIVE  = 'INACTIVE',  //Indisponible para integracion
  ERROR     = 'ERROR',     //Integracion con errores
}
