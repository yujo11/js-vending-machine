import Component from "../core/Component.js";

export default class ProductPurchaser extends Component {
  setup() {}

  template() {
    return /*html*/ `
    <div class="purchase-container">
        <h3>충전하기</h3>
        <div class="vending-machine-wrapper">
            <input type="number" name="charge-amount" id="charge-input" />
            <button id="charge-button">충전하기</button>
        </div>
        <p>충전 금액: <span id="charge-amount">0</span>원</p>
    </div>
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <table class="cashbox-change">
        <colgroup>
            <col />
            <col />
        </colgroup>
        <thead>
            <tr>
                <th>동전</th>
                <th>개수</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>500원</td>
                <td id="coin-500-quantity"></td>
            </tr>
            <tr>
                <td>100원</td>
                <td id="coin-100-quantity"></td>
            </tr>
            <tr>
                <td>50원</td>
                <td id="coin-50-quantity"></td>
            </tr>
            <tr>
                <td>10원</td>
                <td id="coin-10-quantity"></td>
            </tr>
        </tbody>
    </table>
    `;
  }

  mounted() {
    console.log("상품구매");
  }
}
