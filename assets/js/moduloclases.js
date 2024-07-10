import { animalesContainer } from "./script.js";

class Animal {
  #nombre;
  #edad;
  #imagen;
  #comentarios;
  #sonido;

  constructor(nombre, edad, imagen, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#imagen = imagen;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get imagen() {
    return this.#imagen;
  }

  set comentarios(nuevoComentario) {
    this.#comentarios = nuevoComentario;
  }

  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  get sonido() {
    return this.#sonido;
  }

  Sonido() {
    return "animal emite sonido";
  }

  mostrarHTML() {
    animalesContainer.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="assets/imgs/${this.#imagen}" class="card-img-top" alt="${this.#nombre
      }">
        <div class="card-body">
          <a href="#" class="btn btn-primary emitir-sonido">Emitir sonido</a>
        </div>
      </div>`;
  }
}

class Leon extends Animal {
  Sonido(rugir) {
    const audio = new Audio(`assets/sounds/${rugir}`);
    audio.play();
  }
}

class Lobo extends Animal {
  Sonido(aullar) {
    const audio = new Audio(`assets/sounds/${aullar}`);
    audio.play();
  }
}

class Oso extends Animal {
  Sonido(grunir) {
    const audio = new Audio(`assets/sounds/${grunir}`);
    audio.play();
  }
}

class Serpiente extends Animal {
  Sonido(sisear) {
    const audio = new Audio(`assets/sounds/${sisear}`);
    audio.play();
  }
}

class Aguila extends Animal {
  Sonido(chillar) {
    const audio = new Audio(`assets/sounds/${chillar}`);
    audio.play();
  }
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila }; 