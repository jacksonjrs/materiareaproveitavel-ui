export class Endereco {
  logradouro?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
}

export class Pessoa {
  id?: number;
  nome?: string;
  endereco = new Endereco();
  ativo = true;
}

export class Material {
  id?: number;
  nome?: string;
  descricao?: string;
  preco?: number;
  vendedor?: string;
}

export class Compras {
  id?: number;
  nome?: string;
  descricao?: string;
  preco?: number;
  dataCompra?: Date;
  dataPagamento?: Date;
  comprador = new Pessoa();
  material = new Material();
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  page: number;
}
