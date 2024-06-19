/** Esto se ejecuta cuando carga todo el documento */
$(document).ready(function () {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  function initMap() {
    // Coordenadas de la cafetería
    const cafeCoords = { lat: -34.6037389, lng: -58.3815704 };

    // Opciones del mapa
    const mapOptions = {
      zoom: 16,
      center: cafeCoords,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Agregar un marcador en la ubicación de la cafetería
    const marker = new google.maps.Marker({
      position: cafeCoords,
      map: map,
      title: "Cafetería"
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // Script para inciar el plugin de whatsapp
  $('.floating-wpp').floatingWhatsApp({
    phone: '0000000000',
    popupMessage: '¡Hola!, ¿te puedo ayudar en algo?',
    showPopup: true,
    position: 'right',
    //autoOpen: false,
    //autoOpenTimer: 4000,
    message: '',
    //headerColor: 'orange',
    headerTitle: 'WhatsApp Chat',
  });
  // Script para inciciar el plugin de carrusel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

  // recorremos el objeto productos y armamos el catálogo
  for (let i = 0; i < productos.length; i++) {
    $('#productos').append(
      `<div class="col mb-5 col-md-4 col-xs-6">
             <div class="card h-100 sc-product-item">
                 <!-- Sale badge-->
                 
                 <!-- Product image-->
                 <img class="card-img-top"  data-name="product_image" src="${'img/productos/' + productos[i].foto}" alt="${productos[i].nombre}">
                 <!-- Product details-->
                 <div class="card-body p-4">
                     <div class="text-center">
                         <!-- Product name-->
                         <span class="fw-bolder product_name" data-name="product_name">${productos[i].nombre}</span>
                         <br />
                         <span class="product_description">${productos[i].descripcion}</span>
                         <br />
                         <!-- Product reviews-->
                         <div class="d-flex justify-content-center small text-warning mb-2">
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                         </div>
                         <input name="product_price" value="${productos[i].precio}" type="hidden" />
                         <input name="product_id" value="${i}" type="hidden" />
                         <!-- Product price-->
                         <strong class="bold">$ ${productos[i].precio}</strong>
                     </div>
                 </div>
                 <!-- Product actions-->
                 <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                     <div class="text-center"><a class="btn mt-auto sc-add-to-cart btn-primary rounded-pill px-4" href="#">Agregar al carrito</a></div>
                 </div>
             </div>
         </div>`
    );
  }

  for (let i = 0; i < 3; i++) {
    $('#productos-home').append(
      `<div class="col mb-5 col-md-4 col-xs-6">
             <div class="card h-100 sc-product-item">
                 <!-- Sale badge-->
                 
                 <!-- Product image-->
                 <img class="card-img-top"  data-name="product_image" src="${'img/productos/' + productos[i].foto}" alt="${productos[i].nombre}">
                 <!-- Product details-->
                 <div class="card-body p-4">
                     <div class="text-center">
                         <!-- Product name-->
                         <span class="fw-bolder product_name" data-name="product_name">${productos[i].nombre}</span>
                         <br />
                         <span class="product_description">${productos[i].descripcion}</span>
                         <br />
                         <!-- Product reviews-->
                         <div class="d-flex justify-content-center small text-warning mb-2">
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                             <div class="bi-star-fill"></div>
                         </div>
                         <input name="product_price" value="${productos[i].precio}" type="hidden" />
                         <input name="product_id" value="${i}" type="hidden" />
                         <!-- Product price-->
                         <strong class="bold">$ ${productos[i].precio}</strong>
                     </div>
                 </div>
                 <!-- Product actions-->
                 <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                     <div class="text-center"><a class="btn mt-auto sc-add-to-cart btn-primary rounded-pill px-4" href="#">Agregar al carrito</a></div>
                 </div>
             </div>
         </div>`
    );
  }

  $('#smartcart').smartCart({
    cartItemTemplate: '<h3 class="h6 list-group-item-heading">{product_name}</h3>',
    lang: {
      cartTitle: "Tu pedido",
      checkout: 'Pedir',
      clear: 'Borrar',
      subtotal: 'Subtotal:',
      cartRemove: 'x',
      cartEmpty: 'Nada en tu carrito! <br /> Elige tus productos'

    }


  });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
      elements: '#portfolio a.portfolio-box'
  });

});