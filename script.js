var tempdata;
var actualID;
function editar(id){
    if (!isNaN(actualID)){
        $('.noti').css('display','inline');
        return;
    }else{
        $('.noti').css('display','none');
    }
    actualID = id;
    var tr = $('#'+id);//obtiene el tr con determinado id
    tempdata = tr.eq(0).html();//obtiene lo que hay dentro del tr en formato string
    var ali=tr[0].children[0].innerHTML,
    cal=tr[0].children[1].innerHTML,
    gra=tr[0].children[2].innerHTML,
    pro=tr[0].children[3].innerHTML,
    car=tr[0].children[4].innerHTML;

    var srcimg = tr[0].children[5].children[0].getAttribute('src') == 'mal.jpeg'?true:false;

    tr.empty();//limpia el contenido dentro del tr
    var str = 
    '<td><input name="alimento" class="form-control" type="text" value="'+ali+'"></td>'+
    '<td><input name="calorias" class="form-control" type="number" id="cal" value="'+cal+'"></td>'+
    '<td><input name="grasas" class="form-control" type="number" id="gra" value="'+gra+'"></td>'+
    '<td><input name="proteina" class="form-control" type="number" id="pro" value="'+pro+'"></td>'+
    '<td><input name="carbohidratos" class="form-control" type="number" id="car" value="'+car+'"></td>'+
    '<td>'+
    '<select name="image" class="form-select">';
    if (srcimg){//si es true es mal
        str +=  '<option value="ok">Bien</option>'+
                '<option value="nook" selected>Mal</option>';
    }else{
        str +=  '<option value="ok" selected>Bien</option>'+
                '<option value="nook">Mal</option>';
    }
    str += '</select>'+'</td>'+'<td>En Edicion</td>';
    tr.append(str);
    $('#bottom').css('display','inline');
    //document.getElementById('bottom').style.display = "inline";
}

function cancelar(){
    var tr = $('#'+actualID);
    tr.empty();
    tr.append(tempdata);
    document.getElementById('bottom').style.display = "none";
    actualID = NaN;
}
