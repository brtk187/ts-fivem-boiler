export const Delay = async (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
