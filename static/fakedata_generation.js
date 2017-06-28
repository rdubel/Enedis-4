$(document).ready(function() {

        // Génération des données bidons en JSON :
        // Uniquement pour la ville de Mende

        var myObject = new Object();

        myObject.nom_commune = "Mende";

        // Génération des données de consommation mensuelles (2015) :

        myObject.conso_mensuelle_2015 = {};
        myObject.conso_mensuelle_2015.janvier = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.fevrier = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.mars = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.avril = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.mai = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.juin = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.juillet = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.aout = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.septembre = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.octobre = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.novembre = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2015.decembre = (Math.random() * 100 + 1).toFixed(2);

        // Ajout de l'historique des températures, recupérées sur météo France (2015):

        myObject.temp_mois_2015 = {};
        myObject.temp_mois_2015.janvier = {};
        myObject.temp_mois_2015.janvier.min = -1.7;
        myObject.temp_mois_2015.janvier.max = 5.7;
        myObject.temp_mois_2015.fevrier = {};
        myObject.temp_mois_2015.fevrier.min = -3;
        myObject.temp_mois_2015.fevrier.max = 4.9;
        myObject.temp_mois_2015.mars = {};
        myObject.temp_mois_2015.mars.min = 2.2;
        myObject.temp_mois_2015.mars.max = 11.1;
        myObject.temp_mois_2015.avril = {};
        myObject.temp_mois_2015.avril.min = 4;
        myObject.temp_mois_2015.avril.max = 15.4;
        myObject.temp_mois_2015.mai = {};
        myObject.temp_mois_2015.mai.min = 7.1;
        myObject.temp_mois_2015.mai.max = 18.8;
        myObject.temp_mois_2015.juin = {};
        myObject.temp_mois_2015.juin.min = 11.1;
        myObject.temp_mois_2015.juin.max = 24.3;
        myObject.temp_mois_2015.juillet = {};
        myObject.temp_mois_2015.juillet.min = 14.2;
        myObject.temp_mois_2015.juillet.max = 28.5;
        myObject.temp_mois_2015.aout = {};
        myObject.temp_mois_2015.aout.min = 12.2;
        myObject.temp_mois_2015.aout.max = 24.6;
        myObject.temp_mois_2015.septembre = {};
        myObject.temp_mois_2015.septembre.min = 7.5;
        myObject.temp_mois_2015.septembre.max = 18.1;
        myObject.temp_mois_2015.octobre = {};
        myObject.temp_mois_2015.octobre.min = 4.7;
        myObject.temp_mois_2015.octobre.max = 15.2;
        myObject.temp_mois_2015.novembre = {};
        myObject.temp_mois_2015.novembre.min = 3.1;
        myObject.temp_mois_2015.novembre.max = 12.2;
        myObject.temp_mois_2015.decembre = {};
        myObject.temp_mois_2015.decembre.min = 2.4;
        myObject.temp_mois_2015.decembre.max = 10.7;

        // Génération des données de production mensuelles (2015):

        myObject.prod_mensuelle_2015 = {}
        myObject.prod_mensuelle_2015.janvier = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.fevrier = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.mars = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.avril = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.mai = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.juin = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.juillet = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.aout = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.septembre = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.octobre = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.novembre = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2015.decembre = (Math.random() * 10 + 1).toFixed(2);


        myObject.conso_mensuelle_2016 = {};
        myObject.conso_mensuelle_2016.janvier = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.fevrier = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.mars = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.avril = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.mai = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.juin = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.juillet = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.aout = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.septembre = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.octobre = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.novembre = (Math.random() * 100 + 1).toFixed(2);
        myObject.conso_mensuelle_2016.decembre = (Math.random() * 100 + 1).toFixed(2);


        myObject.temp_mois_2016 = {};
        myObject.temp_mois_2016.janvier = {};
        myObject.temp_mois_2016.janvier.min = 0;
        myObject.temp_mois_2016.janvier.max = 6.6;
        myObject.temp_mois_2016.fevrier = {};
        myObject.temp_mois_2016.fevrier.min = 0.3;
        myObject.temp_mois_2016.fevrier.max = 6.6;
        myObject.temp_mois_2016.mars = {};
        myObject.temp_mois_2016.mars.min = 0;
        myObject.temp_mois_2016.mars.max = 8.5;
        myObject.temp_mois_2016.avril = {};
        myObject.temp_mois_2016.avril.min = 3.3;
        myObject.temp_mois_2016.avril.max = 12.3;
        myObject.temp_mois_2016.mai = {};
        myObject.temp_mois_2016.mai.min = 5.8;
        myObject.temp_mois_2016.mai.max = 15.6;
        myObject.temp_mois_2016.juin = {};
        myObject.temp_mois_2016.juin.min = 10.1;
        myObject.temp_mois_2016.juin.max = 20.7;
        myObject.temp_mois_2016.juillet = {};
        myObject.temp_mois_2016.juillet.min = 11.9;
        myObject.temp_mois_2016.juillet.max = 25.6;
        myObject.temp_mois_2016.aout = {};
        myObject.temp_mois_2016.aout.min = 11.4;
        myObject.temp_mois_2016.aout.max = 25.8;
        myObject.temp_mois_2016.septembre = {};
        myObject.temp_mois_2016.septembre.min = 10.1;
        myObject.temp_mois_2016.septembre.max = 22.1;
        myObject.temp_mois_2016.octobre = {};
        myObject.temp_mois_2016.octobre.min = 5;
        myObject.temp_mois_2016.octobre.max = 14.3;
        myObject.temp_mois_2016.novembre = {};
        myObject.temp_mois_2016.novembre.min = 2.2;
        myObject.temp_mois_2016.novembre.max = 9.1;
        myObject.temp_mois_2016.decembre = {};
        myObject.temp_mois_2016.decembre.min = 0.9;
        myObject.temp_mois_2016.decembre.max = 10;


        myObject.prod_mensuelle_2016 = {}
        myObject.prod_mensuelle_2016.janvier = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.fevrier = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.mars = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.avril = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.mai = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.juin = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.juillet = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.aout = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.septembre = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.octobre = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.novembre = (Math.random() * 10 + 1).toFixed(2);
        myObject.prod_mensuelle_2016.decembre = (Math.random() * 10 + 1).toFixed(2);

        var myString = JSON.stringify(myObject);
        console.log(myString);
    });


// Bonus : Algorythme de récupération de données via le fichier JSON fourni (pas utilisé).
// var consoTotale = 0;
// var prodTotale = 0;
// var name = "";
// var annee = "";
// $.getJSON('jsonconso.json', function(data) {
//     $.each(data, function(key, val) {
//             if (val.fields.nom_commune == "Mende" && val.fields.annee == 2015) {
//             // console.log(val);
//             name = val.fields.nom_commune
//             annee = val.fields.annee
//             var residentiel = val.fields.conso_totale_secteur_residentiel_enedis_mwh;
//             if (residentiel) {
//                 consoTotale += residentiel;
//             }
//             var agriculture = val.fields.conso_totale_agriculture_enedis_mwh;
//             if (agriculture) {
//                 consoTotale += agriculture;
//             }
//             var industrie = val.fields.conso_totale_industrie_enedis_mwh;
//             if (industrie) {
//                 consoTotale += industrie;
//             }
//             var nonAffecte = val.fields.conso_totale_secteur_non_affecte_enedis_mwh;
//             if (nonAffecte) {
//                 consoTotale += nonAffecte;
//             }
//             var tertiaire = val.fields.conso_totale_tertiaire_enedis_mwh;
//             if (tertiaire) {
//                 consoTotale += tertiaire;
//             }
//         }
//
//     });
//     $.getJSON('jsonprod.json', function(data) {
//         $.each(data, function(key, val) {
//             if (val.fields.nom_commune == "Saint-Chély-d'Apcher" && val.fields.annee == 2015) {
//                 var autre = val.fields.energie_produite_annuelle_autres_filieres_enedis_mwh;
//                 if (autre) {
//                     prodTotale += autre
//                 }
//                 var bio = val.fields.energie_produite_annuelle_bio_energie_enedis_mwh;
//                 if (bio) {
//                     prodTotale += bio
//                 }
//                 var cogen = val.fields.energie_produite_annuelle_cogeneration_enedis_mwh;
//                 if (cogen) {
//                     prodTotale += cogen
//                 }
//                 var eolien = val.fields.energie_produite_annuelle_eolien_enedis_mwh;
//                 if (eolien) {
//                     prodTotale += eolien
//                 }
//                 var hydro = val.fields.energie_produite_annuelle_hydraulique_enedis_mwh;
//                 if (hydro) {
//                     prodTotale += hydro
//                 }
//                 var photovolt = val.fields.energie_produite_annuelle_photovoltaique_enedis_mwh;
//                 if (photovolt) {
//                     prodTotale += photovolt
//                 }
//             }
//         });
// });
