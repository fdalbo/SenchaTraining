Ext.define('Earthquakes.view.main.Main', {
	extend : 'Ext.panel.Panel',
	xtype : 'main',
	requires : [ 	'Earthquakes.view.Grid',
					'Ext.plugin.Viewport',
					'Earthquakes.view.Map',
			        'Earthquakes.view.main.MainModel',
			        'Ext.window.Toast',
			        'Earthquakes.view.main.MainController'
				],
	controller: 'main',
	layout : 'border',
	title : 'Earthquakes in Iceland',
	
    viewModel: {
        type: 'main'
    },
	
	items : [ {
		xtype : 'earthquakesmap',
		region : 'north',
		flex : 1,
		location : {
			latitude : 64.9312762,
			longitude : -19.021169
		},
		split : true,    
		listeners: {
	        select: 'onSelect'
	    },
	    bind: {
	        store: '{earthquakes}',
	        selection: '{earthquake}'
	    }
	}, {
		xtype : 'earthquakesgrid',
		region : 'center',
	    bind: {
	        store: '{earthquakes}',
	        selection: '{earthquake}'
	    }
	} ]
});
