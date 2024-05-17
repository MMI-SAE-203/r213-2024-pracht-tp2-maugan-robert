<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import  MaisonRecord  from "@/pocketbase-types";
const props = defineProps<MaisonRecord>();
import MaisonCard from "@/components/MaisonCard.vue";

const maisonsListe: MaisonRecord[] = [
  {
    "adresse": "45 rue de la prout",
    "collectionId": "b7s69haqbtq9wjx",
    "collectionName": "Maison",
    "created": "2024-04-12 06:43:01.302Z",
    "favoris": false,
    "id": "4ew5sdfucd021y0",
    "image": "116092_1_P6lOvBviZr.jpg",
    "nbChambres": 4,
    "nbSdb": 2,
    "nomMaison": "Home Caca",
    "prix": 80000,
    "surface": 105,
    "updated": "2024-05-03 06:36:16.371Z"
  },
  {
    "adresse": "78 impasse des lavandes",
    "collectionId": "b7s69haqbtq9wjx",
    "collectionName": "Maison",
    "created": "2024-04-12 06:44:50.614Z",
    "favoris": true,
    "id": "fubs9pkbzxf23n5",
    "image": "maisons_modernes_modeles_plans_amenagement_IKnnsM08P5.jpg",
    "nbChambres": 5,
    "nbSdb": 2,
    "nomMaison": "Villa St pierre",
    "prix": 250000,
    "surface": 215,
    "updated": "2024-05-03 06:35:45.456Z"
  },
  {
    "adresse": "7 route de l'avalanche",
    "collectionId": "b7s69haqbtq9wjx",
    "collectionName": "Maison",
    "created": "2024-04-12 06:54:04.858Z",
    "favoris": false,
    "id": "qst30x62zp3gz4d",
    "image": "https_proprietes_lefigaro_fr_images_pdf_cms_actualites_97502308_1455039000_84_vYaFEzVVGs.jpg",
    "nbChambres": 4,
    "nbSdb": 1,
    "nomMaison": "Chalet Chamonix",
    "prix": 450000,
    "surface": 284,
    "updated": "2024-04-12 06:54:04.858Z"
  },
  {
    "adresse": "50 Impasse de la diadia",
    "collectionId": "b7s69haqbtq9wjx",
    "collectionName": "Maison",
    "created": "2024-04-12 06:55:12.742Z",
    "favoris": true,
    "id": "bnkhxxan2a0jn83",
    "image": "extension_reamenagement_d_une_maison_m_associes_architectes_img_03f1163e0f76db26_14_1762_1_646c429_2V0V1KAXp5.jpg",
    "nbChambres": 3,
    "nbSdb": 1,
    "nomMaison": "Maison de Campagne",
    "prix": 120000,
    "surface": 90,
    "updated": "2024-04-12 06:55:51.943Z"
  },
  {
    "adresse": "75 Boulevard de Venom",
    "collectionId": "b7s69haqbtq9wjx",
    "collectionName": "Maison",
    "created": "2024-04-12 06:56:49.483Z",
    "favoris": false,
    "id": "lr440d5crzg7adc",
    "image": "la_maison_1_1800x1201_q90_2VCxn1gADz.jpg",
    "nbChambres": 4,
    "nbSdb": 3,
    "nomMaison": "Appartement de luxe - Paris",
    "prix": 350000,
    "surface": 213,
    "updated": "2024-04-12 06:57:52.102Z"
  }
]
console.log(maisonsListe);

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
    <MaisonCard v-bind="maisonsListe[0]"/>
</template>
