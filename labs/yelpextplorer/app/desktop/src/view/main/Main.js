
Ext.define('YelpExtplorer.view.main.Main',{
    extend: 'Ext.panel.Panel',
    xtype: 'main',

    requires: [
        'Ext.plugin.Viewport',
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.businesses.Filter',
        'YelpExtplorer.view.businesses.TabPanel'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    dockedItems: [{
        dock: 'top',
        xtype: 'banner'
    }, {
        dock: 'top',
        xtype: 'businessesfilter'
    }],
    
    layout: 'border',
    items: [{
        region: 'center',
    	xtype: 'businessestabpanel'
    }, {
        region: 'east',
        xtype: 'businessdetail',
        bind: {
            // data: '{business}'
            data: {
                bindTo: '{business}',
                deep: true
            }
        },
        width: 130
    }]

});
