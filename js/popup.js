var config = {
  host: 'wb2-mar-p0002.systems.private',
  isSecure: true
}
// chrome.windows.create({
//   url: 'https://wb2-mar-p0002.systems.private/dataloadeditor/app/52fb9488-bdf8-4946-a3fb-0a00540befb1',
//   state: 'maximized'
// });


qsocks.Connect(config).then(function(global) {
  console.log('Connected!')
  global.getDocList().then(function(apps) {
    console.log(apps)
    var table = "<table id='docListTable' class='tablesorter' width=100%><thead><tr><th>App</th><th>Modified</th><th>...</th> </tr></thead>"
    for(var i = 0; i < apps.length; i++) {
        var app = apps[i];
        var modifiedDate = moment(app.qMeta.modifiedDate).format('YYYY-MM-DD hh:mm');
        table += '<tr><td><a target="_newtab" href="https://wb2-mar-p0002.systems.private/sense/app/'+ app.qDocId + '">' + app.qDocName + '</a></td><td>' + modifiedDate + '</td><td>Delete</td></tr>';
        //if(app.qDocName.indexOf('Automated') > -1) {
          console.log(app.qDocName);
        //}
  }

  $('#docListDiv').append(table);
  $("#docListTable").tablesorter();

  })
  // global.createApp('123').then(function(app) {
  //   if(app.qSuccess == true) {
  //     var appId = app.qAppId;
  //     // https://wb2-mar-p0002.systems.private/dataloadeditor/app/52fb9488-bdf8-4946-a3fb-0a00540befb1
  //   }
  //});

}).catch(function(error) {
  console.log('oh no', error);
});
