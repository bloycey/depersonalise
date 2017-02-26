var city;
var currentTranslation;

$(document).ready(function(){
    
   $("#submitCity").click(function(){
       city = $("#city").val();
       return getTranslation1();
       
   }) 
   
   document.addEventListener('keypress', function(event) {
    
    if (event.keyCode === 13 || event.which === 13) {
        city = $("#city").val();
        return getTranslation1();
    }
   });
                             
    
    
});

function getTranslation1() {
    
   $("#error").html('');
    
    if(city != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=fr&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + city,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display1 = firstResults(data);
                currentTranslation = data.text;
                
                $("#firstTranslation").html(display1);
                
                
                getTranslation2("de", currentTranslation);
            }  
    
    
})   } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
};


function getTranslation2(language, inputText) {
    
   $("#error").html('');
    
    if(city != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + inputText,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display2 = firstResults(data);
                currentTranslation = data.text;
                
                $("#secondTranslation").html(display2);
                
                
                getTranslation3("af", currentTranslation);
                
            }  
    
    
})   } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
}

function getTranslation3(language, inputText) {
    
   $("#error").html('');
    
    if(city != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + inputText,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display3 = firstResults(data);
                results1 = data.text;
                
                $("#thirdTranslation").html(display3);
                
                getTranslation4("en", currentTranslation);
            
                
            }  
    
    
})   } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
}

function getTranslation4(language, inputText) {
    
   $("#error").html('');
    
    if(city != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + inputText,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display4 = firstResults(data);
                results1 = data.text;
                
                $("#fourthTranslation").html(display4);
                    
            }  
    
    
})   } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
}




 function firstResults(data){
    return data.text;
};
   
        
        
/*
function getTranslation1() {
    
    $("#error").html('');
    
    
    if(city != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=fr&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + city,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display1 = firstResults(data);
                
                $("#firstTranslation").html(display1);
                
                $("#city").val('');
                
            } 
            
        });
        
    
   
        

        
    } else {
        $("#error").html("<div>City Field Cannot be empty</div>")
    }
}

function test() {
    console.log('Testing trigger');
}
*/




















