import { useRouter, RouteRecordName, RouteParams, LocationQuery } from "vue-router";

interface HandlePageNavigatonParams {
  name: RouteRecordName;
  params?: RouteParams;
  queryParams?: LocationQuery;
}

export default function useNavigate() {
  const router = useRouter();

  const handlePageNavigation = ({ name, params, queryParams }: HandlePageNavigatonParams): void => {
    router.push({ name, params, query: queryParams });
  };

  return {
    handlePageNavigation,
  };
}
