//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

document.getElementById('disclaimer').innerHTML=finePrint;
//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
document.getElementById('brand1').innerHTML='Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

document.getElementById('item1').innerHTML='Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

document.getElementById('price1').innerHTML='$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

// document.getElementById
discount1.innerHTML='Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

let itemTwo = document.createElement('div');
let gin= document.createTextNode("Hendrick's Gin");
itemTwo.appendChild(gin);
document.getElementById('brand2').appendChild(itemTwo);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

itemTwo.id = 'hendricks';
let priceTwo = document.createElement('div');
let ginPrice = document.createTextNode('$34.99');
priceTwo.appendChild(ginPrice);
hendricks.appendChild(priceTwo);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

let discBtn = document.createElement('button');
discBtn.id = 'discount3';
discBtn.innerHTML = '50% OFF Axe body soap!';
document.getElementsByClassName('block3')[0].appendChild(discBtn);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

let panda = document.getElementsByClassName('item')[0];
panda.innerHTML= 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

let pandaBtn = document.createElement('button');
pandaBtn.className = 'discount';
let pandaDiv = document.getElementsByClassName('block1')[1];
pandaDiv.appendChild(pandaBtn);
let pandaDisc = document.getElementsByClassName('discount')[0];
pandaDisc.innerHTML = 'Free T-shirt and fortune cookie with purchase!';


//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

let uni = document.getElementsByClassName('brand')[1];
uni.innerHTML= 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

let uniPrice = document.getElementsByClassName('price')[1];
uniPrice.innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

let brandDiv = document.createElement('div');
brandDiv.className = 'brand';
let itemBrand = document.getElementsByClassName('block3')[1];
itemBrand.appendChild(brandDiv);
brandDiv.innerHTML = 'Hifiman Shangri-La';

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

let itemDiv = document.createElement('div');
itemDiv.className = 'item';
itemBrand.appendChild(itemDiv);
itemDiv.innerHTML = 'Electronstatic Headphones';

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

let itemPrice = document.createElement('div');
itemPrice.className = 'price';
itemBrand.appendChild(itemPrice);
itemPrice.innerHTML = '$18,000';

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

let itemDisc = document.createElement('button');
itemDisc.className = 'discount';
itemBrand.appendChild(itemDisc);
itemDisc.innerHTML = 'Free Barry Manilow CD with purchase!';

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

let unicBrand = document.getElementsByClassName('brand')[3];
unicBrand.innerHTML = 'H&M';

let unicItem = document.getElementsByClassName('item')[3];
unicItem.innerHTML = 'Unicorn-Head Slippers';

let unicPrice = document.getElementsByClassName('price')[3];
unicPrice.innerHTML = '$21.99';

let unicDisc = document.getElementsByClassName('discount')[3];
unicDisc.innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

//Final Boss 
//Create your own product for the last three sections.
