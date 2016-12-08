function FileSaverModule($timeout) {
    function save(bytes, fileName) {
        // TODO: Improve
        var a = document.createElement('a');
        var blob = new Blob(bytes, {type: 'octet/stream'});

        if (window.navigator && window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
            return;
        }

        document.body.appendChild(a);

        a.style = 'display: none';
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.click();

        $timeout(function() {
            window.URL.revokeObjectURL(a.href);
            a.remove();
        }, 100);
    }

    return {
        save: save
    };
}

FileSaverModule.dependencies = [
    '$timeout'
];
