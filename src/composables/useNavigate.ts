import { useRouter, useRoute, RouteRecordName, RouteParams, LocationQuery, LocationQueryValue } from "vue-router";

interface HandlePageNavigatonParams {
  name: RouteRecordName;
  params?: RouteParams;
  queryParams?: LocationQuery;
}

export default function useNavigate() {
  const route = useRoute();
  const router = useRouter();

  const handlePageNavigation = ({ name, params, queryParams }: HandlePageNavigatonParams): void => {
    router.push({ name, params, query: queryParams });
  };

  const handleRouterBack = () => {
    console.log(router);

    router.back();
  };

  const getQueryParam = (param: string): LocationQueryValue | LocationQueryValue[] => {
    return route.query[param];
  };

  return {
    getQueryParam,
    handleRouterBack,
    handlePageNavigation,
  };
}
