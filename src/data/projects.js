const projects = [{
    id: 1,
    title: 'Field track (en cours)',
    category: 'Application web',
    img: require('@/assets/images/web-project-2.jpg'),

    // --- Single Project Data ---
    header: {
        singleProjectTitle: 'Field track (en cours)',
        singleProjectDate: 'Octobre 2025 - Juin 2026',
        singleProjectTag: 'Application web',
    },

    images: [/*{
        id: 1, title: 'Google Health UI', img: require('@/assets/images/ui-project-1.jpg'),
    }, {
        id: 2, title: 'Preview', img: require('@/assets/images/web-project-2.jpg'),
    }, {
        id: 3, title: 'Dashboard', img: require('@/assets/images/mobile-project-2.jpg'),
    },*/],

    info: {
        clientHeading: 'A propos',
        companyInfos: [{id: 1, title: 'Type', details: 'Projet universitaire'}, {
            id: 2, title: 'Equipe', details: '5 personnes'
        },],

        objectivesHeading: 'Objectifs',
        objectivesDetails: "Développer une application IoT/IA dans le but de récupérer et traiter des informations sur un champ cultivé afin de prédire les récoltes et avertir de divers risques",

        technologies: [{
            title: 'Langages et outils utilisés',
            techs: ['Java', 'NodeJS', 'Express', 'Vue.js', 'Python', 'sklearn', 'openCV', 'MongoDB', 'Gitlab CI/CD', 'Docker'],
        },],

        projectDetailsHeading: 'Résumé',
        projectDetails: [{
            id: 1, details: `
      <h3>Micro-contrôleurs et acquisition de données</h3>
      <p>
        Des micro-contrôleurs équipés de capteurs (taux d’azote, humidité du sol, température, luminosité, etc.)
        sont déployés sur le terrain. Ils mesurent périodiquement ces paramètres et envoient les paquets de
        mesures à un point d’entrée central.
      </p>
      <p>
        Ces données servent de base aux traitements en aval et permettent un suivi fin des conditions de culture.
      </p>
    `,
        }, {
            id: 2, details: `
      <h3>Serveur TCP multi-thread (Java)</h3>
      <p>
        Un serveur TCP écrit en Java, conçu pour être multi-thread, reçoit simultanément les flux de plusieurs
        micro-contrôleurs. Il assure la validation et la structuration des paquets avant leur transmission au
        backend.
      </p>
      <p>
        Le serveur relaie ensuite les données vers l’API REST afin qu’elles soient historisées et exploitées.
      </p>
    `,
        }, {
            id: 3, details: `
      <h3>API REST (Node.js + Express)</h3>
      <p>
        L’API REST, développée avec Node.js et Express, expose des endpoints pour stocker et accéder aux données.
        Elle orchestre aussi l’appel à des scripts d’IA en Python pour effectuer des traitements avancés.
      </p>
      <p>
        Ces traitements incluent la prédiction de rendements, la détection de stress hydrique et l’identification
        d’anomalies impactant les cultures.
      </p>
    `,
        }, {
            id: 4, details: `
      <h3>Serveur d’analyse multimédia (Python)</h3>
      <p>
        Un serveur Python spécialisé analyse les images des cultures. Grâce à des modèles de vision par ordinateur,
        il détecte signes de maladies, parasites ou dégâts climatiques, et génère des métadonnées exploitables.
      </p>
      <p>
        Les résultats de ces analyses alimentent les alertes et les rapports disponibles dans l’interface.
      </p>
    `,
        }, {
            id: 5, details: `
      <h3>Stockage des données</h3>
      <p>
        L’ensemble des mesures, prédictions, images et alertes est stocké dans une base MongoDB choisie pour sa
        souplesse face à des schémas hétérogènes et pour sa capacité à monter en charge.
      </p>
      <p>
        Ce stockage centralisé facilite la corrélation entre séries temporelles et résultats d’analyse.
      </p>
    `,
        }, {
            id: 6, details: `
      <h3>Dashboard utilisateur (Vue.js)</h3>
      <p>
        Le point d’entrée est un dashboard moderne réalisé en Vue.js. Il affiche graphiques temporels, cartes et
        indicateurs synthétiques pour suivre l’état des cultures.
      </p>
      <p>
        L’interface permet de lancer des rapports IA, d’obtenir des estimations de rendement, de consulter les
        images analysées et de gérer les alertes depuis un seul panneau.
      </p>
    `,
        },],


        /*socialSharingsHeading: 'Share This',
        socialSharings: [{id: 1, name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/'}, {
            id: 2,
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com/'
        }, {id: 3, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/'}, {
            id: 4,
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/'
        }, {id: 5, name: 'Youtube', icon: 'youtube', url: 'https://youtube.com/'},],*/
    },

    related: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [{id: 3, title: 'Project Management UI', img: '/assets/images/ui-project-1.jpg'}, {
            id: 4, title: 'Cloud Platform', img: '/assets/images/ui-project-2.jpg'
        }]
    },

}, {
    id: 2, title: 'Site web évènementiel', category: 'Application web', img: require('@/assets/images/fdt-1.png'),

    // --- Single Project Data ---
    header: {
        singleProjectTitle: 'Site Web évènementiel',
        singleProjectDate: 'Septembre 2024 - Janvier 2025',
        singleProjectTag: 'Application web',
    },

    images: [{
        id: 1, title: 'Accueil', img: require('@/assets/images/fdt-1.png'),
    }, {
        id: 2, title: 'Boutique', img: require('@/assets/images/fdt-2.png'),
    }, {
        id: 3, title: 'Carte interactive', img: require('@/assets/images/fdt-3.png'),
    },],

    info: {
        clientHeading: 'A propos',
        companyInfos: [{id: 1, title: 'Type', details: 'Projet universitaire'}, {
            id: 2, title: 'Equipe', details: '5 personnes'
        },],

        objectivesHeading: 'Objectifs',
        objectivesDetails: "Développer un site web évènementiel présentant 'la fête du tracteur'",

        technologies: [{
            title: 'Langages et outils utilisés', techs: ['NodeJS', 'Express', 'VueJS', 'PostgresSQL'],
        },],

        projectDetailsHeading: 'Résumé',
        projectDetails: [{
            id: 1, details: `
      <h3>Présentation du site</h3>
      <p>
        Le site web de La Fête du Tracteur a été conçu pour offrir une expérience complète et immersive 
        autour de cet évènement annuel rassemblant passionnés, familles et professionnels. Réalisé avec 
        Vue.js, il présente l’évènement, facilite l’organisation des activités proposées sur place et 
        accompagne chaque type d’utilisateur grâce à des espaces dédiés.
      </p>
    `
        }, {
            id: 2, details: `
      <h3>Visiteurs</h3>
      <p>
        Le site propose aux visiteurs une navigation claire permettant de :
      </p>
      <ul>
        <li>Parcourir les différentes activités, animations et démonstrations organisées pendant la journée.</li>
        <li>S’inscrire facilement aux activités proposées par les prestataires.</li>
        <li>Commander en ligne des goodies officiels ou réserver un repas à consommer sur place.</li>
        <li>Composer et consulter un planning personnalisé, afin de planifier leur journée selon leurs centres d’intérêt.</li>
        <li>Accéder aux informations pratiques : horaires, lieux, tarifs, plan de l’évènement, etc.</li>
      </ul>
    `
        }, {
            id: 3, details: `
      <h3>Prestataires</h3>
      <p>
        Les prestataires disposent d’un espace dédié leur permettant de :
      </p>
      <ul>
        <li>Présenter leurs activités de manière détaillée (description, horaires, capacité, matériel utilisé…)</li>
        <li>Mettre à jour les informations affichées sur le site en toute autonomie.</li>
        <li>Suivre en temps réel les inscriptions des visiteurs à leurs activités.</li>
        <li>Valoriser leur participation à l'événement à travers une mise en avant structurée.</li>
      </ul>
    `
        }, {
            id: 4, details: `
      <h3>Organisateurs</h3>
      <p>
        Les organisateurs bénéficient d’outils d’administration leur donnant la possibilité de :
      </p>
      <ul>
        <li>Gérer les inscriptions au défilé de tracteurs, moment phare de l'évènement.</li>
        <li>Ajouter, modifier ou supprimer les articles disponibles dans la boutique officielle.</li>
        <li>Superviser l’ensemble du contenu du site : activités, prestataires, commandes, inscriptions…</li>
        <li>Assurer la cohérence globale de l’évènement grâce à une gestion centralisée.</li>
      </ul>
    `
        }, {
            id: 5, details: `
      <h3>Architecture technique</h3>
      <p>
        La plateforme repose sur une API REST Node.js/Express connectée à une base PostgreSQL, garantissant 
        une communication fluide entre le front-end et les données, ainsi qu’une gestion fiable et évolutive 
        des différentes fonctionnalités.
      </p>
    `
        }],

        /*socialSharingsHeading: 'Share This',
        socialSharings: [{id: 1, name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/'}, {
            id: 2,
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com/'
        }, {id: 3, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/'}, {
            id: 4,
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/'
        }, {id: 5, name: 'Youtube', icon: 'youtube', url: 'https://youtube.com/'},],*/
    },

    related: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [{id: 3, title: 'Project Management UI', img: '/assets/images/ui-project-1.jpg'}, {
            id: 4, title: 'Cloud Platform', img: '/assets/images/ui-project-2.jpg'
        }]
    },

},

    {
        id: 3,
        title: "Modernisation et virtualisation d'un serveur",
        category: 'Système et réseau',
        img: require('@/assets/images/serveur.png'),

        // --- Single Project Data ---
        header: {
            singleProjectTitle: "Modernisation et Virtualisation de l'Infrastructure Informatique pour une Entreprise",
            singleProjectDate: 'Octobre 2025 - Juin 2026',
            singleProjectTag: 'Système et réseau',
        },

        images: [/*{
            id: 1, title: 'Google Health UI', img: require('@/assets/images/ui-project-1.jpg'),
        }, {
            id: 2, title: 'Preview', img: require('@/assets/images/web-project-2.jpg'),
        }, {
            id: 3, title: 'Dashboard', img: require('@/assets/images/mobile-project-2.jpg'),
        },*/],

        info: {
            clientHeading: 'A propos',
            companyInfos: [{id: 1, title: 'Type', details: 'Projet stage'}, {
                id: 2, title: 'Entreprise', details: 'Idinfo'
            },],

            objectivesHeading: 'Objectifs',
            objectivesDetails: "Remplacer l’ancien serveur vieillissant par un nouveau et remplacer d’anciens postes incompatibles Windows 11",

            technologies: [{
                title: 'Langages et outils utilisés', techs: ['Windows Server', 'PowerShell'],
            },],

            projectDetailsHeading: 'Résumé',
            projectDetails: [{
                id: 1, details: `
      <h3>Modernisation de l'Infrastructure Informatique</h3>
      <p>
        Cette intervention consiste à réaliser deux choses : remplacer l’ancien serveur vieillissant et mettre à niveau les postes de travail incompatibles avec Windows 11.
      </p>
    `
            }, {
                id: 2, details: `
      <h3>Remplacement du serveur</h3>
      <p>
        Le client utilise deux logiciels métiers nécessitant un serveur :
      </p>
      <ul>
        <li><strong>Everwin GX</strong> : ERP nécessitant un backend applicatif et une base de données.</li>
        <li><strong>Sage 100</strong> : logiciel de comptabilité nécessitant seulement une base de données.</li>
      </ul>
      <p>
        Un Active Directory est également nécessaire pour gérer les utilisateurs, groupes et droits, et permettre l’accès aux lecteurs réseau.
      </p>
      <p>
        Avant l’intervention, l’entreprise disposait de deux serveurs :
      </p>
      <ul>
        <li>Serveur actuel (2012)</li>
        <li>Ancien serveur (~2000)</li>
      </ul>
      <p>
        Le serveur actuel dépendait encore de l’ancien serveur à cause d’une migration Active Directory mal réalisée. Aucune virtualisation n’était utilisée : Active Directory, backend applicatif et serveur SQL étaient installés directement sur la machine physique.
      </p>
    `
            }, {
                id: 3, details: `
      <h3>Configuration du nouveau serveur</h3>
      <p>
        Le nouveau serveur est organisé autour de plusieurs machines virtuelles Hyper-V :
      </p>
      <ul>
        <li>SRV-AD : VM pour Active Directory</li>
        <li>SRV-APP : VM pour la partie applicative</li>
        <li>SRV-SQL : VM pour la base de données</li>
        <li>SRV-OLD : VM pour l’ancien serveur en lecture seule</li>
      </ul>
      <p>
        Cette organisation permet une forte résilience : si une VM est corrompue, les autres continuent de fonctionner, limitant l’impact sur le réseau et les services.
      </p>
      <p>
        Le serveur utilise une configuration RAID 5, permettant la continuité du service même si un disque tombe en panne.
      </p>
      <img src="/portfolio/images/raid5.png" alt="Switches dispersés" class="w-[80%] h-auto rounded shadow">
      
    `
            }, {
                id: 4, details: `
      <h3>Mise à niveau des postes de travail</h3>
      <p>
        Le client avait besoin sur les postes des éléments suivants :
      </p>
      <ul>
        <li>Suite Microsoft Office</li>
        <li>Accès aux lecteurs réseau via Active Directory</li>
        <li>Logiciels métiers : Everwin GX et Sage 100 (quelques postes seulement)</li>
      </ul>
      <p>
        Les nouveaux postes reprennent la configuration des anciens, avec un matériel plus récent compatible Windows 11 et plus performant.
      </p>
      <p>
        La migration des anciens postes vers les nouveaux inclut le transfert des fichiers et la réinstallation des logiciels métiers. Les lecteurs communs et imprimantes sont déployés automatiquement via GPO.
      </p>
      <p>
        Une nouvelle nomenclature standardisée a été adoptée pour les postes : PC-FXX (PC-Fixe-numéro) comme PC-F01, PC-F02, etc., remplaçant les noms chaotiques précédents.
      </p>
    `
            }, {
                id: 5, details: `
      <h3>Architecture globale</h3>
      <p>
        L’ensemble de ces évolutions permet une infrastructure claire, stable et évolutive. Grâce à la virtualisation et à la réorganisation des services, l’entreprise dispose d’un système moderne, fiable et facile à administrer.
      </p><img src="/portfolio/images/balossi-schema.png" alt="Switches dispersés" class="w-[100%] h-auto rounded shadow">
      
    `
            }]





            /*socialSharingsHeading: 'Share This',
            socialSharings: [{id: 1, name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/'}, {
                id: 2,
                name: 'Instagram',
                icon: 'instagram',
                url: 'https://instagram.com/'
            }, {id: 3, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/'}, {
                id: 4,
                name: 'LinkedIn',
                icon: 'linkedin',
                url: 'https://linkedin.com/'
            }, {id: 5, name: 'Youtube', icon: 'youtube', url: 'https://youtube.com/'},],*/
        },

        related: {
            relatedProjectsHeading: 'En rapport',
            relatedProjects: [{id: 4, title: "Installation baie et serveur", img: '/portfolio/images/jacquemin-4.jpg'},]
        },
    }, {
        id: 4,
        title: 'Installation Baie & Serveur',
        category: 'Système et réseau',
        img: require('@/assets/images/jacquemin-4.jpg'), // à remplacer plus tard

        // --- Single Project Data ---
        header: {
            singleProjectTitle: "Installation d'une baie informatique en entreprise",
            singleProjectDate: 'Mars 2025 - Avril 2025',
            singleProjectTag: 'Système et réseau',
        },

        images: [/*{
            id: 1, title: 'Google Health UI', img: require('@/assets/images/jacquemin-4.jpg'),
        },*/ /*{
            id: 2, title: 'Preview', img: require('@/assets/images/jacquemin-baie-schema.png'),
        }, {
            id: 3, title: 'Dashboard', img: require('@/assets/images/jacquemin-schema.png'),
        }*/],

        info: {
            clientHeading: 'A propos',
            companyInfos: [{id: 1, title: 'Type', details: 'Projet stage'}, {
                id: 2, title: 'Entreprise', details: 'Idinfo'
            },],

            objectivesHeading: 'Objectifs',
            objectivesDetails: "Ordonner et sécuriser le réseau informatique de l’entreprise, moderniser le serveur et améliorer la gestion des actifs réseaux.",

            technologies: [{
                title: 'Langages et outils utilisés',
                techs: ['Unifi UDM-PRO', 'Switch USW-24', 'Baie 12U', 'RDP', 'Hyper-V']
            },],

            projectDetailsHeading: 'Résumé',
            projectDetails: [{
                id: 1, details: `
      <h3>Modernisation et Sécurisation du Réseau Informatique</h3>
      <p>
        Le but premier de cette intervention est d’ordonner et de sécuriser le réseau informatique de l’entreprise. Les actifs réseaux présents avant l'intervention étaient installés de manière chaotique. Le serveur a également été modernisé.
      </p>
    `
            }, {
                id: 2, details: `
      <h3>Inventaire des actifs réseaux avant intervention</h3>
      <p>L’entreprise disposait des actifs suivants :</p>
      <ul>
        <li>2 routeurs opérateurs (1 pour la télégestion)</li>
        <li>1 tiroir optique (liaison vers un autre bâtiment)</li>
        <li>1 convertisseur fibre optique vers Ethernet</li>
        <li>1 NVR (Network Video Recorder)</li>
        <li>Plusieurs switches de bureau</li>
        <li>1 point d’accès wifi de bureau</li>
      </ul>
      <p>L’organisation de ces actifs était chaotique :</p>
      <div class="flex justify-between my-4 gap-4">
  <img src="/portfolio/images/jacquemin-1.jpg" alt="Actifs réseaux avant" class="w-[32%] h-auto rounded shadow">
  <img src="/portfolio/images/jacquemin-2.jpg" alt="Câbles non repérés" class="w-[32%] h-auto rounded shadow">
  <img src="/portfolio/images/jacquemin-3.jpg" alt="Switches dispersés" class="w-[32%] h-auto rounded shadow">
</div>


    `
            }, {
                id: 3, details: `
      <h3>Actifs réseaux ajoutés ou remplacés</h3>
      <ul>
        <li>Passerelle Unifi UDM-PRO avec pare-feu managable à distance</li>
        <li>Switch Unifi USW-24, remplaçant les petits switches dispersés</li>
        <li>Point d'accès Unifi pour remplacer le wifi existant</li>
        <li>Baie 12U</li>
        <li>Bandeau de prises PDU</li>
        <li>Plateau pour les actifs non rackables</li>
        <li>Panneau de brassage</li>
        <li>Organisateur de câble</li>
        <li>Onduleur pour protéger les équipements</li>
      </ul>
      <p>Après la pose, les actifs sont organisés proprement dans la baie :</p>
      
      <img src="/portfolio/images/jacquemin-4.jpg" alt="Baie informatique après pose" class="my-4 rounded shadow" style="width: 50%"/>
      <img src="/portfolio/images/jacquemin-baie-schema.png" alt="Schéma détaillé de la baie" class="my-4 rounded shadow" />
    `
            }, {
                id: 4, details: `
      <h3>Remplacement et modernisation du serveur</h3>
      <p>
        Le serveur physique a été modernisé et l’architecture est la suivante :
      </p>
      <ul>
        <li>Serveur physique pour Active Directory et données</li>
        <li>Machine virtuelle pour le logiciel AMOS</li>
      </ul>
      <p>
        Les utilisateurs se connectent au serveur via RDP pour utiliser le logiciel directement.
      </p>
    `
            }, {
                id: 5, details: `
      <h3>Architecture globale</h3>
      <p>
        L’ensemble de ces interventions permet d’obtenir une infrastructure claire, sécurisée et facilement administrable.
      </p>
      <img src="/portfolio/images/jacquemin-schema.png" alt="Architecture globale réseau" class="my-4 rounded shadow" />
    `
            }]

        },

        related: {
            relatedProjectsHeading: 'En rapport', relatedProjects: [{
                id: 3, title: "Modernisation et virtualisation d'un serveur", img: '/portfolio/images/serveur.png'
            },]
        },
    }, {
        id: 5,
        title: "Développement d'un formateur de clé usb",
        category: 'Application',
        img: require('../../public/images/script.png'), // à remplacer plus tard

        // --- Single Project Data ---
        header: {
            singleProjectTitle: "Création d'une Application PowerShell pour la préparation de clés USB",
            singleProjectDate: 'Avril 2025',
            singleProjectTag: 'Application',
        },

        images: [/*{
            id: 1, title: 'Google Health UI', img: require('@/assets/images/jacquemin-4.jpg'),
        },*/ /*{
            id: 2, title: 'Preview', img: require('@/assets/images/jacquemin-baie-schema.png'),
        }, {
            id: 3, title: 'Dashboard', img: require('@/assets/images/jacquemin-schema.png'),
        }*/],

        info: {
            clientHeading: 'A propos',
            companyInfos: [{id: 1, title: 'Type', details: 'Projet stage'}, {
                id: 2, title: 'Entreprise', details: 'Idinfo'
            },],

            objectivesHeading: 'Objectifs',
            objectivesDetails: "Automatiser la préparation de nombreuses clés USB à l’aide d’un script capable de tout gérer en un clic : formatage, copie des fichiers, attribution des droits et configuration esthétique.",

            technologies: [{
                title: 'Langages et outils utilisés', techs: ['PowerShell', 'WinForms', 'DiskPart', 'NTFS'],
            },],

            projectDetailsHeading: 'Résumé',
            projectDetails: [{
                id: 1, details: `
        <h3>1. Origine du script</h3>
        <p>
          Un client devait distribuer environ cinquante clés USB contenant des fichiers qui ne devaient 
          pas pouvoir être supprimés. Les étapes manuelles étaient longues et répétitives : 
          formatage, copie des fichiers, configuration d’une icône, et application des droits NTFS. 
          Pour éviter toute erreur et gagner du temps, j’ai développé un script capable d’automatiser 
          entièrement le processus.
        </p>
      `,
            }, {
                id: 2, details: `
        <h3>2. Développement du script</h3>
        <h4>2.1 Contraintes et choix techniques</h4>
        <p>
          Le script devait fonctionner sur n’importe quel PC Windows sans installation supplémentaire. 
          PowerShell était donc le choix idéal : préinstallé, compatible avec les outils systèmes, 
          et capable de générer une petite interface graphique.
        </p>

        <h4>2.2 Interface graphique</h4>
        <p>
          L’interface demande 5 paramètres à l’utilisateur :
        </p>
        <ul>
          <li>La clé USB à formater</li>
          <li>Le dossier source contenant les fichiers</li>
          <li>Les droits à appliquer (lecture seule ou lecture/écriture)</li>
          <li>Le nom de volume (optionnel)</li>
          <li>L’icône de la clé USB (optionnel)</li>
        </ul>

        <div class="flex gap-4 my-4 justify-center">
          <img src="/portfolio/images/script.png" alt="Interface du script" class="my-4 rounded shadow " />
        </div>

        <p>
          La principale difficulté a été d’identifier automatiquement uniquement les clés USB, 
          en listant leur nom et leur lettre de lecteur.
        </p>
      `,
            }, {
                id: 3, details: `
        <h3>2.3 Processus automatisé</h3>
        <p>Une fois le bouton <strong>« Démarrer le formatage et la copie »</strong> cliqué, le script :</p>
        <ul>
          <li>Formate la clé USB en NTFS via DiskPart</li>
          <li>Copie les fichiers du dossier source</li>
          <li>Génère un fichier <code>autorun.inf</code> si un nom ou une icône est fourni</li>
          <li>Applique les attributs cachés aux fichiers système</li>
          <li>Modifie les droits NTFS selon les paramètres</li>
        </ul>

        <p>
          La clé USB est prête en quelques secondes, sans intervention supplémentaire.
        </p>
      `,
            }, {
                id: 4, details: `
        <h3>3. Conclusion</h3>
        <p>
          Le développement a pris environ une journée, mais il permet désormais de préparer des dizaines 
          de clés USB en un temps record, sans risque d’erreur humaine. Ce projet m’a permis d’approfondir 
          l’utilisation de PowerShell, des outils systèmes Windows, et de la gestion des permissions NTFS.
        </p>
      `,
            },],
        },

        related: {
            relatedProjectsHeading: 'En rapport', relatedProjects: [{
                id: 3, title: "Modernisation et virtualisation d'un serveur", img: '/portfolio/images/serveur.png'
            },]
        },
    }




    // --------------------------
    // D’AUTRES PROJETS ICI…
    // --------------------------

];

export default projects;
