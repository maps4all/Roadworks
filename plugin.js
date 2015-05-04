{
    "moduleId" : "maps4all/Roadworks",
    "title" : "Roadworks",
    "subtitle" : "www.roadworks.com",
    
    "backButton" : true,
    "enableGPS" : true,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : 'http',
    "shouldOverrideUrlLoading2" : 'https',

    "loadUrl" : null,

    "loadDataWithBaseUrl1" : 'http://roadworks.org',
    
    "loadDataWithBaseUrl3" : "text/html",
    "loadDataWithBaseUrl4" : "utf-8",
    "loadDataWithBaseUrl5" : null,
    "browserLaunchLink" : "http://roadworks.org",
    
    "loadDataWithBaseUrl2" : "
<script type='text/javascript'>
    
    // Set date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today =     yyyy+'-'+mm+'-'+dd;
    
    // Set center and zoom
    var center = {lat : #lat#, lng : #lng#, zoom : #zoom#};
    localStorage.setItem('position/', JSON.stringify(center));
    localStorage.setItem('cookiesAcknowledged', 'true');
    localStorage.setItem('cookiesAcknowledgedDate', today);
    window.location.href = 'http://www.roadworks.org';
    
</script>      
    
    "   
}
