document.getElementById("cart-info").addEventListener("click", addCart);
function addCart() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
}

(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            // console.log(event.target);

            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src;

                let pos = fullPath.indexOf("img") + 3;
                let partPath = fullPath.slice(pos);

                const item = {};
                item.img = `img-cart${partPath}`;

                let name =
                    event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;

                let price =
                    event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;


                const cartItem = document.createElement('div');
                // cartItem.classList.add('cart-item','d-flex','justify-content-between','text-capitalize','my-3');
                cartItem.innerHTML =
                    ` <div class="child cart-item d-flex justify-content-between text-capitalize  my-3" >
        <img src="${item.img} "  alt="" class="img-fluid height4 rounded-circle "
         id="item-img" >
         <div class="item-text">
           <p class="font-weight-bold mb-0"  id="cart-item-title " >${item.name}
          </p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price mb-0" >${item.price} </span>
         </div> 
         
         <a href="#" id="cart-item-remove" class="cart-item-remove" >
           <i class="fas fa-trash" id="del" ></i>
          </a>
          
      </div>
      `;

                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert(item.name + " " + "a été ajouté à la carte");
                //  
                showTotals();
            }
        });

    });
    function showTotals() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function (item) {
            total.push(parseFloat(item.textContent))
        });

        const totalMoney = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        document.getElementById("cart-total").textContent = finalMoney;
        document.querySelector(".item-total").textContent = finalMoney;
        document.getElementById("item-count").textContent = total.length;

    }
    let a = document.getElementById("del");

    function suppr() {
        e.target.parentElement.parentElement.remove();
    }
    a.addEventListener('click', suppr);
})();