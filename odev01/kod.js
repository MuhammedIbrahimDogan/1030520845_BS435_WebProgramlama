var random_array = ["./kopek.png","./kopek.png","./kopek.png"];
var deneme_count = 0;
var vinner_index = 0;
var isFinish = false;

create_random_array();

function create_random_array(){
    vinner_index = Math.floor(Math.random() * 3);
    random_array[vinner_index] = "./kedi.png";
}

function KartiAc(id){
    deneme_count++;
    document.getElementById("img"+id).src = random_array[id];
    if(!isFinish && vinner_index == id){
        document.getElementById("alanId").style.display = "none";
        document.getElementById("kazandiId").style.display = "block";
        isFinish = true;
        return;
    }
    else if(!isFinish && deneme_count == 2){
        document.getElementById("alanId").style.display = "none";
        document.getElementById("yenildiId").style.display = "block";
        isFinish = true;
    }
    
}