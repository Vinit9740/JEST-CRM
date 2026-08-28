import { useParams, Navigate } from 'react-router-dom';
import { getRoleBySlug } from '../data/roles';
import RoleTemplate from '../components/RoleTemplate';

export default function Solutions() {
  const { role } = useParams<{ role: string }>();
  const entry = role ? getRoleBySlug(role) : undefined;

  if (!entry) {
    return <Navigate to="/404" replace />;
  }

  return <RoleTemplate role={entry} />;
}
