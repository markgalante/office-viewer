import * as React from 'react';
import './styles.css';
import BasicCompanyInfo from './components/BasicCompanyInfo'
import type {ReturnType} from '../../hooks';

type CompanyCardType = {
  officeInfo: ReturnType
}

function CompanyCard({
  officeInfo,
}: CompanyCardType){
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)
  const expandOrCompressCard = () => {
    setIsExpanded(state => !state);
  };
  const backgroundColorStyles: React.CSSProperties = {
    background: officeInfo.officeColor,
  }
  const cardHeightClass = isExpanded ? 'card-height-expanded' : 'card-height';
  return (
    <div
      className={`main-card-container ${cardHeightClass} radius-8`}
      style={backgroundColorStyles}
    >
      <div
        className={`card-color-container ${cardHeightClass} radius-8`}
        style={backgroundColorStyles}
      ></div>
    <BasicCompanyInfo
      office={officeInfo}
      onExpandCompressClick={expandOrCompressCard}
      isExpanded={isExpanded}
      heightClassName={cardHeightClass}
    />
    </div>
  )
};

export default CompanyCard;
