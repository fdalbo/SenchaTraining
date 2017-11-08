/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    extend: 'YelpExtplorer.Application',
    name: 'YelpExtplorer',
    requires: ['YelpExtplorer.view.main.Main'],
    mainView: 'YelpExtplorer.view.main.Main'
});
