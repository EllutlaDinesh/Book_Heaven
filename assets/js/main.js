
/* ==========================
   BOOK HAVEN MAIN JS
========================== */

AOS.init({
    duration: 1000,
    once: true
});

/* ==========================
   CURRENT YEAR
========================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
}

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".custom-navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");
    }
});

/* ==========================
   BACK TO TOP
========================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";
    }
});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* ==========================
   SHOPPING CART
========================== */

let cart = [];

function addToCart(bookName, price) {

    const item = {

        book: bookName,
        price: Number(price)
    };

    cart.push(item);

    updateCart();

    showToast(bookName + " added to cart");
}

/* ==========================
   UPDATE CART
========================== */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartItems ||
        !cartCount ||
        !cartTotal) {

        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML +=

        `
        <tr>

            <td>

                ${item.book}

            </td>

            <td>

                ₹${item.price}

            </td>

            <td>

                <button
                class="btn btn-sm btn-danger"

                onclick="removeItem(${index})">

                Remove

                </button>

            </td>

        </tr>
        `;
    });

    cartCount.innerText = cart.length;

    cartTotal.innerText = total;
}

/* ==========================
   REMOVE ITEM
========================== */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

/* ==========================
   CLEAR CART
========================== */

function clearCart() {

    cart = [];

    updateCart();
}

/* ==========================
   GENERATE BILL
========================== */

function generateBill() {

    const email =
        document.getElementById("customerEmail");

    if (!email) return;

    let total = 0;

    cart.forEach(item => {

        total += item.price;
    });

    alert(

        "Bill Generated\n\n" +

        "Email : " +

        email.value +

        "\n\nTotal Amount : ₹" +

        total +

        "\n\n(Static Project Demo)"
    );
}

/* ==========================
   TOAST MESSAGE
========================== */

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className =
        "custom-toast";

    toast.innerText =
        message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);
}

/* ==========================
   NEWSLETTER FORM
========================== */

const newsletterForms =
    document.querySelectorAll(
        ".newsletter-form"
    );

newsletterForms.forEach(form => {

    form.addEventListener("submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you for subscribing!"
            );
        });
});

/* ==========================
   CONTACT FORM
========================== */

const contactForm =
    document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Message sent successfully!"
            );
        });
}
