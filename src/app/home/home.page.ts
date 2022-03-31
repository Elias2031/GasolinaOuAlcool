import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public precoAlcool:any;
  public precoGasolina:any;
  public resultado: String = "Resultado";

  calcular(){
    if(this.precoAlcool || this.precoGasolina){
      var pAlcool = parseFloat(this.precoAlcool)
      var pGasolina = parseFloat(this.precoGasolina)
      var divisão = pAlcool/pGasolina

      if(divisão >= 0.7){
        this.resultado="melhor utilizar gasolina"
      }else{this.resultado="melhor utilizar alcool"}
      
    }else{
      this.resultado="Preencha corretamente os campos"
    }
  }
}
