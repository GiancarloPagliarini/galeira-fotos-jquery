$(document).ready(function(){
    
    $('.new-image-btn').click( () => {
        $('form').slideDown()
    })

    $('.reset-btn').click ( () => {
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const newUrlImage = $('#new-url-image').val()
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${newUrlImage}">`).appendTo(newItem)
        $(`
        <div class="overlay-image-link"> 
        <a href="${newUrlImage}" target="_blank" title="Ver imagem"> Ver imagem em tamanho real </a>
        </div>
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1300)
        $('#new-url-image').val('')
    })
})

