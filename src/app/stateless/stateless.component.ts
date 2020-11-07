import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interface/product';
@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  @Input() pc:Product;
  public compra: string;
  private disable: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.compra = 'Comprar'
  }

  comprar() {
    this.disable = true;
    this.compra = '¡Comprado!';
  }

  isDisabled() {
    return !!this.disable;
  }
}
