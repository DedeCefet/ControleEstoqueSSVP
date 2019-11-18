import { Moment } from 'moment';
import { ITbProduto, TbProduto } from 'app/shared/model/tb-produto.model';

export interface ITbMovimentacao {
  id?: number;
  idTbMovimentacao?: number;
  quantidade?: number;
  data?: Moment;
  entrada?: number;
  tbProduto?: ITbProduto;
}

export class TbMovimentacao implements ITbMovimentacao {
  constructor(
    public id?: number,
    public idTbMovimentacao?: number,
    public quantidade?: number,
    public data?: Moment,
    public entrada?: number,
    public tbProduto?: ITbProduto
  ) {}
}
