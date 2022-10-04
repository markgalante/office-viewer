import {
  useParams,
  useNavigate,
  type Params,
} from 'react-router-dom';

type UseRoutingResult = {
  navigateHome: () => void;
  navigateToAddOfficePage: () => void;
  goBack: () => void;
  navigateOfficeView: (uid: string) => void;
  params: Readonly<Params<string>>;
}

export function useRouting(): UseRoutingResult{
  const navigate = useNavigate();
  const params = useParams();

  const navigateHome = () => navigate('/');
  const navigateToAddOfficePage = () => navigate('/office/add')
  const goBack = () => navigate(-1)
  const navigateOfficeView = (uid: string) => navigate('/office/' + uid);

  return {
    navigateHome,
    navigateToAddOfficePage,
    goBack,
    navigateOfficeView,
    params,
  }
}