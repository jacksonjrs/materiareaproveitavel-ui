import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';

import { Material } from 'src/app/core/model';
import { MaterialService } from '../material.service'
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { CompraService } from 'src/app/compras/compra.service';

@Component({
  selector: 'app-material-cadastro',
  templateUrl: './material-cadastro.component.html',
  styleUrls: ['./material-cadastro.component.css']
})
export class MaterialCadastroComponent implements OnInit {

  material = new Material();

  pessoas: any[] = []


  categorias = [
    { label: 'Eletrica', value: 1 },
    { label: 'Hidraulica', value: 2 },
  ];


  constructor(
    //private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private materialService: MaterialService,
    private compraService: CompraService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }


  ngOnInit(): void {
    this.title.setTitle('Novo material');
    this.carregarPessoas()
  }

  carregarPessoas() {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas
          .map((p: any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.material.id)

 }

/*carregarPessoa(id: number) {
    this.pessoaService.buscarPorCodigo(id)
      .then((material: Material) => {
        this.material = material
        this.atualizarTituloEdicao()
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }
*/
  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarMaterial(form);
    } else {
      this.adicionarMaterial(form);
    }
  }

  adicionarMaterial(form: NgForm) {
    this.materialService.adicionar(this.material)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Material adicionada com sucesso!' });

        form.reset();
        this.material = new Material();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarMaterial(form: NgForm) {
    this.materialService.atualizar(this.material)
      .then(material => {
        this.material = material;

        this.messageService.add({ severity: 'success', detail: 'Material alterado com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: NgForm) {
    form.reset();

    setTimeout(() => {
      this.material = new Material();
    }, 1);

    this.router.navigate(['materiais', 'nova']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pessoa: ${this.material.descricao}`);
  }

}



