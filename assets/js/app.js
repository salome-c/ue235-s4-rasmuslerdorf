// JS perso
/**
 * On attend que le DOM soit totalement chargé
 */
$(document).ready(function() {

    $('#article_title').keyup(function() {
        updateTitre("article_title", "Titre");
    });
    $('#article_content').keyup(function() {
        updateTitre("article_content", "Contenu");
    });
    $('#category_name').keyup(function() {
        updateTitre("category_name", "Nom");
    });


    function updateTitre(article_id, titre) {
        var num_mots = 0;
        var split = $("#" + article_id).val().split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i] != "") {
                num_mots += 1;
            }
        }

        if (num_mots === 0) {
            $("#" + article_id).css('backgroundColor', '#F2CEF2'); // couleur en cas de d'échec
            $("#" + article_id).attr('placeholder', 'Merci de remplir ce champ.');
        }
        else {
            $("#" + article_id).css('backgroundColor', '#CED2F2'); // couleur en cas réussite
            $("#" + article_id).attr('placeholder', '');
        }

        $("[for='" + article_id + "']").text(titre + ' - ' + num_mots + ' mots');
    }


    // au moment du clic sur le bouton "Enregistrer" de création d'un article
    $('#creer-article').on('click', function(){
        test("#article_title", "#article_content")

    });

    // au moment du clic sur le bouton "Enregistrer" de création d'une catégorie
    $('#creer-categorie').on('click', function(){
        test("#category_name", null)
    });


    function test(id, id2) {
        var id_value = $(id).val();

        if (id_value.length == 0) {
            $(id).css('backgroundColor', '#F2CEF2'); // couleur en cas de d'échec
            $(id).attr('placeholder', 'Merci de remplir ce champ.');
        }
        else {
            $(id).css('backgroundColor', '#CED2F2'); // couleur en cas réussite
            $(id).attr('placeholder', '');
        }

        if (id2 != null) {
            var id2_value = $(id2).val();

            if (id2_value.length == 0) {
                $(id2).css('backgroundColor', '#F2CEF2'); // couleur en cas de d'échec
                $(id2).attr('placeholder', 'Merci de remplir ce champ.');
            }
            else {
                $(id2).css('backgroundColor', '#CED2F2'); // couleur en cas réussite
                $(id2).attr('placeholder', '');
            }
        }
    }

});