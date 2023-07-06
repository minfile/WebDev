// Write your JavaScript script here.

      function japanF() {
        console.log("japan11");
        var chinaBtn = document.getElementsByClassName("blk4place china");
        var malaysiaBtn = document.getElementsByClassName("blk4place Malaysia");
        var japan = document.getElementsByClassName("blk4place Japan");
        for (var i = 0; i < chinaBtn.length; i += 1) {
          chinaBtn[i].style.display = "none";
        }
        for (var i = 0; i < malaysiaBtn.length; i += 1) {
          malaysiaBtn[i].style.display = "none";
        }
        for (var i = 0; i < japan.length; i += 1) {
          japan[i].style.display = "flex";
        }
      }

      function chinaF() {
        console.log("japan11");
        var china = document.getElementsByClassName("blk4place china");
        var japanBtn = document.getElementsByClassName("blk4place Japan");
        var malaysiaBtn = document.getElementsByClassName("blk4place Malaysia");
        for (var i = 0; i < japanBtn.length; i += 1) {
          japanBtn[i].style.display = "none";
        }
        for (var i = 0; i < malaysiaBtn.length; i += 1) {
          malaysiaBtn[i].style.display = "none";
        }
        for (var i = 0; i < china.length; i += 1) {
          china[i].style.display = "flex";
        }
      }

      function malaysiaF() {
        console.log("japan11");
        var malaysia = document.getElementsByClassName("blk4place Malaysia");
        var japanBtn = document.getElementsByClassName("blk4place Japan");
        var chinaBtn = document.getElementsByClassName("blk4place china");

        for (var i = 0; i < japanBtn.length; i += 1) {
          japanBtn[i].style.display = "none";
        }
        for (var i = 0; i < chinaBtn.length; i += 1) {
          chinaBtn[i].style.display = "none";
        }
        for (var i = 0; i < malaysia.length; i += 1) {
          malaysia[i].style.display = "flex";
        }
      }