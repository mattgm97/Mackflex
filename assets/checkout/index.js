(function () {

    function init() {
      activeStepBar();
    }
  
    function activeStepBar() {
      $(window).on('ready hashchange', function () {
  
        const hash = window.location.hash.replace('#/', '');
  
        const steps = [
          {
            name: 'cart',
          },
          {
            name: 'profile',
          },
          {
            name: 'shipping',
          },
          {
            name: 'payment',
          }
        ];
  
        const findIndex = steps.findIndex(item => item.name === hash);
  
        function activateStep(name) {
          const element = $(`#${name}`);
          element.addClass('active');
          $(`#${name} + span`).addClass('active');
        }
  
        function inactiveStep(name) {
          const element = $(`#${name}`);
          element.removeClass('active');
          $(`#${name} + span`).removeClass('active');
        }
  
        steps.forEach((item, index) => {
  
          if (index < findIndex) {
            activateStep(item.name);
          } else if (index > findIndex) {
            inactiveStep(item.name);
          }
  
          if (index === findIndex) {
            const element = $(`#${item.name}`);
            element.addClass('active');
            $(`#${item.name} + span`).removeClass('active');
          }
        });
  
      });
    }
  
  
  
    init();
  
  })();
  
  $(document).ready(function() {
    setTimeout(() => {
  
      const linkToHome = "<a href='/' id='go-back-link'>Escolher mais produtos</a>"
      $('.coupon.summary-coupon').prepend(linkToHome)
      $('div#shipping-preview-container').prepend(linkToHome)
    }, 3500)
  })