function notifyOnChangedFiles() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var rowNum = 1; rowNum < data.length; rowNum++) {
    var fileName = data[rowNum][0];
    var emails = data[rowNum][1];
    var shareLink = data[rowNum][2];
    
    if (isFileModified(fileName) && shareLink) {
      Logger.log(fileName);
      sendEmail(emails, fileName, shareLink);
    }
  }
}

function isFileModified(fileName) {
  var oneHourAgo = new Date(new Date().getTime() - 60 * 60 * 1000)
  var oneHourAgoAsIso = oneHourAgo.toISOString();
  var files = DriveApp.searchFiles('modifiedDate > "' + oneHourAgoAsIso + '" and title = "' + fileName + '"');
  return files.hasNext();
}

function sendEmail(emailList, subject, body) {
  MailApp.sendEmail({
    to: emailList,
    subject: 'Updated: ' + subject,
    name: 'Google Drive',
    body: body
  });  
}
