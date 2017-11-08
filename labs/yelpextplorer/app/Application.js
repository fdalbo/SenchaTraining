Ext.define('YelpExtplorer.Application', {
    extend: 'Ext.app.Application',
    name: 'YelpExtplorer',
    onAppUpdate: function () {
        // onAppUpdate est exécuté par le microloader si la version en cache du navigateur
        // de l'application ne correspond pas à la version sur le serveur.
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});