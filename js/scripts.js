// YOUR SCRIPTS
// GRID VIEW
$('#grid').click(function(){
    // remove Only List class
    $('.cd-gallery').removeClass('list');
    
    //add ONLY Grid class
    $('.cd-gallery').addClass('grid')
    
    
});

//   List View

$('#list').click(function(){
    // remove Only List class
    $('.cd-gallery').removeClass('grid');
    
    //add ONLY Grid class
    $('.cd-gallery').addClass('list')
    
    
});

