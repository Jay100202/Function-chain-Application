export const validateEquation = (equation) => {
  const validPattern = /^[x0-9+\-*/^()\s.]+$/;
  return validPattern.test(equation);
};

export const calculateResult = (equation, x) => {
  try {
    // Replace ^ with ** for exponentiation
    const processedEquation = equation.replace(/\^/g, '**').replace(/x/g, x.toString());
    return Function(`return ${processedEquation}`)();
  } catch (error) {
    console.error('Calculation error:', error);
    return 0;
  }
};