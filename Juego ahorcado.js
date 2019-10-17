  $(document).ready(function () {
    var palabras = ["ghost", "price", "soap", "misty", "maxis", "arligton", "richtofen", "marlton", 
    "bill", "nikolai", "peter", "russman", "samantha", "Takeo", "dempsey"]; 
    var r="";
    var palabra_seleccionada="";
    var itn=3;
    var temp = new Array();

    $("#btn_Finalizar").prop("disabled", true)
    $("#btn_Probar").prop("disabled", true)    
    $("#letra").prop("disabled", true)
    

    var seleccion = prompt("Seleccione una palabra de entre los siguientes numeros (0 al 14)");
    if(seleccion !=null){
      for (var i = 0; i < palabras[seleccion].length; i++) {
        if((palabras[seleccion].length)-1==i){
          r+='_';
        }else{
          r+='_ ';
        }
      };
      $("#incognita").text(r);
      $("#infoIntento").text(palabras[seleccion].length+2);
      itn=palabras[seleccion].length+2;
      temp = r.split(" ");
      palabra_seleccionada = palabras[seleccion];
      $("#btn_Finalizar").prop("disabled", false)
      $("#btn_Probar").prop("disabled", false)  
      $("#letra").prop("disabled", false)
    }

    $("#btn_Probar").click(function () {
        itn--;
        $("#infoIntento").text(itn);
        if(itn>0){
          var letra = $("#letra").val().toLowerCase();
          for (var i = 0; i < temp.length; i++) {
            if(palabra_seleccionada[i] == letra){
              temp[i] = letra;
            }else{
              if(temp[i]!="_"){
              }else{
                temp[i] = "_ ";
              }
            }
          };
          $("#incognita").text("");
          $("#incognita").html(temp);
          $("#letra").val("");
          $("#letra").focus();
          if(temp.join('')==palabra_seleccionada){
            $("#img2").show()
            alert("Ganaste, Efectivamente esa era la palabra!! :D")
            window.location.reload(true)
          }
        }else{
          $("#img").show()
          alert(":(  Perdiste! Intentalo de nuevo.")
          window.location.reload(true)
        }
    });
    $("#btn_Finalizar").click(function () {
      var opcion = prompt("Ingresa tu palabra: ");
    if(opcion !=null){
      if(opcion == palabra_seleccionada){
        $("#img2").show()
        alert("Ganaste, Efectivamente esa era la palabra!! :D")
        window.location.reload(true)
      }else{
        $("#img").show()
        alert("Perdiste!, Intentalo nuevamente");
        window.location.reload(true)
      }
      }
    });
    $("#letra").focus();
  });
