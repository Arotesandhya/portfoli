$(document).ready(function(){
   var CountryCount=0;
   var CountryList=0;
    function countryCountFun(){
        CountryCount=0;
        $('.countryCheckBox').each(function(){
            if($(this).is(':checked')){
                CountryCount++; 
                if(CountryCount==5){
                    $('.countryCheckBox').not(':checked').prop("disabled", true);
                }
                else{
                    $('.countryCheckBox').prop("disabled", false);
                }
            }
        });
        console.log('country count ::'+CountryCount);
        console.log('country list ::'+CountryList);
    }
    $('.countryCheckBox').on('click', function(){
        countryCountFun();
    });
    $('.square').on('click', function(){
        $(this).toggleClass('countryActive');
    });
});