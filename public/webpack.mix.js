require('./webpack.mix.static.js');
let mix = require('laravel-mix');

// MelisCore
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/jquery-ui/css/jquery-ui.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-datepicker/assets/lib/css/bootstrap-datepicker.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/easy-pie/assets/lib/css/jquery.easy-pie-chart.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/notyfy/assets/lib/css/jquery.notyfy.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/notyfy/assets/lib/css/notyfy.theme.default.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-select/assets/lib/css/bootstrap-select.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/uniform/assets/lib/css/uniform.default.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/gallery/blueimp-gallery/assets/lib/css/blueimp-gallery.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-switch/assets/lib/css/bootstrap-switch.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/gritter/assets/lib/css/jquery.gritter.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/editors/wysihtml5/assets/lib/css/bootstrap-wysihtml5-0.0.2.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/jasny-fileupload/assets/css/fileupload.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/select2/assets/lib/css/select2.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-timepicker/assets/lib/css/bootstrap-timepicker.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/colorpicker-farbtastic/assets/css/farbtastic.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/tables/datatables/assets/css/dataTables.bootstrap.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/tables/datatables/assets/extensions/Responsive/css/responsive.bootstrap.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/tables/datatables/assets/extensions/Buttons/css/buttons.bootstrap.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/library/fancytree/src/skin-lion/ui.fancytree.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/library/fancytree/extensions/contextmenu/css/jquery.contextMenu.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/bootstrap/css/bootstrap.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/icons/fontawesome/assets/css/font-awesome.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/icons/glyphicons/assets/css/glyphicons_regular.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/icons/glyphicons/assets/css/glyphicons_social.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/icons/glyphicons/assets/css/glyphicons_filetypes.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/icons/pictoicons/css/picto.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/animate/animate.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/tables/responsive/assets/lib/css/footable.core.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/css/admin/module.admin.page.form_elements.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/css/admin/module.admin.page.tables_responsive.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/css/admin/module.admin.page.core.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/css/bootstrap-dialog.min.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/css/plugin.group.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/css/styles.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/css/diagnostic.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/css/custom-fontawesome.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/jquery/jquery.min.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/pluginConcat/melis-core-concat-plugins.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/core/js/core.init.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/pluginConcat/melis-core-concat-dataTables.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/pluginConcat/melis-core-concat-fancytree.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/library/tinymce/tinymce.min.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/library/tinymce/langs/fr_FR.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tinyMCE/melis_tinymce.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tinyMCE/tinymce_cleaner.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/gritter/assets/custom/js/gritter.init.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/excanvas.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.resize.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.time.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/plugins/jquery.flot.tooltip.min.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/custom/js/flotcharts.common.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/assets/components/library/bootstrap/js/bootstrap-datepicker.fr.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/core/tabExpander.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/core/melisSidebar.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/rightsFancytree/rightsFancytreeInit.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/core/melisCore.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/core/melisHelper.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/melisCoreTool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/users.tools.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/modules.tools.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/platforms.tools.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/lang.tools.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/emailMngt.tools.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/melisPHPUnitTool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/logs.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/user-profile.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/melisModalOpenTools.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/js/tools/platform.scheme.tools.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-core/public/build/js/bundle.js');

// MelisMarketPlace
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-marketplace/public/css/melis-market-place.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-marketplace/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-marketplace/public/js/slick.min.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-marketplace/public/js/FileSaver/FileSaver.min.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-marketplace/public/js/melis-market-place.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-marketplace/public/build/js/bundle.js');

// MelisCalendar
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-calendar/public/plugins/fullcalendar.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-calendar/public/css/calendar.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-calendar/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-calendar/public/plugins/fullcalendar.min.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-calendar/public/js/tools/calendar-tool.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-calendar/public/build/js/bundle.js');

// MelisCms
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/css/fancytree.custom.css', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/css/styles.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/cmsCore/melisCms.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/fancytreeInit/fancyTreeInit.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/template.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/site.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/langCms.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/platform.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/site-redirect.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/findpage.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/page-duplicate.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/searchpage.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/pagelang.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/js/tools/style.tool.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms/public/build/js/bundle.js');

// MelisCmsNews
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-news/public/css/news.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-news/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-news/public/js/tools/news.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-news/public/assets/switch/bootstrap-switch.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-news/public/build/js/bundle.js');

// MelisCmsPageAnalytics
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/css/site_analytics.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/plugin/ace-editor/ace.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/plugin/ace-editor/ext-old_ie.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/js/pagehit.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/js/page_analytics.tool.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-analytics/public/build/js/bundle.js');

// MelisCmsProspects
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/css/style.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/assets/flotchart/flotchart-simple.init.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/assets/flotchart/flotchart-simple-bars.init.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/js/tools/prospects.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/js/tools/prospects.theme.tool.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-prospects/public/build/js/bundle.js');

// MelisCmsSiteRobot
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-site-robot/public/css/site-robot.style.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-site-robot/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-site-robot/public/js/site-robot.tool.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-site-robot/public/build/js/bundle.js');

// MelisCmsSlider
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-slider/public/css/sliders.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-slider/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-slider/public/js/tools/slider.tool.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-slider/public/assets/switch/bootstrap-switch.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-slider/public/build/js/bundle.js');

// MelisDesign
mix.styles([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-design/public/css/design-tool.css', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-design/public/build/css/bundle.css');

mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-design/public/js/melis-design.concat-plugins.js', 
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-design/public/js/melis-design.concat-init.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-design/public/build/js/bundle.js');

// MelisCmsPageHistoric
mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-historic/public/js/melispagehistoric.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-cms-page-historic/public/build/js/bundle.js');

// MelisSiteTranslation
mix.scripts([
	'/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-site-translation/public/js/site-translation.js', 
], '/usr/local/zend/var/apps/http/melistest.local/80/_docroot_/vendor/melisplatform/melis-site-translation/public/build/js/bundle.js');

// Cached assets do not modify
let cache = [
'/MelisCore/assets/components/library/jquery-ui/css/jquery-ui.min.css',
'/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-datepicker/assets/lib/css/bootstrap-datepicker.css',
'/MelisCore/assets/components/modules/admin/charts/easy-pie/assets/lib/css/jquery.easy-pie-chart.css',
'/MelisCore/assets/components/modules/admin/notifications/notyfy/assets/lib/css/jquery.notyfy.css',
'/MelisCore/assets/components/modules/admin/notifications/notyfy/assets/lib/css/notyfy.theme.default.css',
'/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-select/assets/lib/css/bootstrap-select.css',
'/MelisCore/assets/components/modules/admin/forms/elements/uniform/assets/lib/css/uniform.default.css',
'/MelisCore/assets/components/modules/admin/gallery/blueimp-gallery/assets/lib/css/blueimp-gallery.min.css',
'/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-switch/assets/lib/css/bootstrap-switch.css',
'/MelisCore/assets/components/modules/admin/notifications/gritter/assets/lib/css/jquery.gritter.css',
'/MelisCore/assets/components/modules/admin/forms/editors/wysihtml5/assets/lib/css/bootstrap-wysihtml5-0.0.2.css',
'/MelisCore/assets/components/modules/admin/forms/elements/jasny-fileupload/assets/css/fileupload.css',
'/MelisCore/assets/components/modules/admin/forms/elements/select2/assets/lib/css/select2.css',
'/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-timepicker/assets/lib/css/bootstrap-timepicker.css',
'/MelisCore/assets/components/modules/admin/forms/elements/colorpicker-farbtastic/assets/css/farbtastic.css',
'/MelisCore/assets/components/modules/admin/tables/datatables/assets/css/dataTables.bootstrap.css',
'/MelisCore/assets/components/modules/admin/tables/datatables/assets/extensions/Responsive/css/responsive.bootstrap.css',
'/MelisCore/assets/components/modules/admin/tables/datatables/assets/extensions/Buttons/css/buttons.bootstrap.css',
'/MelisCore/js/library/fancytree/src/skin-lion/ui.fancytree.css',
'/MelisCore/js/library/fancytree/extensions/contextmenu/css/jquery.contextMenu.css',
'/MelisCore/assets/components/library/bootstrap/css/bootstrap.min.css',
'/MelisCore/assets/components/library/icons/fontawesome/assets/css/font-awesome.min.css',
'/MelisCore/assets/components/library/icons/glyphicons/assets/css/glyphicons_regular.css',
'/MelisCore/assets/components/library/icons/glyphicons/assets/css/glyphicons_social.css',
'/MelisCore/assets/components/library/icons/glyphicons/assets/css/glyphicons_filetypes.css',
'/MelisCore/assets/components/library/icons/pictoicons/css/picto.css',
'/MelisCore/assets/components/library/animate/animate.min.css',
'/MelisCore/assets/components/modules/admin/tables/responsive/assets/lib/css/footable.core.min.css',
'/MelisCore/assets/css/admin/module.admin.page.form_elements.min.css',
'/MelisCore/assets/css/admin/module.admin.page.tables_responsive.min.css',
'/MelisCore/assets/css/admin/module.admin.page.core.min.css',
'/MelisCore/css/bootstrap-dialog.min.css',
'/MelisCore/css/plugin.group.css',
'/MelisCore/css/styles.css',
'/MelisCore/css/diagnostic.css',
'/MelisCore/css/custom-fontawesome.css',
'/MelisMarketPlace/css/melis-market-place.css',
'/MelisCalendar/plugins/fullcalendar.css',
'/MelisCalendar/css/calendar.css',
'/MelisCms/css/fancytree.custom.css',
'/MelisCms/css/styles.css',
'/MelisCmsNews/css/news.css',
'/MelisCmsPageAnalytics/css/site_analytics.css',
'/MelisCmsProspects/css/style.css',
'/MelisCmsSiteRobot/css/site-robot.style.css',
'/MelisCmsSlider/css/sliders.css',
'/MelisDesign/css/design-tool.css',
'/melis/get-translations',
'/MelisCore/assets/components/library/jquery/jquery.min.js?v=v1.2.3',
'/MelisCore/js/pluginConcat/melis-core-concat-plugins.js',
'/MelisCore/assets/components/core/js/core.init.js',
'/MelisCore/js/pluginConcat/melis-core-concat-dataTables.js',
'/MelisCore/js/pluginConcat/melis-core-concat-fancytree.js',
'/MelisCore/js/library/tinymce/tinymce.min.js?v=1532680436',
'/MelisCore/js/library/tinymce/langs/fr_FR.js',
'/MelisCore/js/tinyMCE/melis_tinymce.js',
'/MelisCore/js/tinyMCE/tinymce_cleaner.js',
'/MelisCore/assets/components/modules/admin/notifications/gritter/assets/custom/js/gritter.init.js',
'/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/excanvas.js?v=v1.2.3',
'/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.js?v=v1.2.3',
'/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.resize.js?v=v1.2.3',
'/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.time.js?v=v1.2.3',
'/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/plugins/jquery.flot.tooltip.min.js?v=v1.2.3',
'/MelisCore/assets/components/modules/admin/charts/flot/assets/custom/js/flotcharts.common.js?v=v1.2.3',
'/MelisCore/assets/components/library/bootstrap/js/bootstrap-datepicker.fr.js',
'/MelisCore/js/core/tabExpander.js',
'/MelisCore/js/core/melisSidebar.js',
'/MelisCore/js/rightsFancytree/rightsFancytreeInit.js',
'/MelisCore/js/core/melisCore.js',
'/MelisCore/js/core/melisHelper.js',
'/MelisCore/js/tools/melisCoreTool.js',
'/MelisCore/js/tools/users.tools.js',
'/MelisCore/js/tools/modules.tools.js',
'/MelisCore/js/tools/platforms.tools.js',
'/MelisCore/js/tools/lang.tools.js',
'/MelisCore/js/tools/emailMngt.tools.js',
'/MelisCore/js/tools/melisPHPUnitTool.js',
'/MelisCore/js/tools/logs.tool.js',
'/MelisCore/js/tools/user-profile.js',
'/MelisCore/js/tools/melisModalOpenTools.js',
'/MelisCore/js/tools/platform.scheme.tools.js',
'/MelisMarketPlace/js/slick.min.js',
'/MelisMarketPlace/js/FileSaver/FileSaver.min.js',
'/MelisMarketPlace/js/melis-market-place.js',
'/MelisCalendar/plugins/fullcalendar.min.js',
'/MelisCalendar/js/tools/calendar-tool.js',
'/MelisCms/js/cmsCore/melisCms.js',
'/MelisCms/js/fancytreeInit/fancyTreeInit.js',
'/MelisCms/js/tools/template.tool.js',
'/MelisCms/js/tools/site.tool.js',
'/MelisCms/js/tools/langCms.tool.js',
'/MelisCms/js/tools/platform.tool.js',
'/MelisCms/js/tools/site-redirect.tool.js',
'/MelisCms/js/tools/findpage.tool.js',
'/MelisCms/js/tools/page-duplicate.tool.js',
'/MelisCms/js/tools/searchpage.tool.js',
'/MelisCms/js/tools/pagelang.js',
'/MelisCms/js/tools/style.tool.js',
'/MelisCmsNews/js/tools/news.tool.js',
'/MelisCmsNews/assets/switch/bootstrap-switch.js',
'/MelisCmsPageAnalytics/plugin/ace-editor/ace.js',
'/MelisCmsPageAnalytics/plugin/ace-editor/ext-old_ie.js',
'/MelisCmsPageAnalytics/js/pagehit.tool.js',
'/MelisCmsPageAnalytics/js/page_analytics.tool.js',
'/MelisCmsPageHistoric/js/melispagehistoric.js',
'/MelisCmsProspects/assets/flotchart/flotchart-simple.init.js?v=v1.2.3',
'/MelisCmsProspects/assets/flotchart/flotchart-simple-bars.init.js?v=v1.2.3',
'/MelisCmsProspects/js/tools/prospects.tool.js',
'/MelisCmsProspects/js/tools/prospects.theme.tool.js',
'/MelisCmsSiteRobot/js/site-robot.tool.js',
'/MelisCmsSlider/js/tools/slider.tool.js',
'/MelisCmsSlider/assets/switch/bootstrap-switch.js',
'/MelisDesign/js/melis-design.concat-plugins.js',
'/MelisDesign/js/melis-design.concat-init.js',
'/MelisSiteTranslation/js/site-translation.js',
];