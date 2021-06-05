var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1S9TthD4AC_gLPipZgnWLgbl6tCcI7DIUTUhLThC_RdY/edit");
var sheet = ss.getSheetByName("Sheet1");
function doPost(e) {
   
  var data = JSON.parse(e.postData.contents)
  var userMsg = data.originalDetectIntentRequest.payload.data.message.text;
  var values = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues();
for(var i = 0;i<values.length; i++){
    
    if(values[i][0] == userMsg ){
      i=i+2;
var Data = sheet.getRange(i,12).getValue();
   
      var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": Data
    }
        
   }
  }
 ]
}
      
    var replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    return replyJSON;
}
  }
  if(userMsg == 'List'){
    var Itemdata = sheet.getRange(:,1).getValues();
    var results = {
      "fulfillmentMessages": [
    {
      "platform": "line",
      "type": 4,
      "payload" : {
      "line":  {
    "type": "text",
    "text": Itemdata
      }
          
     }
    }
   ]
  }
  var replyJSON = ContentService.createTextOutput(JSON.stringify(results)).setMimeType(ContentService.MimeType.JSON);
  return replyJSON;
  }
}