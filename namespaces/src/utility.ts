namespace Utility {
    export namespace Taxes {
        export function calculateIva(price: number): number {
            return (price * 0.21) + price;
        }
        export function calculatePenaltyIva(price: number): number {
            return (price * 0.30) + price;
        }
    }
}