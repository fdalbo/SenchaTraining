/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    extend: 'Tunes.Application',
    requires: ['Tunes.view.main.Main'],
    name: 'Tunes',
    mainView: 'Tunes.view.main.Main'
});
