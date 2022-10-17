export default class Product {
  constructor(code, name, quantity, cost) {
    this.code = code;
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
    this.next = null;
  }

  getDetails() {
    return `
        <section class="cardProduct">
          <p>C&oacute;digo: ${this.code}<br>
          Nombre: ${this.name}<br>
          Cantidad: ${this.quantity}<br>
          Costo: $${this.cost}</p>
        </section>
      `;
  }
}
