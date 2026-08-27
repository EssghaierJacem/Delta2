import type { Metadata } from 'next'

import EnergieRenewable from '@/components/Energie/EnergieRenewable'

export const metadata: Metadata = {
  title: 'Énergies renouvelables | Delta 2S',
  description:
    'Delta 2S accompagne les porteurs de projets dans la réalisation et la maintenance de solutions photovoltaïques : On-Grid, Off-Grid et pompage solaire.',
}

const EnergiePage = () => {
  return <EnergieRenewable />
}

export default EnergiePage