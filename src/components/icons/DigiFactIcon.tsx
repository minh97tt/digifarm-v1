import digifactIcon from '../../assets/DigiFactIcon.svg'

export const DigiFactIcon = ({ className }: { className?: string }) => {
  return <img className={className} src={digifactIcon} style={{ objectFit: 'contain'}} />
}