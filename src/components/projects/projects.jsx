// React Import
import React from 'react';
// Image Slider Component
import ImageSlider from '../slider/slider';
// Workspace Images
import Workspace_View_N1 from '../../assets/Workspace/Workspace_View_N°1.jpg'
import Workspace_View_N2 from '../../assets/Workspace/Workspace_View_N°2.jpg'
import Workspace_View_N3 from '../../assets/Workspace/Workspace_View_N°3.jpg'
import Workspace_Interior_View from '../../assets/Workspace/Workspace_Interior_View.jpg'
import Stairs_View from '../../assets/Workspace/Stairs_View.jpg'
import Workspace_Gym_View from '../../assets/Workspace/Workspace_Gym_View.png'
import Workspace_Axonometric_View from '../../assets/Workspace/Workspace_Axonometric_View.jpg'
import Workspace_Front_Elevation from '../../assets/Workspace/Workspace_Front_Elevation.jpg'
import Workspace_Master_Plan from '../../assets/Workspace/Workspace_Master_Plan.jpg'
import Workspace_Ground_Floor from '../../assets/Workspace/Workspace_Ground_Floor.jpg'
import Workspace_First_Floor from '../../assets/Workspace/Workspace_First_Floor.jpg'
// Ribat School Images
import Ribat_Al_Fath_High_School_Main_View from '../../assets/Ribat_Al_Fath_High_School/Ribat_Al_Fath_High_School_Main_View.jpg'
import Ribat_Al_Fath_High_School_Up_Close_Elevation_View from '../../assets/Ribat_Al_Fath_High_School/Ribat_Al_Fath_High_School_Up_Close_Elevation_View.jpg'
import High_School_Patio from '../../assets/Ribat_Al_Fath_High_School/High_School_Patio.jpg'
import Ribat_Al_Fath_High_School_Global_View from '../../assets/Ribat_Al_Fath_High_School/Ribat_Al_Fath_High_School_Global_View.jpg'
import High_School_Main_Elevation from '../../assets/Ribat_Al_Fath_High_School/High_School_Main_Elevation.jpg'
import High_School_Section from '../../assets/Ribat_Al_Fath_High_School/High_School_Section.jpg'
import High_School_Master_Plan from '../../assets/Ribat_Al_Fath_High_School/High_School_Master_Plan.jpg'
import Elevation_Details from '../../assets/Ribat_Al_Fath_High_School/Elevation_Details.jpg'
import High_School_Ground_Floor from '../../assets/Ribat_Al_Fath_High_School/High_School_Ground_Floor.jpg'
// Nautic Hotel Images
import Nautic_Hotel_Main_View from '../../assets/Nautic_Hotel/Nautic_Hotel_Main_View.jpg'
import Nautic_Hotel_By_Night from '../../assets/Nautic_Hotel/Nautic_Hotel_By_Night.jpg'
import Hotel_Room_Perspective_1 from '../../assets/Nautic_Hotel/Hotel_Room_Perspective_1.jpg'
import Hotel_Room_Perspective_2 from '../../assets/Nautic_Hotel/Hotel_Room_Perspective_2.jpg'
import Reception_View_1 from '../../assets/Nautic_Hotel/Reception_View_1.jpg'
import Reception_View_2 from '../../assets/Nautic_Hotel/Reception_View_2.jpg'
import Nautic_Hotel_Concept_Diagram from '../../assets/Nautic_Hotel/Nautic_Hotel_Concept_Diagram.jpeg'
import Ground_Floor from '../../assets/Nautic_Hotel/Ground_Floor.jpg'
import Common_Floor_Plan from '../../assets/Nautic_Hotel/Common_Floor_Plan.jpg'
// Porfolio Images
import Port1 from '../../assets/Profile/Port1.png'
import Port2 from '../../assets/Profile/Port2.png'
// CSS Imports
import './projects.css'


const Projects = ({ language, refArray }) => {

    // Project Names Content
    const projectNames = {
        EN: {
            project1: "PROJECT N°1 : WORKSPACE",
            project2: "PROJECT N°2 : RIBAT AL FATH HIGH SCHOOL",
            project3: "PROJECT N°3 : NAUTIC HOTEL"
        },
        FR: {
            project1: "PROJET N°1 : PLATEAUX BUREAUX",
            project2: "PROJET N°2 : LYCÉE RIBAT AL FATH",
            project3: "PROJET N°3 : HÔTEL NAUTIQUE"
        },
        SPA: {
            project1: "PROYECTO N°1 : OFICINAS",
            project2: "PROYECTO N°2: INSTITUTO RIBAT AL FATH",
            project3: "PROYECTO N°3: HOTEL NAÚTICO"
        }
    }

    // Project Description Content
    const description = {
        workspace: {
            EN: "The Workspace project, located in the Yacoub Al Mansour neighborhood in Rabat, is designed as a dedicated workspace for upcoming businesses. It consists of two separate building blocks, one of medium standing with moderate floor areas, and the other of high standing providing more spacious environments. The buildings, with a maximum height of R+5, feature an innovative concept of exterior staircases, promoting smooth circulation within the project while ensuring effective evacuation routes when needed. The project is well-equipped with amenities, including gardens, restaurants, underground parking, and a gym on the top floor.",
            FR: "Le projet de plateaux bureaux, situé dans le quartier Yacoub Al Mansour à Rabat, se présente comme un espace dédié à la bureautique, idéal pour les futures entreprises. Il se compose de deux blocs de bâtiments distincts, l'un de standing moyen avec des surfaces modérées, et l'autre de haut standing offrant des espaces plus généreux. Les bâtiments, d'une hauteur maximale de R+5, se distinguent par leur concept novateur de cages d'escaliers extérieures, facilitant la circulation au sein du projet tout en assurant une évacuation efficace en cas de besoin. Le projet est doté d'équipements de qualité, comprenant des espaces verts, des restaurants, un parking souterrain, et une salle de sport au dernier étage.",
            SPA: "El proyecto de oficinas en el barrio Yacoub Al Mansour en Rabat se presenta como un espacio dedicado a la oficina, ideal para las futuras empresas. Está compuesto por dos bloques de edificios distintos, uno de categoría media con superficies moderadas, y otro de alta categoría que ofrece espacios más generosos. Los edificios, con una altura máxima de R+5, se destacan por su innovador concepto de escaleras exteriores, facilitando la circulación dentro del proyecto y asegurando una evacuación eficiente en caso de necesidad. El proyecto cuenta con instalaciones de calidad, incluyendo áreas verdes, restaurantes, un estacionamiento subterráneo y un gimnasio en el último piso."
        },
        ribat: {
            EN: "Situated in the historic city of Rabat, Ribat Al Fath High School taking its name from the former designation of the city, founded by the Almohads in the 12th century, stands as a distinctive educational institution. Inspired by the Al Quaraouiyine University in Fes, the school boasts Andalusian architecture, a defining element of this educational endeavor. Specialized in the arts, the high school is well-equipped with an auditorium, sports facilities, a mosque, and a public library. The school's courtyard, serving as a gathering space for students, creates a friendly atmosphere conducive to both educational and cultural development.",
            FR: "Situé dans la ville historique de Rabat, le lycée Ribat Al Fath tirant son nom de l'ancienne appellation de la cité, fondée par les Almohades au 12ème siècle, est une institution éducative singulière. S'inspirant de l'Université Al Quaraouiyine de Fès, le lycée arbore une architecture andalouse qui constitue l'élément majeur de ce projet éducatif. Spécialisé dans les arts, le lycée est soigneusement équipé avec un auditorium, des espaces dédiés aux sports, une mosquée et une médiathèque publique. Le patio de l'école, servant de cour aux élèves, crée une atmosphère conviviale propice à l'épanouissement éducatif et culturel.",
            SPA: "Ubicado en la ciudad histórica de Rabat, el Instituto Ribat Al Fath, que toma su nombre de la antigua denominación de la ciudad fundada por los almohades en el siglo XII, es una institución educativa única. Inspirado en la Universidad Al Quaraouiyine de Fes, el Instituto presenta una arquitectura andaluza que constituye el elemento principal de este proyecto educativo. Especializado en las artes, el Instituto está cuidadosamente equipado con un auditorio, espacios dedicados a deportes, una mezquita y una mediateca pública. El patio de la escuela, utilizado como patio para los estudiantes, crea un ambiente acogedor propicio para el desarrollo educativo y cultural."
        },
        nautic: {
            EN: "Located in the heart of the Hassan neighborhood in Rabat, the Nautical Hotel proudly stands in front of the Bouregreg Valley, providing a strategic location for water sports enthusiasts, such as kayaking and surfing. Designed with the goal of becoming an iconic symbol for the city, the Nautical Hotel encourages tourists to explore Rabat and enjoy the activities offered by the city. The hotel offers specialized training for water sports enthusiasts while warmly welcoming athletes seeking comfort. <br /> The hotel's advantageous topography makes it a strategic location, offering breathtaking views of the Bouregreg Valley. Featuring four semi-Olympic pools, modern architecture, and suspended pools, the Nautical Hotel seamlessly blends into the urban fabric of the area. Its medium standing perfectly reflects the balance between comfort and elegance, providing guests with a memorable experience.",
            FR: "Situé au cœur du quartier Hassan à Rabat, l'Hotel Nautique se dresse fièrement devant la vallée de Bouregreg, offrant un emplacement stratégique pour les amateurs de sports aquatiques, tels que le kayak et le surf. Conçu dans le but de devenir un emblème iconique pour la ville, l'Hotel Nautique encourage les touristes à explorer Rabat et à profiter des activités offertes par la ville. L'hôtel propose des entraînements spécialisés pour les passionnés de sports nautiques tout en accueillant chaleureusement les sportifs en quête de confort. <br /> L'avantage topographique de l'hôtel en fait un lieu stratégique, offrant une vue imprenable sur la vallée de Bouregreg. Doté de quatre piscines semi-olympiques, d'une architecture moderne et de piscines suspendues, l'Hotel Nautique se fond harmonieusement dans le tissu urbain de la région. Son standing moyen reflète parfaitement l'équilibre entre le confort et l'élégance, offrant ainsi aux clients une expérience mémorable.",
            SPA: "Ubicado en el centro del barrio Hassan en Rabat, el Hotel Náutico se alza con orgullo frente al valle de Bouregreg, ofreciendo una ubicación estratégica para los amantes de los deportes acuáticos, como el kayak y el surf. Diseñado con el objetivo de convertirse en un emblema icónico para la ciudad, el Hotel Náutico anima a los turistas a explorar Rabat y disfrutar de las actividades que ofrece la ciudad. El hotel ofrece entrenamientos especializados para los apasionados de los deportes acuáticos, al mismo tiempo que da la bienvenida a los deportistas en busca de comodidad. <br /> La ventaja topográfica del hotel lo convierte en un lugar estratégico, brindando una vista impresionante del valle de Bouregreg. Con cuatro piscinas semiolímpicas, una arquitectura moderna y piscinas suspendidas, el Hotel Náutico se integra armoniosamente en el tejido urbano de la región. Su categoría media refleja perfectamente el equilibrio entre comodidad y elegancia, ofreciendo a los clientes una experiencia memorable."
        },

    }

    // Workspace Image Array
    const workspace = [
        { EN: "Workspace View N°1", FR: "Plateaux bureaux : Vue N°1", SPA: "Oficinas: Vista N°1", image: Workspace_View_N1 },
        { EN: "Workspace View N°2", FR: "Plateaux bureaux : Vue N°2", SPA: "Oficinas: Vista N°2", image: Workspace_View_N2 },
        { EN: "Workspace View N°3", FR: "Plateaux bureaux : Vue N°3", SPA: "Oficinas: Vista N°3", image: Workspace_View_N3 },
        { EN: "Workspace Interior View", FR: "Plateaux bureaux : Vue intérieure", SPA: "Oficinas: Vista interior", image: Workspace_Interior_View },
        { EN: "Stairs View", FR: "Vue des escaliers", SPA: "Vista de las escaleras", image: Stairs_View },
        { EN: "Workspace Gym View", FR: "Plateaux bureaux : Vue de la salle de gym", SPA: "Oficinas: Vista del gimnasio", image: Workspace_Gym_View },
        { EN: "Workspace Axonometric View", FR: "Plateaux bureaux : Vue axonométrique", SPA: "Oficinas: Vista axonométrica", image: Workspace_Axonometric_View },
        { EN: "Workspace Front Elevation", FR: "Plateaux bureaux : Élévation avant", SPA: "Oficinas: Elevación frontal", image: Workspace_Front_Elevation },
        { EN: "Workspace Ground Floor", FR: "Plateaux bureaux : Rez-de-chaussée", SPA: "Oficinas: Planta baja", image: Workspace_Ground_Floor },
        { EN: "Workspace First Floor", FR: "Plateaux bureaux : Premier étage", SPA: "Oficinas: Primer piso", image: Workspace_First_Floor },
        { EN: "Workspace Master Plan", FR: "Plateaux bureaux : Master plan", SPA: "Oficinas: Master plan", image: Workspace_Master_Plan }
    ]

    // Ribat High School Image Array
    const ribat = [
        { EN: "Ribat Al Fath High School Main View", FR: "École secondaire Ribat Al Fath : Vue principale", SPA: "Escuela Secundaria Ribat Al Fath: Vista principal", image: Ribat_Al_Fath_High_School_Main_View },
        { EN: "Ribat Al Fath High School Up Close Elevation View", FR: "École secondaire Ribat Al Fath : Vue en élévation de près", SPA: "Escuela Secundaria Ribat Al Fath: Vista en elevación de cerca", image: Ribat_Al_Fath_High_School_Up_Close_Elevation_View },
        { EN: "High School Patio", FR: "Patio de l'école secondaire", SPA: "Patio de la Escuela Secundaria", image: High_School_Patio },
        { EN: "Ribat Al Fath High School Global View", FR: "École secondaire Ribat Al Fath : Vue globale", SPA: "Escuela Secundaria Ribat Al Fath: Vista global", image: Ribat_Al_Fath_High_School_Global_View },
        { EN: "High School Main Elevation", FR: "École secondaire : Élévation principale", SPA: "Escuela Secundaria: Elevación principal", image: High_School_Main_Elevation },
        { EN: "High School Section", FR: " École secondaire : Section", SPA: "Escuela Secundaria: Sección", image: High_School_Section },
        { EN: "High School Master Plan", FR: "École secondaire : Plan directeur", SPA: "Escuela Secundaria: Plano maestro", image: High_School_Master_Plan },
        { EN: "Elevation Details", FR: "Détails d'élévation", SPA: "Detalles de elevación", image: Elevation_Details },
        { EN: "High School Ground Floor", FR: "École secondaire : Rez-de-chaussée", SPA: "Escuela Secundaria: Planta baja", image: High_School_Ground_Floor }
    ]

    // Nautic Hotel Image Array
    const nautic = [
        { EN: "Nautic Hotel Main View", FR: "Hôtel Nautique : Vue principale", SPA: "Hotel Nautico : Vista principal", image: Nautic_Hotel_Main_View },
        { EN: "Nautic Hotel By Night", FR: "Hôtel Nautique vue de nuit", SPA: "Hotel nautico : Vista nocturna", image: Nautic_Hotel_By_Night },
        { EN: "Reception View 1", FR: "Réception : Vue 1", SPA: "Recepción : Vista 1", image: Reception_View_1 },
        { EN: "Reception View 2", FR: "Réception : Vue 2", SPA: "Recepción : Vista 2", image: Reception_View_2 },
        { EN: "Hotel Room Perspective 1", FR: "Chambre d'hôtel : Perspective 1", SPA: "Habitación del hotel : Perspectiva 1", image: Hotel_Room_Perspective_1 },
        { EN: "Hotel Room Perspective 2", FR: "Chambre d'hôtel : Perspective 2", SPA: "Habitación del hotel : Perspectiva 2", image: Hotel_Room_Perspective_2 },
        { EN: "Ground Floor", FR: "Rez-de-chaussée", SPA: "Planta baja", image: Ground_Floor },
        { EN: "Common Floor Plan", FR: "Plan d'étage commun", SPA: "Plano de planta común", image: Common_Floor_Plan },
        { EN: "Nautic Hotel Concept Diagram", FR: "Hôtel Nautique : Schéma conceptuel", SPA: "Diagrama conceptual del Hotel Náutico", image: Nautic_Hotel_Concept_Diagram }
    ]

    return (
        <div className='Projects'>
            <div className='workspace' ref={refArray[0]}>
                <div className='slider'>
                    {language === 'SPA' ? ( <img src={Port2} className='portLogo' alt="Portfolio Logo" preload />) : ( <img src={Port1} className='portLogo' alt="Portfolio Logo" preload />)}
                    <p className='project-title'>{projectNames[language].project1}</p>
                    <ImageSlider images={workspace} description={description.workspace} language={language} sliderKey="project1" id="proj1" />
                </div>
            </div>
            <div className='ribat-school' ref={refArray[1]}>
                <div className='slider'>
                {language === 'SPA' ? ( <img src={Port2} className='portLogo' alt="Portfolio Logo" preload />) : ( <img src={Port1} className='portLogo' alt="Portfolio Logo" preload />)}
                    <p className='project-title'>{projectNames[language].project2}</p>
                    <ImageSlider images={ribat} description={description.ribat} language={language} sliderKey="project2" id="proj2" />
                </div>
            </div>
            <div className='nautic-hotel' ref={refArray[2]}>
                <div className='slider'>
                {language === 'SPA' ? ( <img src={Port2} className='portLogo' alt="Portfolio Logo" preload />) : ( <img src={Port1} className='portLogo' alt="Portfolio Logo" preload />)}
                    <p className='project-title'>{projectNames[language].project3}</p>
                    <ImageSlider images={nautic} description={description.nautic} language={language} sliderKey="project3" id="proj3" />
                </div>
            </div>
        </div>
    )
}

export default Projects