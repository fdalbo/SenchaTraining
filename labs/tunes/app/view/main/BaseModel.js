Ext.define('Tunes.view.main.BaseModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'Tunes.model.Tune'
    ],
    data: {
        name: 'Tunes'
    },
    stores: {
        tunes: {
            model: 'Tunes.model.Tune',
            autoLoad: true,
            sorters: ['artist', 'title']
        }
    }
});
