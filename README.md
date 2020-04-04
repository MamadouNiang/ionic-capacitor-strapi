 # ionic-capacitor-strapi 
 Bonjour,

    
# PLAN

    * Introduction
    * Prérequis
    * Utilisations
    * Tests
    * Conclusion

# Introduction
    Dans le cadre de cet exercice, nous allons poursuivre la réalisation de notre travail pratique sur 
    la création d’une application mobile pour la gestion des commandes de déjeuner dans une entreprise.
    Afin de poursuivre le développement et d’avoir un MVP (Minimum Valuable Product), on se propose 
    d’ajouter les fonctionnalités à l’application :
    a. Deux profils vont exister, administrateur et employé.
    b. Permettre à l’administrateur de définir le menu du jour en précisant   les plats du jour.
    c. Permettre aux employés de passer leur commande et à l’administrateur de voir les commandes du jour.
    d. Permettre à un utilisateur connecté (administrateur ou employé) de modifier les informations 
    de son profil. 
        Pour cela, nous ajouterons les champs suivants au compte utilisateur :
         nom, prénom, adresse, numéro téléphone et une photo de profil.
    e. Permettre à l’utilisateur de modifier sa photo en utilisant la caméra du téléphone.
    f. Ajouter la fonctionnalité de réinitialisation de mot de passe.

# Prerequis
    
    1. telecharger le dossiers en zip
    2. extraire le fichiers 
        Dans le dossiers on a un fichier et 2 dossiers:
        a. un fichier
            1. app-debug:     le build de l'application finale
  
        b. Les 2 dossiers:
            1. resto :        dossiers ionic
            2. resto_strapi : dossiers strapi

    1. Pour commencer avec Ionic Framework, la seule exigence est un environnement Node & npm
   > [Node.js](https://nodejs.org/en/).
        
        Pour vérifier l'installation, ouvrez une nouvelle fenêtre de terminal et exécutez:
        * node --version
        * npm --version

    2. Installez l'Ionic CLI avec npm:
        se placer dans le dossiers resto puis tapez les 2 commandes:
        * npm uninstall -g ionic
        * npm install -g @ionic/cli

    3. Rendez vous dans le dossiers resto sur un terminal et tapez:
        * ionic serve

         si vous avez des erreurs de modules(packages) manquants veuillez les installer comme suis:
         les packages necessaires sont : 
![image](/img/ngV.PNG)

        *npm install nom_package
            exemple: 
            * npm install @angular-devkit/build-angular

