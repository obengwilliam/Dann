// Browser Download function:
function downloadSTR(obj, exportName) {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
// create the html element to upload the dannData.json
function upload(modelname,callback) {
    let funcstr = '';
    if (callback !== undefined) {
        funcstr = ','+callback.toString();
    }

    let downloadAnchorNode = document.createElement('input');
    downloadAnchorNode.setAttribute("type", "file");
    downloadAnchorNode.setAttribute("id", "upload");
    downloadAnchorNode.setAttribute("onChange", "clickedUpload("+modelname+funcstr+")");
    document.body.appendChild(downloadAnchorNode);


}

// function called when the html element is clicked
function clickedUpload(nn,callback) {

    let callfunc = eval(callback);
    let element = document.getElementById('upload');
    let file = element.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    let newNN;
    reader.onload = function() {
        let xdata =  JSON.parse(reader.result);
        newNN = xdata;
        nn.applyToModel(newNN);
        if (callfunc !== undefined) {
            callfunc(false);
        }
    };
    reader.onerror = function() {
        if (callfunc !== undefined) {
            callfunc(true);
        } else {
            console.log(reader.error);
        }
    };
    element.remove();
}
