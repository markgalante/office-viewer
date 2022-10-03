import * as React from 'react';
import './styles.css';
import BasicCompanyInfo from './components/BasicCompanyInfo'
import type {OfficeType} from '../../../AddEditOffice/types';

type CompanyCardType = {
  officeInfo: OfficeType
}

function CompanyCard({
  officeInfo,
}: CompanyCardType){
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false)
  const expandOrCompressCard = () => {
    setIsExpanded(state => !state);
  };
  const cardHeightClass = isExpanded ? 'card-height-expanded' : 'card-height';
  return (
    <div
      className={`main-card-container ${cardHeightClass} radius-8`}
      style={{
        background: officeInfo.officeColor,
      }}
    >
      <div
        className={`card-color-container ${cardHeightClass} radius-8`}
        style={{
          background: officeInfo.officeColor,
        }}
      ></div>
    <BasicCompanyInfo
      office={officeInfo}
      onExpandCompressClick={expandOrCompressCard}
      companyName={officeInfo.name}
      isExpanded={isExpanded}
      heightClassName={cardHeightClass}
    />
    </div>
  )
};

export default CompanyCard;
