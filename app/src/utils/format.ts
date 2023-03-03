export const format = (node, formatFunction) => {
  function updateValue(e) {
    node.value = formatFunction(node.value)
  }

  node.addEventListener('input', updateValue)
  node.addEventListener('paste', updateValue)

  // Format on intial hydration
  node.value = formatFunction(node.value)

  return {
    destroy() {
        node.removeEventListener('input', updateValue)
        node.removeEventListener('paste', updateValue)
    }
  }
}

export const fomartAmountToCurrency = (/** @type {string} */ amount) => {
  if (amount) {
    return parseFloat(amount).toLocaleString('en-US', {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  }
};
