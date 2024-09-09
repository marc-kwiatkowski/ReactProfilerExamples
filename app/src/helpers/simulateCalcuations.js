/**
 * Simulates computation time to make rerendre examples obvious in profiling
 */
export const simulateCalculations = () => {
    const end = Date.now() + 500;
    while (Date.now() < end) {
        //didn't want to use a setTimeout to delay render, wanted actual calculation time
    }
};