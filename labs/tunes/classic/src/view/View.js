/**
 * Created by frederic on 11/8/2017.
 */
Ext.define('Tunes.view.View', {
    extend: 'Ext.view.View',
    xtype: 'tunesview',
    scrollable: true,
    itemCls: 'video',
    overItemCls: 'overvideo',
    itemTpl: [
        '<figure>',
        '<div style="min-height:75px;min-width:100px;"><img src="{image}"></div>',
        '<figcaption style="text-overflow:ellipsis;white-space:nowrap;"><b>{title}</b><br>{artist}</figcaption><br>',
        '</figure>'
    ]
});