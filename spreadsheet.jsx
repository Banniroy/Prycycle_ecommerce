var wbook = SpreadsheetApp.openByUrl('htt....');

var sheet = wbook.getSheetByName('userInfor');
// doGet(e) doPost(e) func

function doGet(e){
    var action = e.parameter.action;
    if (action == "getUsers"){
        return getUsers(e);
    }
}

function getUsers(e){
    var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();

    var data = [];

    for(var i=0; i<rows.length; i++){
        var row = rows[i];
        var record = {};

        record['Name'] = row[0]; //to get the bike in row 0
        record['Informaion'] = row[1];
        record['Price'] = row[2]


        data.push(record);
    }

    var result = JSON.stringify(data);
    return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}