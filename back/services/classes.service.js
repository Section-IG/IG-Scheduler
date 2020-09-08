/*
    TODO :
        Utiliser du NoSQL (mongo?)
        Implémenter toutes les méthodes (CRUD)
 */
module.exports = () => {
    return {
        getByBloc: function (id) {
            return new Promise(function (resolve, reject) {
                switch (id) {
                    case 1:
                        resolve([{
                            text: "IG121 - Principes de programmation",
                            value: 121
                        }, {text: "IG122 - Langage de programmation : Bases", value: 122}, {
                            text: "IG123 - Description des ordinateurs",
                            value: 123
                        }, {
                            text: "IG124 - Outils mathématiques pour l'informatique",
                            value: 124
                        }, {text: "IG125 - Introduction à la gestion d'entreprise", value: 125}, {
                            text: "IG126 - Langues étrangères",
                            value: 126
                        }, {
                            text: "IG127 - Langage de programmation avancé",
                            value: 127
                        }, {
                            text: "IG128 - Organisation et exploitation des données",
                            value: 128
                        }, {text: "IG129 - Conception orientée objet", value: 129}, {
                            text: "IG130 - Introduction au Web",
                            value: 130
                        }, {text: "IG131 - Modélisation et traitement des données", value: 131}, {
                            text: "IG132 - Economie et management",
                            value: 132
                        }])
                        break;
                    case 2:
                        resolve([{
                            text: "IG221 - Analyse métier et conception de bases de données",
                            value: 221
                        }, {text: "IG222 - Programmation orientée objet", value: 222}, {
                            text: "IG223 - Technologies Web",
                            value: 223
                        }, {text: "IG224 - Systèmes d'exploitation", value: 224}, {
                            text: "IG225 - Séminaires technologiques",
                            value: 225
                        }, {text: "IG226 - Modélisation de l'événementiel", value: 226}, {
                            text: "IG227 - Aide à la gestion d'entreprise",
                            value: 227
                        }, {text: "IG228 - Communication", value: 228}, {
                            text: "IG229 - Analyse et gestion de projets",
                            value: 229
                        }, {text: "IG230 - Projet informatique intégré", value: 230}, {
                            text: "IG231 - Réseaux",
                            value: 231
                        }, {text: "IG232 - Introduction à la Data Intelligence", value: 232}, {
                            text: "IG233 - Culture générale",
                            value: 233
                        }])
                        break;
                    case 3:
                        resolve([{header: "Tronc Commun"}, {
                            text: "IG321 - Business Intelligence and Data Analytics",
                            value: 321
                        }, {text: "IG322 - Développements Web", value: 322}, {
                            text: "IG323 - Conception de bases de données avancées",
                            value: 323
                        }, {text: "IG324 - Aide à la décision managériale", value: 324}, {
                            text: "IG325 - Langues étrangères",
                            value: 325
                        }, {header: "Option Mobile et Web avancé"}, {
                            text: "IG327 - Programmation et nouvelles technologies",
                            value: 327
                        }, {
                            text: "IG328 - Développement avancé d'application Web",
                            value: 328
                        }, {header: "Option Data Intelligence"}, {
                            text: "IG330 - Intelligence artificielle : Machine Learning et Data Mining",
                            value: 330
                        }, {text: "IG331 - Big Data", value: 331}, {
                            text: "IG332 - Séminaires Data Science",
                            value: 332
                        }, {header: "Stage et TFE"}, {
                            text: "IG334 - Activité d'intégration professionnelle et travail de fin d'études",
                            value: 334
                        }])
                        break;
                    default:
                        reject("404");
                }
            });
        }
    }
};
