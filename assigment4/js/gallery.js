function upDate(previewPic){
    // lấy URL và alt của ảnh xem trước
    var imageURL = previewPic.src;
    var altText = previewPic.alt;
    
    // lấy tham chiếu đến div có id 'image'
    var imageDiv = document.getElementById("image");
    
    // thay đổi URL ảnh nền của div
    imageDiv.style.backgroundImage = "url('" + imageURL + "')";
    
    // thay đổi văn bản của div thành alt text của ảnh xem trước
    imageDiv.innerHTML = altText;
  }
  
  function unDo(){
      // lấy tham chiếu đến div có id "image"
      var imageDiv = document.getElementById("image");
      
      // đặt lại ảnh và văn bản của div
      imageDiv.style.backgroundImage = "none";
      imageDiv.innerHTML = "Hover over an image below to display here.";
  }