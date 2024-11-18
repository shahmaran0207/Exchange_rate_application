let currencyRaio={
    USD:{
        KRW: 1394.98,
        USD: 1,
        VND: 25385.00,
        unit: "달러"
    },
    KRW:{
        KRW: 1,
        USD: 0.00072,
        vnd: 18.20,
        unit: "원"
    },
    VND:{
      USD: 0.000039,
      VND: 1,
      KRW: 0.055,
      unit: "동"
    }
};

let fromCurrency= 'USD';
let toCurrency="USD";

document.querySelectorAll("#from-currency-list a")
    .forEach(menu=>menu.addEventListener("click", function (){
        document.getElementById("from-button").textContent=this.textContent;

        fromCurrency=this.textContent;
    }
));

document.querySelectorAll("#to-currency-list").forEach(menu=>menu.addEventListener("click",function (){
    document.getElementById("to-button").textContent=this.textContent;

    toCurrency=this.textContent;
    }
));
