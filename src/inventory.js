export default class Inventory {
  constructor() {
    this.first = null;
  }

  searchProduct(code) {
    let aux = this.first;

    code = Number(code);

    while (aux != null) {
      if (aux.code == code) {
        return aux;
      } else {
        aux = aux.next;
      }
    }

    return false;
  }

  addProduct(product) {
    let aux = this.first;

    if (this.searchProduct(product.code)) {
      return false;
    } else {
      if (this.first == null) {
        this.first = product;

        return true;
      } else {
        while (aux.next != null) {
          aux = aux.next;
        }

        aux.next = product;

        return true;
      }
    }
  }

  deleteProduct(code) {
    let aux = this.first;

    if (this.searchProduct(code)) {
      if (this.first.code == code) {
        this.first = this.first.next;
      } else {
        while (aux.next.code != code) {
          aux = aux.next;
        }

        if (aux.next.code == code) {
          aux.next = aux.next.next;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  showNormalList() {
    let aux = this.first;

    if (this.first != null) {
      let list = "";

      while (aux != null) {
        list += aux.getDetails();
        aux = aux.next;
      }

      return list;
    } else {
      return false;
    }
  }

  showInverseList() {
    let aux = this.first;

    if (this.first != null) {
      let list = "";

      while (aux != null) {
        list = aux.getDetails() + list;
        aux = aux.next;
      }
      return list;
    } else {
      return false;
    }
  }

  addByPosition(position, newProduct) {
    let aux = this.first;

    if (this.searchProduct(newProduct.code)) {
      return false;
    } else {
      if (this.first == null && position > 1) {
        return false;
      }

      if (position <= 0) {
        return false;
      }

      if (position == 1) {
        this.first = newProduct;
        this.first.next = aux;
      } else {
        let i = 2;
        while (i != position) {
          if (aux.next != null) {
            aux = aux.next;
            i++;
          } else {
            break;
          }
        }

        if (i == position) {
          newProduct.next = aux.next;
          aux.next = newProduct;
        } else {
          return false;
        }
      }
      return true;
    }
  }
}
