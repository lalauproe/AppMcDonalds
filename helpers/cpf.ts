export const removeCpfPunctuation = (cpf: string): string => {
  return cpf.replace(/[.-]/g, '');
};

export const isValidCpf = (cpf: string): boolean => {
    let digits = cpf.replace(/\D/g, '');
    if (digits.length !== 11) {
        return false;
    }
    if (/^(\d)\1+$/.test(digits)) {
        return false;
    }
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(digits.charAt(i), 10) * (10 - i);
    }
    let firstVerifier = (sum * 10) % 11;
    firstVerifier = firstVerifier === 10 ? 0 : firstVerifier;
    
    if (firstVerifier !== parseInt(digits.charAt(9), 10)) {
        return false;
    }
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(digits.charAt(i), 10) * (11 - i);
    }
    let secondVerifier = (sum * 10) % 11;
    secondVerifier = secondVerifier === 10 ? 0 : secondVerifier;
    
    return secondVerifier === parseInt(digits.charAt(10), 10);
    };