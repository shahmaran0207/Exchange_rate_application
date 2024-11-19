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
        document.getElementById("to-button").textContent=this.textContent;

        let money = document.getElementById("result");
        let count = document.getElementById("to-button").textContent;

        if (count === "USD") {
            money.textContent = "달러";
        }
        if (count === "KRW") {
            money.textContent = "원";
        }
        if (count === "VND") {
            money.textContent = "동";
        }

        fromCurrency=this.textContent;
    }
));

function convert(){
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRaio[toCurrency][fromCurrency];
    console.log(amount);

    document.getElementById("to-input").value=convertedAmount;
}