export enum TipoProcessoFactura {
  NORMAL = 'NORMAL',                  //Factura Normal
  RECEPCION = 'RECEPCION',
  TOTALIZADORA = 'TOTALIZADORA',      //Factura Normal y Factura Totalizadora
  EXTORNO = 'EXTORNO',                //Factura Normal y Nota Extorno
  EXPEDICION = 'EXPEDICION',          //Factura Normal y Nota Expedición
  SIMPLES_REMESSA = 'SIMPLE_REMESA'   //Factura Normal y Simple Remesa
}
