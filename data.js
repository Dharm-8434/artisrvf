const supermarketData = {
    categories:{
      produce:{
        discount:0.10,
        fruite:{
        discount:0.18,
          apple:{
            rate:50,
           discount: {
            purchaseQuantity: 3,
           discountQuantity: 1,
           discountUnit: 'kg'
           }
          },
          orange:{
            discount:0.20,
            rate:80,
          }
        },
        veg:{
         discount:0.05,
         potato:{
          discount:{
            purchaseQuantity: 5,
           discountQuantity: 2,
           discountUnit: 'kg'
           },
          rate:30
         },
         tomato:{
          discount:0.10,
          rate:70
         }
        }
      },
      Dairy:{
       discount:0.15,
       milk:{
        discount:0.20,
        cowmilk:{
          discount: {
           purchaseQuantity: 3,
          discountQuantity: 1,
          discountUnit: 'kg'
          },
          rate:50
        },
        soymilk:{
          discount:0.10,
          rate:40
        }
       },
       cheese:{
        discount:0.20,
        cheddar:{
         discount:{ 
          purchaseQuantity: 2,
          discountQuantity: 1,
          discountUnit: 'kg'
         },
         rate:50
        },
        gouda:{
        discount:0.10,
        rate:80
        }
       }
      }

    }
}

