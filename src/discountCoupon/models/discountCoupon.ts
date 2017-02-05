import { TipoDesconto } from '../../shared/models/TipoDesconto';

export class DiscountCoupon {
    Id: AAGUID;
    LegalPersonID: AAGUID;
    Descricao: string;
    Inicio: Date;
    Fim: Date;
    TipoDeDesconto: TipoDesconto;
    ValorAntigo: number;
    ValorNovo: number;
    CaminhoImagem: string;
    RegrasDeUso: string;
}