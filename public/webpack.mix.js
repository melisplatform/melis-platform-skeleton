require("./webpack.mix.static.js");
let mix = require("laravel-mix");

// MelisCore
mix.styles(
  [
    "vendor/melisplatform/melis-core/public/assets/components/library/jquery-ui/css/jquery-ui.min.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/easy-pie/assets/lib/css/jquery.easy-pie-chart.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/notyfy/assets/lib/css/jquery.notyfy.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/notyfy/assets/lib/css/notyfy.theme.default.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-select/assets/lib/css/bootstrap-select.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/uniform/assets/lib/css/uniform.default.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/gallery/blueimp-gallery/assets/lib/css/blueimp-gallery.min.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-switch/assets/lib/css/bootstrap-switch.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/gritter/assets/lib/css/jquery.gritter.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/editors/wysihtml5/assets/lib/css/bootstrap-wysihtml5-0.0.2.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/jasny-fileupload/assets/css/fileupload.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/select2/assets/lib/css/select2.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/bootstrap-timepicker/assets/lib/css/bootstrap-timepicker.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/forms/elements/colorpicker-farbtastic/assets/css/farbtastic.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/tables/datatables/assets/css/datatables.min.css",
    "vendor/melisplatform/melis-core/public/js/library/fancytree/src/skin-lion/ui.fancytree.css",
    "vendor/melisplatform/melis-core/public/js/library/fancytree/extensions/contextmenu/css/jquery.contextMenu.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/bootstrap/css/bootstrap.min.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/icons/fontawesome/assets/css/font-awesome.min.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/icons/glyphicons/assets/css/glyphicons_regular.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/icons/glyphicons/assets/css/glyphicons_social.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/icons/glyphicons/assets/css/glyphicons_filetypes.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/icons/pictoicons/css/picto.css",
    "vendor/melisplatform/melis-core/public/assets/components/library/animate/animate.min.css",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/tables/responsive/assets/lib/css/footable.core.min.css",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/bootstrap-datepicker-4/css/bootstrap-datetimepicker.min.css",
    "vendor/melisplatform/melis-core/public/assets/css/admin/module.admin.page.form_elements.min.css",
    "vendor/melisplatform/melis-core/public/assets/css/admin/module.admin.page.tables_responsive.min.css",
    "vendor/melisplatform/melis-core/public/assets/css/admin/module.admin.page.core.min.css",
    "vendor/melisplatform/melis-core/public/css/bootstrap-dialog.min.css",
    "vendor/melisplatform/melis-core/public/css/plugin.group.css",
    "vendor/melisplatform/melis-core/public/css/styles.css",
    "vendor/melisplatform/melis-core/public/css/custom-style.css",
    "vendor/melisplatform/melis-core/public/css/diagnostic.css",
    "vendor/melisplatform/melis-core/public/css/custom-fontawesome.css",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/gridstack/css/gridstack.css",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/enjoyhint/css/enjoyhint.css",
  ],
  "vendor/melisplatform/melis-core/public/build/css/bundle.css"
);

mix.scripts(
  [
    "vendor/melisplatform/melis-core/public/assets/components/library/jquery/jquery.min.js",
    "vendor/melisplatform/melis-core/public/assets/components/library/jquery-ui/js/jquery-ui.min.js",
    "vendor/melisplatform/melis-core/public/js/pluginConcat/melis-core-concat-plugins.js",
    "vendor/melisplatform/melis-core/public/assets/components/core/js/core.init.js",
    "vendor/melisplatform/melis-core/public/js/pluginConcat/melis-core-concat-dataTables.js",
    "vendor/melisplatform/melis-core/public/js/pluginConcat/melis-core-concat-fancytree.js",
    "vendor/melisplatform/melis-core/public/js/library/tinymce/tinymce.min.js",
    "vendor/melisplatform/melis-core/public/js/library/tinymce/langs/fr_FR.js",
    "vendor/melisplatform/melis-core/public/js/tinyMCE/melis_tinymce.js",
    "vendor/melisplatform/melis-core/public/js/tinyMCE/tinymce_cleaner.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/notifications/gritter/assets/custom/js/gritter.init.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/excanvas.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.resize.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.time.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/plugins/jquery.flot.tooltip.min.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.stack.js",
    "vendor/melisplatform/melis-core/public/assets/components/modules/admin/charts/flot/assets/custom/js/flotcharts.common.js",
    "vendor/melisplatform/melis-core/public/assets/components/library/bootstrap/js/bootstrap-datepicker.fr.js",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/bootstrap-datepicker-4/js/bootstrap-datetimepicker.min.js",
    "vendor/melisplatform/melis-core/public/assets/components/FileSaver/FileSaver.min.js",
    "vendor/melisplatform/melis-core/public/js/core/melisCore.js",
    "vendor/melisplatform/melis-core/public/js/core/tabExpander.js",
    "vendor/melisplatform/melis-core/public/js/rightsFancytree/rightsFancytreeInit.js",
    "vendor/melisplatform/melis-core/public/js/core/melisSidebar.js",
    "vendor/melisplatform/melis-core/public/js/core/melisHelper.js",
    "vendor/melisplatform/melis-core/public/js/tools/melisCoreTool.js",
    "vendor/melisplatform/melis-core/public/js/tools/users.tools.js",
    "vendor/melisplatform/melis-core/public/js/tools/modules.tools.js",
    "vendor/melisplatform/melis-core/public/js/tools/platforms.tools.js",
    "vendor/melisplatform/melis-core/public/js/tools/lang.tools.js",
    "vendor/melisplatform/melis-core/public/js/tools/emailMngt.tools.js",
    "vendor/melisplatform/melis-core/public/js/tools/melisPHPUnitTool.js",
    "vendor/melisplatform/melis-core/public/js/tools/logs.tool.js",
    "vendor/melisplatform/melis-core/public/js/tools/user-profile.js",
    "vendor/melisplatform/melis-core/public/js/tools/melisModalOpenTools.js",
    "vendor/melisplatform/melis-core/public/js/tools/platform.scheme.tools.js",
    "vendor/melisplatform/melis-core/public/js/tools/melis-core-gdpr-tool.js",
    "vendor/melisplatform/melis-core/public/assets/components/library/jquery-ui-touch/jquery.ui.touch-punch.min.js",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/gridstack/js/gridstack.js",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/gridstack/js/gridstack.jQueryUI.js",
    "vendor/melisplatform/melis-core/public/js/core/gridstack.init.js",
    "vendor/melisplatform/melis-core/public/assets/components/plugins/enjoyhint/js/enjoyhint.js",
    "vendor/melisplatform/melis-core/public/js/core/dashboard-notify.js",
  ],
  "vendor/melisplatform/melis-core/public/build/js/bundle.js"
);

// Cached assets do not modify
let cache = [
  "/MelisCore/assets/components/library/jquery-ui/css/jquery-ui.min.css",
  "/MelisCore/assets/components/modules/admin/charts/easy-pie/assets/lib/css/jquery.easy-pie-chart.css",
  "/MelisCore/assets/components/modules/admin/notifications/notyfy/assets/lib/css/jquery.notyfy.css",
  "/MelisCore/assets/components/modules/admin/notifications/notyfy/assets/lib/css/notyfy.theme.default.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-select/assets/lib/css/bootstrap-select.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/uniform/assets/lib/css/uniform.default.css",
  "/MelisCore/assets/components/modules/admin/gallery/blueimp-gallery/assets/lib/css/blueimp-gallery.min.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-switch/assets/lib/css/bootstrap-switch.css",
  "/MelisCore/assets/components/modules/admin/notifications/gritter/assets/lib/css/jquery.gritter.css",
  "/MelisCore/assets/components/modules/admin/forms/editors/wysihtml5/assets/lib/css/bootstrap-wysihtml5-0.0.2.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/jasny-fileupload/assets/css/fileupload.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/select2/assets/lib/css/select2.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/bootstrap-timepicker/assets/lib/css/bootstrap-timepicker.css",
  "/MelisCore/assets/components/modules/admin/forms/elements/colorpicker-farbtastic/assets/css/farbtastic.css",
  "/MelisCore/assets/components/modules/admin/tables/datatables/assets/css/datatables.min.css",
  "/MelisCore/js/library/fancytree/src/skin-lion/ui.fancytree.css",
  "/MelisCore/js/library/fancytree/extensions/contextmenu/css/jquery.contextMenu.css",
  "/MelisCore/assets/components/library/bootstrap/css/bootstrap.min.css",
  "/MelisCore/assets/components/library/icons/fontawesome/assets/css/font-awesome.min.css",
  "/MelisCore/assets/components/library/icons/glyphicons/assets/css/glyphicons_regular.css",
  "/MelisCore/assets/components/library/icons/glyphicons/assets/css/glyphicons_social.css",
  "/MelisCore/assets/components/library/icons/glyphicons/assets/css/glyphicons_filetypes.css",
  "/MelisCore/assets/components/library/icons/pictoicons/css/picto.css",
  "/MelisCore/assets/components/library/animate/animate.min.css",
  "/MelisCore/assets/components/modules/admin/tables/responsive/assets/lib/css/footable.core.min.css",
  "/MelisCore/assets/components/plugins/bootstrap-datepicker-4/css/bootstrap-datetimepicker.min.css",
  "/MelisCore/assets/css/admin/module.admin.page.form_elements.min.css",
  "/MelisCore/assets/css/admin/module.admin.page.tables_responsive.min.css",
  "/MelisCore/assets/css/admin/module.admin.page.core.min.css",
  "/MelisCore/css/bootstrap-dialog.min.css",
  "/MelisCore/css/plugin.group.css",
  "/MelisCore/css/styles.css",
  "/MelisCore/css/custom-style.css",
  "/MelisCore/css/diagnostic.css",
  "/MelisCore/css/custom-fontawesome.css",
  "/MelisCore/assets/components/plugins/gridstack/css/gridstack.css",
  "/MelisCore/assets/components/plugins/enjoyhint/css/enjoyhint.css",
  "/melis/get-translations",
  "/MelisCore/assets/components/library/jquery/jquery.min.js",
  "/MelisCore/assets/components/library/jquery-ui/js/jquery-ui.min.js",
  "/MelisCore/js/pluginConcat/melis-core-concat-plugins.js",
  "/MelisCore/assets/components/core/js/core.init.js",
  "/MelisCore/js/pluginConcat/melis-core-concat-dataTables.js",
  "/MelisCore/js/pluginConcat/melis-core-concat-fancytree.js",
  "/MelisCore/js/library/tinymce/tinymce.min.js?v=1588047381",
  "/MelisCore/js/library/tinymce/langs/fr_FR.js",
  "/MelisCore/js/tinyMCE/melis_tinymce.js",
  "/MelisCore/js/tinyMCE/tinymce_cleaner.js",
  "/MelisCore/assets/components/modules/admin/notifications/gritter/assets/custom/js/gritter.init.js",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/excanvas.js?v=v1.2.3",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.js?v=v1.2.3",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.resize.js?v=v1.2.3",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.time.js?v=v1.2.3",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/plugins/jquery.flot.tooltip.min.js?v=v1.2.3",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/lib/jquery.flot.stack.js",
  "/MelisCore/assets/components/modules/admin/charts/flot/assets/custom/js/flotcharts.common.js?v=v1.2.3",
  "/MelisCore/assets/components/library/bootstrap/js/bootstrap-datepicker.fr.js",
  "/MelisCore/assets/components/plugins/bootstrap-datepicker-4/js/bootstrap-datetimepicker.min.js",
  "/MelisCore/assets/components/FileSaver/FileSaver.min.js",
  "/MelisCore/js/core/melisCore.js",
  "/MelisCore/js/core/tabExpander.js",
  "/MelisCore/js/rightsFancytree/rightsFancytreeInit.js",
  "/MelisCore/js/core/melisSidebar.js",
  "/MelisCore/js/core/melisHelper.js",
  "/MelisCore/js/tools/melisCoreTool.js",
  "/MelisCore/js/tools/users.tools.js",
  "/MelisCore/js/tools/modules.tools.js",
  "/MelisCore/js/tools/platforms.tools.js",
  "/MelisCore/js/tools/lang.tools.js",
  "/MelisCore/js/tools/emailMngt.tools.js",
  "/MelisCore/js/tools/melisPHPUnitTool.js",
  "/MelisCore/js/tools/logs.tool.js",
  "/MelisCore/js/tools/user-profile.js",
  "/MelisCore/js/tools/melisModalOpenTools.js",
  "/MelisCore/js/tools/platform.scheme.tools.js",
  "/MelisCore/js/tools/melis-core-gdpr-tool.js",
  "/MelisCore/assets/components/library/jquery-ui-touch/jquery.ui.touch-punch.min.js",
  "/MelisCore/assets/components/plugins/gridstack/js/gridstack.js",
  "/MelisCore/assets/components/plugins/gridstack/js/gridstack.jQueryUI.js",
  "/MelisCore/js/core/gridstack.init.js",
  "/MelisCore/assets/components/plugins/enjoyhint/js/enjoyhint.js",
  "/MelisCore/js/core/dashboard-notify.js",
];
