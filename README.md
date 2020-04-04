 # ionic-capacitor-strapi 
 Bonjour,

    
# PLAN

    * Introduction
    * Prérequis
    * Utilisations
    * Déploiement
    * Tests
    * Conclusion

# A. Introduction
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

# B. Prerequis
    
    1. telecharger le dossiers en zip
    2. extraire le fichiers 
        Dans le dossiers on a un fichier et 2 dossiers:
        a. un fichier
            1. app-debug:     le build de l'application finale
  
        b. Les 2 dossiers:
            1. resto :        dossiers ionic
            2. resto_strapi : dossiers strapi

    3. Pour commencer avec Ionic Framework, la seule exigence est un environnement Node & npm
   > [node.exe](https://nodejs.org/en/).
        
        Pour vérifier l'installation, ouvrez une nouvelle fenêtre de terminal et exécutez:
        * node --version
        * npm --version
   > ![image](/img/vv.PNG)

    4. Installez l'Ionic CLI avec npm:
        se placer dans le dossiers resto puis tapez les 2 commandes:
        * npm uninstall -g ionic
        * npm install -g @ionic/cli
  > ![ionic](/img/io.PNG)
  
    5. installer yarn pour le lancement de strapi;
  > [yarn.exe](https://classic.yarnpkg.com/latest.msi)
  
    6. Se placer dans le dossiers resto  puis tapez la commande et laisser telecharger:
        * npm install  **peut prendre plusieurs minutes**
        * ionic serve ou 
        * ionic serve --lab
   > ![server](/img/s.PNG) 
   > ![server](/img/ss.PNG)
        
    7. Se placer dans le dossiers resto_strapi puis tapez la commande et laisser telecharger:
        * npm install  **peut prendre plusieurs minutes**
        * yarn develop
  > ![image](/img/yarn.PNG)
        
        vous serez directement rediriger vers http://localhost:1337/admin/auth/register et creer 
        un adminstrateur pour les taches suivantes.

        Apres le lancemet du frontend ionic et la creation d'un administrateur pour la gesion de strapi
        nous passons dans la 2im partie qui est l'utilisation.
        
# C. Utilisation 
  ## a. Utiliser le fichier .apk
    Dans cette partie si vous avez un telephone ou un similateur d'android on peut directement tester le build
    de l'application qui est le fichier app-debug.apk
    
    1. Apres B. 7. c'est a dire la creation d'un administrateur nous allons creer un role administrateur et employer
      
      nous aurrons juste a creer le role administrateur car employe nous allons considerer comme etant authenticated
      et autoriser toute les permissions a l'admintrateur dans permission.
 > ![image](/img/ad.PNG)      
 
    2.le fichier app-debug.apk est builder avec l'adresse ip : 192.168.1.2
      donc pour l'utilisation directe du fichier .apk veillez fixer l'adresse ip de votre machine ou tourne
      votre strapi a l'adresse ip suivant : 192.168.1.2
      
      NB: avant de lancer le fichier apk sur votre mobile assurer que l'api est deja lancer
          desactiver l'antivurus ou parfeux qui peuvent bloquer pas l'acces a strapi
          
    3.lancer l'application sur android
![image | 100x100,1%](/img/2.jpg )  
      
  ## b. Utiliser un navigateur web
     Dans cette partie on a juste nous allons utiliser un navigateur pour lancer l'application
     aller dans le dossiers resto -> src -> environement -> environement.ts
     changer 192.168.1.2 par votre adresse ip sur le quel tourne votre serveur api(strapi) et sauvegarder
![image](/img/adr.PNG ) 

     1. lancer ionic serve dans le dossiers resto
     2. lancer yarn develop dans le dossiers resto_strapi
![image](/img/t1.PNG ) 
![image](/img/t2.PNG ) 
![image](/img/t3.PNG ) 
![image](/img/t4.PNG )
![image](/img/t5.PNG )
 
 # D. Déploiement
     1.prerequis : android studio 
   [android_studio.exe](https://redirector.gvt1.com/edgedl/android/studio/install/3.6.2.0/android-studio-ide-192.6308749-windows.exe)
     
     2. se rendre dans le dossiers resto et tapez les commandes
     * ionic integrations enable capacitor
     * ionic build
     * ionic capacitor add android
     * npx cap copy
     
     apres une MAJ de notre code on a juste a retaper
     *ionic build
     *npc cap copy
     
     3. ouvrir android studio et importer le dossiers resto 
        faites une snchronisation avec gradles
        Run l'appli si vous avez un AVD
        sinon Build l'appli 
        
 # E. Tests
 
 
      
      
      
