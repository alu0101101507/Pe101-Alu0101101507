/**
 * Clase que define un subscriptor
 */

import { revista } from "../revista/revista";

export class subscrip implements subscriptor {
    /**
     * 
     * @param name nombre del subscriptor
     */
    constructor(protected name: string){

    }

    /**
     * Recogemos el nombre del subscriptor
     * @returns this.name
     */
    getName(){
        return this.name;
    }

    /**
     * 
     * @param observable subsciptor
     */
    update(observable: subscriptor): void {
        if(observable instanceof revista)
            if(observable.getNum()+1){
                console.log(`Obsevador ${this.name} ` +
                            `Revista que esta mirando ${observable.getName()} ` +
                            `la revisa ha sacado un nuevo numero`);
            }
            else{
                console.log(`Obsevador ${this.name} ` +
                            `Revista que esta mirando ${observable.getName()} ` +
                            `la revisa no ha sacado un nuevo numero`);
            }
    }
}

