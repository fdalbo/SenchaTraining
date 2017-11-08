/**
 * Created by frederic on 11/8/2017.
 */
Ext.define('Tunes.view.View', {
	extend: 'Ext.dataview.List',
	xtype: 'tunesview',
	itemCls: 'video',
	grouped:true,
	indexBar: true,
	itemTpl: [
	    '<img src="{image}" style="width: 90px;">',
	    '<div>',
	    '<p><b>{title}</b><br>{artist}</p>',
	    '</div>'
	]
});