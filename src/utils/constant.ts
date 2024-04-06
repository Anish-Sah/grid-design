export const COMPANY_INFO = {
  name: 'grid design consultancy',
  fullName: 'Grid Design Consultancy and Engineering Service Pvt. Ltd.',
  address: 'Katahariya-Rautahat, Nepal',
  contact: ['9849374440', '9812097376'],
  email: 'griddesignconsultancy@gmail.com',
  branchOffices: [
    {
      name: 'Kathmandu Branch',
      contact: ['9849374440'],
      address: 'Kathmandu, Nepal',
    },
  ],
}

export enum ProjectCategory {
  Construction = 'construction',
  Consultancy = 'consultancy',
  EngineeringServices = 'engineering services',
}

export enum ProjectStatus {
  Acquired = 'ACQUIRED',
  Completed = 'COMPLETED',
  Ongoing = 'ONGOING',
}

export const portfolioThemeColors = ['#f0d5f2', '#c8edfa', '#a7fcd6', '#fad3ac']
export const projectStatusColors = {
  [ProjectStatus.Acquired]: '#ffc166',
  [ProjectStatus.Completed]: '#90ee90',
  [ProjectStatus.Ongoing]: '#85c6dc',
}
