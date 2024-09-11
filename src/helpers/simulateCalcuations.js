/**
 * Simulates computation time to make rerendre examples obvious in profiling
 */
export const simulateCalculations = (timing = 100) => {
    const end = Date.now() + timing;
    while (Date.now() < end) {
        //didn't want to use a setTimeout to delay render, wanted actual calculation time
    }
};