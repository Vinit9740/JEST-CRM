import { useParams, Navigate } from 'react-router-dom';
import { getModuleBySlug } from '../data/modules';
import ModuleTemplate from '../components/ModuleTemplate';

export default function Modules() {
  const { module } = useParams<{ module: string }>();
  const entry = module ? getModuleBySlug(module) : undefined;

  if (!entry) {
    return <Navigate to="/404" replace />;
  }

  return <ModuleTemplate module={entry} />;
}
