
const supermarketData = import('./data')

  
  // Function to calculate the invoice
  function calculateInvoice(customer, items) {
    let totalAmount = 0;
    let totalSavings = 0;
  
    // Iterate through the items
    for (const item of items) {
      const { name, quantity } = item;
      let itemPrice = 0;
      let itemSavings = 0;
  
      // Check if the item exists in the supermarket data
      if (supermarketData.categories.hasOwnProperty(name)) {
        const categoryData = supermarketData.categories[name];
  
        // Check if the item has a discount
        if (categoryData.hasOwnProperty('discount')) {
          const categoryDiscount = categoryData.discount;
          itemSavings = categoryDiscount * quantity;
        }
  
        // Check if the item has subcategories
        if (categoryData.hasOwnProperty('fruits') || categoryData.hasOwnProperty('veg')) {
          let subcategoryData;
          if (categoryData.hasOwnProperty('fruits')) {
            subcategoryData = categoryData.fruits;
          } else if (categoryData.hasOwnProperty('veg')) {
            subcategoryData = categoryData.veg;
          }
  
          for (const subcategory in subcategoryData) {
            if (subcategoryData.hasOwnProperty(subcategory) && subcategoryData[subcategory].hasOwnProperty('discount')) {
              const subcategoryDiscount = subcategoryData[subcategory].discount;
              const subcategoryRate = subcategoryData[subcategory].rate;
  
              if (subcategoryData[subcategory].hasOwnProperty('discount')) {
                const discountData = subcategoryData[subcategory].discount;
                const purchaseQuantity = discountData.purchaseQuantity;
                const discountQuantity = discountData.discountQuantity;
                const discountUnit = discountData.discountUnit;
  
                const discountedQuantity = Math.floor(quantity / purchaseQuantity) * discountQuantity;
                const remainingQuantity = quantity % purchaseQuantity;
                const itemTotalQuantity = discountedQuantity + remainingQuantity;
  
                itemPrice += calculateItemPrice(subcategoryRate, discount)
              }
            }
        }
    }
}
    }
}
  