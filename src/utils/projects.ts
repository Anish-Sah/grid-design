import { ProjectCategory, ProjectStatus } from './constant'
import greenHeaven from '../assets/projects/green-haven-apartments.png'
import metroplex from '../assets/projects/metroplex-office-tower.png'
import urbanRenewal from '../assets/projects/urban.png'
import skyHighMall from '../assets/projects/structure-analysis.png'
import communityCenter from '../assets/projects/architectural-design.png'
import highwayExpansion from '../assets/projects/project-management.png'
import heritageBuilding from '../assets/projects/seismic-retrofitting.png'
import industrialComplex from '../assets/projects/mep-design.png'
import damConstruction from '../assets/projects/geotechnical-investigation.png'
import highwayOverpass from '../assets/projects/highway-overpass.png'
import commercialBuilding from '../assets/projects/commercial-building.png'
import waterTreatment from '../assets/projects/water-treatment.png'

interface IProject {
  name: string
  desc: string
  logo: string
  footerText: ProjectStatus | ''
  category: ProjectCategory
}

export const PROJECTS: IProject[] = [
  {
    name: 'Green Haven Apartments',
    desc: 'Design and construction of eco-friendly residential apartments with sustainable features.',
    logo: greenHeaven,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Metroplex Office Tower',
    desc: 'Engineering and construction of a modern office tower equipped with state-of-the-art facilities.',
    logo: metroplex,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Urban Renewal Initiative',
    desc: 'Renovation and revitalization of urban areas, including infrastructure upgrades and beautification projects.',
    logo: urbanRenewal,
    footerText: ProjectStatus.Ongoing,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Structural Analysis for Sky High Mall',
    desc: 'Providing structural engineering consultancy for the construction of a multi-storey shopping complex.',
    logo: skyHighMall,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Consultancy,
  },
  {
    name: 'Architectural Design for Community Center',
    desc: 'Designing an innovative community center with a focus on functionality and aesthetic appeal.',
    logo: communityCenter,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.Consultancy,
  },
  {
    name: 'Project Management for Highway Expansion',
    desc: 'Overseeing the project management aspects of a major highway expansion project, ensuring timely completion and quality control.',
    logo: highwayExpansion,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Consultancy,
  },
  {
    name: 'Seismic Retrofitting of Heritage Building',
    desc: 'Implementing seismic retrofitting techniques to strengthen a heritage building against earthquake hazards.',
    logo: heritageBuilding,
    footerText: ProjectStatus.Ongoing,
    category: ProjectCategory.EngineeringServices,
  },
  {
    name: 'MEP Design for Industrial Complex',
    desc: 'Designing mechanical, electrical, and plumbing systems for an industrial complex to optimize efficiency and functionality.',
    logo: industrialComplex,
    footerText: ProjectStatus.Ongoing,
    category: ProjectCategory.EngineeringServices,
  },
  {
    name: 'Geotechnical Investigation for Dam Construction',
    desc: 'Conducting geotechnical investigations to assess soil conditions and suitability for the construction of a hydroelectric dam.',
    logo: damConstruction,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.EngineeringServices,
  },
  {
    name: 'Highway Overpass Construction',
    desc: 'Design and construction of a highway overpass to improve traffic flow and safety.',
    logo: highwayOverpass,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Commercial Building Renovation',
    desc: 'Renovation and modernization of a commercial building to enhance functionality and aesthetics.',
    logo: commercialBuilding,
    footerText: ProjectStatus.Completed,
    category: ProjectCategory.Construction,
  },
  {
    name: 'Water Treatment Plant Engineering',
    desc: 'Engineering design and construction of a water treatment plant to provide clean and safe drinking water.',
    logo: waterTreatment,
    footerText: ProjectStatus.Acquired,
    category: ProjectCategory.EngineeringServices,
  },
]
