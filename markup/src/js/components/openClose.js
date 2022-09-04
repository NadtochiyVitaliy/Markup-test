import '../plugins/responsiveHelper';
import '../plugins/openClosePlugin';

export default function initOpenClose() {

  jQuery('.nav-wrap').each(function () {
    const holder = jQuery(this);
    ResponsiveHelper.addRange({
      '..1024': {
        on: function () {
          holder.openClose({
            activeClass: 'main-nav-active',
            opener: '.mobile-menu-opener',
            slider: '.nav-main',
            animSpeed: 200,
            hideOnClickOutside: true,
            effect: 'fade',
          });
        },
        off: function () {
            holder.openClose('destroy', true);
        },
      },
    });
  });

  jQuery('.acc-wrap').each(function () {
    const holder = jQuery(this);
    ResponsiveHelper.addRange({
      '..1024': {
        on: function () {
          holder.openClose({
            activeClass: 'main-acc-active',
            opener: '.mobile-acc-opener',
            slider: '.btn-list',
            animSpeed: 200,
            hideOnClickOutside: true,
            effect: 'fade',
          });
        },
        off: function () {
            holder.openClose('destroy', true);
        },
      },
    });
  });

}
