/**
 * clase que define una revista
 */

import { subscrip } from "../subcriptor/subscriptor";

export class revista implements Observable {
    /**
     * @param observers lista de subscriptores observadores
     */
  private observers: subscriptor[] = [];
  
  /**
   * Contructor de una revista
   * @param name nombre de la revista
   * @param num numero de la revista
   */
  constructor(protected name: string, protected num: number){

  }

  /**
   * Recogemos el numbre de la revista
   * @returns this.name
   */
  getName() { 
    return this.name;
  }

  /**
   * Recogemos el numero de la revista
   * @returns this.num
   */
  getNum() {
    return this.num;
  }

  /**
   * Nos permite saber si el susbcriptor ya lo es de la revista por tanto no se añade al aray anterior
   * si no esta dentro se mete en el array de subscriptres
   */
  subscriptor(observer: subscriptor): void {
    if (this.observers.includes(observer)) {
        throw new Error('Ya es un subscriptor de la revista');
    } else {
        this.observers.push(observer);
      }
    }
    /**
     * funcion que nos permitira notificar de la salida de un nuevo numero de la revista
     */
    notify() {
        this.observers.forEach((observer) => observer.update(observer));
    }
}
