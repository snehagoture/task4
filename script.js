var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
   var cdata =data.filter((ele)=>ele.region==='Asia')
console.log(cdata)
var population =data.filter((ele)=>ele.population<200000)
console.log(population)
var result = data.filter((ele) => ele.currencies[0].code=='USD');
console.log(result)
var temp = data.forEach(element => {
    console.log(element.name + " " + element.capital + " "+ element.flag);
});
var cusd=data.filter((x) =>{
    for(var i in x.currencies){
        if(x.currencies[i].code==='USD'){
            return true;
        }
    }
}).map((ele)=> console.log(ele.name));

var total=data.reduce(function(acc,cv){
    return acc+cv.population;
},0);
console.log(total);

}
