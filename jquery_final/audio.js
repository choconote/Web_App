$(".example").musicPlayer({
      autoPlay:false ,
      volume: 80,

      loop:false,

      timeSeparator:' / ',

      playerAbovePlaylist:true, 
    
      infoElements: ['title' ,'artist'] ,
    
      elements: ['artwork','information','controls','progress','time','volume'], 
    
      timeElements: ['current','duration'], 
    
      controlElements: ['backward','play','forward','stop'],
    });
    $(".example").musicPlayer({
        
          onLoad:function() {},
        
          onPlay:function() {},
        
          onPause:function() {},
        
          onStop:function() {},
        
          onFwd:function() {},
        
          onRew:function() {},
        
          volumeChanged:function() {},
        
          progressChanged:function() {} ,
        
          trackClicked:function() {},
        
          onMute:function() {}
        
        });
        