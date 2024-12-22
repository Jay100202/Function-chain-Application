// Define the FunctionNode type using JSDoc
/**
 * @typedef {Object} FunctionNode
 * @property {number} id
 * @property {string} equation
 * @property {number | null} nextFunction
 */

// Define the Position type using JSDoc
/**
 * @typedef {Object} Position
 * @property {number} x
 * @property {number} y
 */

// Define the FunctionCardProps type using JSDoc
/**
 * @typedef {Object} FunctionCardProps
 * @property {FunctionNode} node
 * @property {Position} position
 * @property {function(string): void} onChange
 * @property {number} value
 * @property {number} result
 */