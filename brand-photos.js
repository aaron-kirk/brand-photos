var watermark = app.open(Folder(File($.fileName).parent.fsName + "\\Watermark").getFiles("*.*")[0]);
var folder = new Folder(File($.fileName).parent.fsName + "\\Images");
var files = folder.getFiles("*.*");

if(files == null) {
    alert("No Images found");
} else {
    for (var i = 0; i < files.length; i++) {
        var document = app.open(files[i]);
        app.activeDocument = watermark;
        watermark.activeLayer.duplicate(document);

        app.activeDocument = document;
        var bounds = document.activeLayer.bounds;
        var docWidth = Number(document.width);
        var docHeight = Number(document.height);
        var layerWidth = Number(bounds[2] - bounds[0]);
        var layerHeight = Number(bounds[3] - bounds[1]);
        var dX = (docWidth - layerWidth) / 2 - Number(bounds[0]);
	    var dY = (docHeight - layerHeight) / 2 - Number(bounds[1]);
        document.activeLayer.translate(dX, dY);

        app.activeDocument = document;
        document.saveAs(File(File($.fileName).parent.fsName + "\\Output"), new PNGSaveOptions, true, Extension.LOWERCASE);
        document.close(SaveOptions.DONOTSAVECHANGES);
    }
}

watermark.close(SaveOptions.DONOTSAVECHANGES);

watermark = null;
folder = null
files = null;