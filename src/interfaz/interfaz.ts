/**
 * Interfaz observable por el resto de clases
 */

interface Observable {
    subscriptor(observer: subscriptor): void
    notify(): void
}