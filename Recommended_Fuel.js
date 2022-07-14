let valGasolina = 6.67;
let valAlcool = 5.09;
let margemIdealAlcool = 70;

let valGasMargem = (valGasolina * margemIdealAlcool)/100;

let nivelProxAlcool_Gasolina = (valAlcool * 100)/valGasolina;

if(valAlcool <= valGasMargem){
    console.log(`
      Valor Gasolina: ${valGasolina}
      Valor Alcool: ${valAlcool}
      Preço do Alcool a ${Math.round(nivelProxAlcool_Gasolina, 2)}% do preço da Gasolina
      Combustível ideal: Alcool.
    `);
}else{
    console.log(`
      Valor Gasolina: ${valGasolina}
      Valor Alcool: ${valAlcool}
      Preço do Alcool a ${Math.round(nivelProxAlcool_Gasolina, 2)}% do preço da Gasolina
      Combustível ideal: Gasolina.
    `);
}
