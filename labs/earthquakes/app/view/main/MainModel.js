/**
 * Created by frederic on 11/7/2017.
 */
Ext.define('Earthquakes.view.main.MainModel', {

    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
    	earthquake: null
    },
    formulas: {},
    stores: {
        earthquakes: {
            type: 'store',
            model: 'Ext.data.Model',
            fields: [{
                type: 'date',
                name: 'timestamp',
                dateFormat: 'c'
            }],
            sorters: ['timestamp'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '//apis.is/earthquake/is',
                reader: {
                    rootProperty: 'results'
                }
            }
        }
    }
});