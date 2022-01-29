// JS perso en jQuery
/**
 * On attend que le DOM soit totalement chargé
 */
$(document).ready(function() {

    /********************************* JS des formulaires d'ajouts / d'éditions d'articles et de catégories ********************************/

    // quand l'utilisateur écrit dans les imputs (keyup)
    $('#article_title').keyup(function() {
        updateFormWhenInput("article_title", "Titre");
    });
    $('#article_content').keyup(function() {
        updateFormWhenInput("article_content", "Contenu");
    });
    $('#category_name').keyup(function() {
        updateFormWhenInput("category_name", "Nom");
    });

    // fonction de mise à jour des indications (nombre de mots, couleur et placeholder)
    function updateFormWhenInput(id, titre) {
        var num_mots = 0;
        var split = $("#" + id).val().split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i] != "") {
                num_mots += 1;
            }
        }

        if (num_mots === 0) {
            $("#" + id).css('backgroundColor', '#F2CEF2'); // couleur en cas de d'échec
            $("#" + id).attr('placeholder', 'Merci de remplir ce champ.');
        }
        else {
            $("#" + id).css('backgroundColor', '#CED2F2'); // couleur en cas réussite
            $("#" + id).attr('placeholder', '');
        }

        $("[for='" + id + "']").text(titre + ' - ' + num_mots + ' mots');
    }


    // au moment du clic sur le bouton "Enregistrer" de création d'un article
    $('#creer-article').on('click', function(){
        updateFormWhenSubmit("#article_title", "#article_content")

    });

    // au moment du clic sur le bouton "Enregistrer" de création d'une catégorie
    $('#creer-categorie').on('click', function(){
        updateFormWhenSubmit("#category_name", null)
    });

    // fonction quand l'utilisateur veut submit le formulaire : mise à jour des indications (couleur et placeholder)
    function updateFormWhenSubmit(id, id2) {
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

    /*********************************************** Fin ************************************************* */
});