  (function() {
      var dragged, listener;

      console.clear();

      dragged = null;

      listener = document.addEventListener;

      listener("dragstart", (event) => {
        console.log("start !");
        return dragged = event.target;
      });

      listener("dragend", (event) => {
        return console.log("end !");
      });

      listener("dragover", function(event) {
        return event.preventDefault();
      });

      listener("drop", (event) => {
        console.log("drop !");
        event.preventDefault();
        if (event.target.className === "dropbox") {
          dragged.parentNode.removeChild(dragged);
          return event.target.appendChild(dragged);
        }
      });

    }).call(this);

    function addpaper(){
      var newpaper= document.createElement("div")
      newpaper.className="paper";
      newpaper.innerHTML ='<div class="task-title"><input id="task-title" placeholder="Task"></div>'+'<div class="task-note"><textarea id="task01" placeholder="...note"></textarea   ></div>';
      newpaper.draggable = true;    

      document.getElementById("section0").appendChild(newpaper);

    }
