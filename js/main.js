// Open Sub Menu
$(".drp_btn").click(function () {
  $(this).siblings(".sub_menu").slideToggle();
});

// Preloader JS

function preloader_fade() {
  $("#preloader").fadeOut("slow");
}

$(document).ready(function () {
  window.setTimeout("preloader_fade();", 500); //call fade in .5 seconds
});

// All Slider Js

$("#frmae_slider").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  smartSpeed: 1500,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// $('#company_slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     autoplay: true,
//     smartSpeed: 1500,
//     dots: true,
//     responsive:{
//         0:{
//             items:2
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$("#testimonial_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  smartSpeed: 2500,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#screen_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 2500,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// Number Count
window.addEventListener("scroll", function () {
  var element = document.querySelector("#counter");
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }

  if (position.top < window.innerHeight && position.bottom >= 0) {
    //console.log('Element is partially visible in screen');
  } else {
    //console.log('Element is not visible');
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = 0;
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 100,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
  }
});

// --------Magnify-popup

$(function () {
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

// Pricing Section Year Month Jquery
$(document).ready(function () {
  $(".tog_block").click(function () {
    $(".tog_btn").toggleClass("month_active");
    $(".month").toggleClass("active");
    $(".years").toggleClass("active");

    $(".monthly_plan").toggleClass("active");
    $(".yearly_plan").toggleClass("active");
  });
});

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".icon_faq")
      .addClass("icofont-minus")
      .removeClass("icofont-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".icon_faq")
        .removeClass("icofont-plus")
        .addClass("icofont-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".icon_faq")
        .removeClass("icofont-minus")
        .addClass("icofont-plus");
    });

  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .children("h2")
        .children(".btn")
        .addClass("active");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .children("h2")
        .children(".btn")
        .removeClass("active");
    });
});

// Download Section Hover Jquery
window.addEventListener("scroll", function () {
  var element = document.querySelector(".free_text");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    $(".purple_backdrop").css("opacity", "1");
  } else {
    //console.log('Element is not visible');
    $(".purple_backdrop").css("opacity", "0");
  }
});

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    window.addEventListener("scroll", function () {
      var element = document.querySelector(".mobile_mockup");
      var position = element.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        $(".purple_backdrop").css("opacity", "1");
      } else {
        //console.log('Element is not visible');
        $(".purple_backdrop").css("opacity", "0");
      }
    });
  } else {
    window.addEventListener("scroll", function () {
      var element = document.querySelector(".free_text");
      var position = element.getBoundingClientRect();

      if (position.top < window.innerHeight && position.bottom >= 0) {
        $(".purple_backdrop").css("opacity", "1");
      } else {
        //console.log('Element is not visible');
        $(".purple_backdrop").css("opacity", "0");
      }
    });
  }
});

// Scrool-top
$(document).ready(function () {
  var toTop = $(".go_top");
  toTop.on("click", function () {
    $("html, body").animate({ scrollTop: $("html, body").offset().top }, 400);
  });

  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 750) {
      $(toTop).css("opacity", "1");
    } else {
      $(toTop).css("opacity", "0");
    }
  });
});

// Fix Header Js
$(window).scroll(function () {
  if ($(window).scrollTop() >= 250) {
    $("header").addClass("fix_style");
  } else {
    $("header").removeClass("fix_style");
  }
  if ($(window).scrollTop() >= 260) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});

//YOUTUBE VIDEO
$(".play-button").click(function (e) {
  var iframeEl = $("<iframe>", { src: $(this).data("url") });
  $("#youtubevideo").attr("src", $(this).data("url"));
});

$("#close-video").click(function (e) {
  $("#youtubevideo").attr("src", "");
});

$(document).on("hidden.bs.modal", "#myModal", function () {
  $("#youtubevideo").attr("src", "");
});

// Close btn on click

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    if (
      $(this)
        .children("span")
        .children(".ico_menu")
        .hasClass("icofont-navigation-menu")
    ) {
      $(this)
        .children("span")
        .children(".ico_menu")
        .removeClass("icofont-navigation-menu")
        .addClass("icofont-close");
    } else {
      $(this)
        .children("span")
        .children(".ico_menu")
        .removeClass("icofont-close")
        .addClass("icofont-navigation-menu");
    }
  });
});

(function () {
  $(".toggle-wrap").on("click", function () {
    $(this).toggleClass("active");
    $("aside").animate({ width: "toggle" }, 200);
  });
})();

async function fetchClientData() {
  try {
    const response = await fetch(
      "https://api.busyness.app/folloWhiteLabelledApp/getWhiteLabelledAppClients"
    );
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("Error fetching client data:", error);
    return [];
  }
}

const staticClients = [
  {
    webUrl: "https://web.busyness.app/",
    businessName: "Medication Delivery",
    logoUrl: "images/medicine_delivery.png",
  },
  {
    webUrl: "https://web.busyness.app/",
    businessName: "Doctor Consultation Online",
    logoUrl: "images/online.png",
  },
  {
    webUrl: "https://web.busyness.app/",
    businessName: "Offline Doctor Consultation",
    logoUrl: "images/offline.png",
  },
  {
    webUrl: "https://web.busyness.app/",
    businessName: "OHC B2B Doctor & Nurses",
    logoUrl: "images/ohb.png",
  },
  {
    webUrl: "https://web.busyness.app/",
    businessName: "Annual Health Checkups",
    logoUrl: "images/Annual_check.png",
  }
];

async function generateCards() {
  const slider = document.getElementById("company_slider");
  const clients = staticClients; // Use the static client data

  if (Array.isArray(clients)) {
    clients.forEach((client) => {
      if (!client.webUrl) {
        return;
      }

      const cardDiv = document.createElement("div"); // Create a div for the entire card
      cardDiv.classList.add("item");

      const logoImg = document.createElement("img");
      logoImg.classList.add("item-image"); // Add the class for image styling
      logoImg.src = client.logoUrl;
      // logoImg.width = 200; // Set the desired width
      // logoImg.height = 200; // Set the desired height

      const businessName = document.createElement("p");
      businessName.classList.add("card-title", "centered-text"); // Add the class for name styling and centering
      businessName.textContent = client.businessName;

      const optionsContainer = document.createElement("div");
      optionsContainer.classList.add("options-container");

      // Add Play Store link if it's not empty
      if (client.playStoreLink) {
        const playStoreLink = document.createElement("a");
        playStoreLink.classList.add("option");
        playStoreLink.textContent = "Play Store";
        playStoreLink.href = client.playStoreLink;
        playStoreLink.target = "_blank";
        optionsContainer.appendChild(playStoreLink);
      }

      // Add iOS Store link if it's not empty
      if (client.iosStoreLink) {
        const iosStoreLink = document.createElement("a");
        iosStoreLink.classList.add("option");
        iosStoreLink.textContent = "iOS Store";
        iosStoreLink.href = client.iosStoreLink;
        iosStoreLink.target = "_blank";
        optionsContainer.appendChild(iosStoreLink);
      }

      // Event listener to handle the card click
      cardDiv.addEventListener("click", () => redirectToURLVydic());

      cardDiv.appendChild(logoImg);
      cardDiv.appendChild(businessName);
      cardDiv.appendChild(optionsContainer);
      slider.appendChild(cardDiv);
    });
  }
}

function redirectToURLVydic() {
  const redirectTo = "https://vydic-plus.busyness.app/#/";
  console.log('redirection ', redirectTo);
  window.location.href = redirectTo;
}

function initCarousel() {
  $("#company_slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}
generateCards().then(() => {
  initCarousel();
});

///// clients.html


async function getClientsFromApi() {
  try {
    const response = await fetch('https://api.busyness.app/folloWhiteLabelledApp/getWhiteLabelledAppClients');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.clients; // Extract the 'clients' array from the API response
  } catch (error) {
    console.error('Error fetching clients:', error);
    return [];
  }
}

// Function to create the card element for each client
function createClientCard(client) {
  const card = document.createElement('div');
  card.classList.add('client-card');

  const logoImg = document.createElement('img');
  logoImg.height = 200;
  logoImg.width = 200;
  logoImg.src = client.webUrl
    ? `${client.webUrl}/splash/img/light-2x.png`
    : "https://web.busyness.app/splash/img/light-2x.png";
  logoImg.alt = `${client.businessName} Logo`; // Use 'businessName' instead of 'name'

  const description = document.createElement('p'); // Add description paragraph element
  description.textContent = client.description; // Use the 'description' property from the API response

  const iconsDiv = document.createElement('div');
  iconsDiv.classList.add('client-icons');

  // Create icon links
  const webLink = createIconLink(client.webUrl, 'images/web-link.png', 'Web');
  iconsDiv.appendChild(webLink);
  if (client.playStoreLink) {
  const playStoreLink = createIconLink(client.playStoreLink, 'images/playstore.svg', 'Play Store');
  iconsDiv.appendChild(playStoreLink); 
  }
  if (client.iosStoreLink) {
  const iosLink = createIconLink(client.iosStoreLink, 'images/app-store.svg', 'App Store');
  iconsDiv.appendChild(iosLink);
  }

  // Append logo and icons to the card
  card.appendChild(logoImg);
  card.appendChild(description);
  
  card.appendChild(iconsDiv);
  return card;
}

// Function to create icon links
function createIconLink(href, iconSrc, altText) {
  const link = document.createElement('a');
  link.href = href;
  link.target = '_blank';

  const iconImg = document.createElement('img');
  iconImg.src = iconSrc;
  iconImg.alt = altText;
  link.appendChild(iconImg);
  return link;
}


// Fetch clients from the API and create cards once the page loads
window.onload = async function () {
  const clients = await getClientsFromApi();
  const clientCardsContainer = document.getElementById('clientCards');

  clients.forEach((client) => {
    if (!client.webUrl) {
      return;
    }
    const card = createClientCard(client);
    clientCardsContainer.appendChild(card);
  });
};


// INITIALIZE AOS

AOS.init();
