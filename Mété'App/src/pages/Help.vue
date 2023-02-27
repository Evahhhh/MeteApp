<template>
  <div class="pageHelp">
    <h1>Page d'aide</h1>

    <p>
      Cette page vous explique comment fonctionne l'application `Mété' App`.<br />
      Vous pouvez rechercher la météo d'une ville en tapant son nom dans la
      barre de recherche.<br />
      Ensuite, appuyez sur le bouton `Rechercher` pour afficher la météo de la
      ville sélectionnée.<br />
      Les informations affichées permettent de connaître la météo de la ville
      sélectionnée pour les 5 prochains jours.<br />
    </p>

    <p>
      Pour tout autre information et requête, vous pouvez nous contacter via le
      formulaire de la page
      <router-link class="btn-txt" to="/contact">Contact</router-link>
      .<br />
    </p>
  </div>
</template>

<style scoped>
.pageHelp {
  color: black;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px;
}

h1 {
  font-weight: bold;
}
.btn-txt {
  color: #cf8e80;
  cursor: pointer;
}
</style>
