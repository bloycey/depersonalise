var translate;
var currentTranslation;
var languageOne;
var languageTwo;
var languageThree;
var languageOutput;
var languageOneText;
var languageTwoText;
var languageThreeText;
var languageOutputText;

$(document).ready(function(){
    
   $("#submitTranslate").click(function(){
       translate = $("#translate").val();
       
       languageOne = $("#language1").val();
       languageTwo = $("#language2").val();
       languageThree = $("#language3").val();
       languageOutput = $("#language-output").val();
       
       languageOneText = $("#language1 :selected").text();
       languageTwoText = $("#language2 :selected").text();
       languageThreeText = $("#language3 :selected").text();
       languageOutputText = $("#language-output :selected").text();
       
       $("#firstTranslationTitle").html("Round One: " + languageOneText);
       $("#secondTranslationTitle").html("Round Two: " + languageTwoText);
       $("#thirdTranslationTitle").html("Round Three: " + languageThreeText);
       $("#outputTranslationTitle").html("Output: " + languageOutputText);
       
       return getTranslation1(languageOne);
       
   }) 
   
   document.addEventListener('keypress', function(event) {
    
    if (event.keyCode === 13 || event.which === 13) {
        translate = $("#translate").val();
        return getTranslation1();
    }
   });
                             
    
    
});


function getTranslation1(language) {
    
   $("#error").html('');
    
    if(translate != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + translate,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display1 = firstResults(data);
                currentTranslation = data.text;
                
                $("#firstTranslation").html(display1);
                
                
                getTranslation2(languageTwo, currentTranslation);
            }  
    
    
})   } else {
        $("#error").html("<div>Text Field Cannot be empty</div>")
    }
};


function getTranslation2(language, inputText) {
    
   $("#error").html('');
    
    if(translate != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + inputText,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display2 = firstResults(data);
                currentTranslation = data.text;
                
                $("#secondTranslation").html(display2);
                
                
                getTranslation3(languageThree, currentTranslation);
                
            }  
    
    
})   } else {
        $("#error").html("<div>Text Field Cannot be empty</div>")
    }
}

function getTranslation3(language, inputText) {
    
   $("#error").html('');
    
    if(translate != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + inputText,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display3 = firstResults(data);
                results1 = data.text;
                
                $("#thirdTranslation").html(display3);
                
                getTranslation4(languageOutput, currentTranslation);
            
                
            }  
    
    
})   } else {
        $("#error").html("<div>Text Field Cannot be empty</div>")
    }
}

function getTranslation4(language, inputText) {
    
   $("#error").html('');
    
    if(translate != ''){
        
        $.ajax({
           url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?lang=' + language + '&key=trnsl.1.1.20170226T033130Z.74a31ef2d1d851c0.4b9ad08deba7dd5c69334bd6121ed9e9fd07d154&text=' + inputText,
            type: "GET",
            dataType: "jsonp", 
            success: function(data){
                
                var display4 = firstResults(data);
                results1 = data.text;
                
                $("#outputTranslation").html(display4);
                    
            }  
    
    
})   } else {
        $("#error").html("<div>Text Field Cannot be empty</div>")
    }
}




 function firstResults(data){
    return data.text;
};
   
