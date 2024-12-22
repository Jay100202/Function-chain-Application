import { useState, useEffect } from 'react';
import { initialFunctions, connectionOrder } from '../../../config/constants';
import { calculateResult, validateEquation } from '../../../utils/calculator';

export const useCalculatorState = () => {
  const [functions, setFunctions] = useState(initialFunctions);
  const [initialValue, setInitialValue] = useState(2);
  const [results, setResults] = useState({});

  const updateEquation = (id, equation) => {
    if (!validateEquation(equation)) return;
    setFunctions(prev => 
      prev.map(f => f.id === id ? { ...f, equation } : f)
    );
  };

  useEffect(() => {
    let currentValue = initialValue;
    const newResults = {};

    connectionOrder.forEach(id => {
      const func = functions.find(f => f.id === id);
      if (func) {
        currentValue = calculateResult(func.equation, currentValue);
        newResults[id] = currentValue;
      }
    });

    setResults(newResults);
  }, [initialValue, functions]);

  return {
    functions,
    initialValue,
    results,
    updateEquation,
    setInitialValue
  };
};