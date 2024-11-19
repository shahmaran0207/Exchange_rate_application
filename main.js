let currencyRaio = {
    USD: {
        KRW: 1394.98,
        USD: 1,
        VND: 25385.00,
        unit: "달러"
    },
    KRW: {
        KRW: 1,
        USD: 0.00072,
        VND: 18.20,
        unit: "원"
    },
    VND: {
        USD: 0.000039,
        VND: 1,
        KRW: 0.055,
        unit: "동"
    }
};

let fromCurrency = 'USD';
let toCurrency = "USD";

// "fromCurrency" 선택 이벤트 처리
document.querySelectorAll("#from-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        // 상단 버튼에 선택한 통화 표시
        document.getElementById("from-button").textContent = this.textContent;

        // 상단 통화 설정
        fromCurrency = this.textContent;

        // 상단 단위 업데이트
        document.querySelector(".exchange-box .input-area div").textContent = currencyRaio[fromCurrency].unit;

        // 환율 변환
        convert();
    }));

// "toCurrency" 선택 이벤트 처리
document.querySelectorAll("#to-currency-list a")
    .forEach(menu => menu.addEventListener("click", function () {
        // 하단 버튼에 선택한 통화 표시
        document.getElementById("to-button").textContent = this.textContent;

        // 하단 통화 설정
        toCurrency = this.textContent;

        // 하단 단위 업데이트
        document.getElementById("result").textContent = currencyRaio[toCurrency].unit;

        // 환율 변환
        convert();
    }));

// 변환 함수
function convert() {
    let amount = document.getElementById("from-input").value;

    // 값이 비어 있으면 변환하지 않음
    if (!amount) {
        document.getElementById("to-input").value = "";
        document.getElementById("result").textContent = currencyRaio[toCurrency].unit;
        return;
    }

    // 환율 변환
    let convertedAmount = amount * currencyRaio[fromCurrency][toCurrency];

    // 숫자를 세 자리마다 콤마로 구분하여 포맷
    let formattedAmount = convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 });

    // 하단 입력 필드와 결과 업데이트
    document.getElementById("to-input").value = convertedAmount; // 숫자 값 유지
    document.getElementById("result").textContent = `${formattedAmount} ${currencyRaio[toCurrency].unit}`; // 포맷된 값 + 단위
}
