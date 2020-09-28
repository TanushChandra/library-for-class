function isTouching(movingRect, f){//argument

    if (movingRect.x - f.x < f.width/2 + movingRect.width/2           //dummy argument
      && f.x - movingRect.x < f.width/2 + movingRect.width/2
      && movingRect.y - f.y < f.height/2 + f.height/2
      && f.y - movingRect.y < f.height/2 + movingRect.height/2) {
   return true;//yes
  }
  else {
    return false;//no
  
  }
    
  }
  