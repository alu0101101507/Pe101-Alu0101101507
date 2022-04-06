/**
 * Interfaz observer de clase subscripor
 */

interface subscriptor {
    update(observable: subscriptor): void
}