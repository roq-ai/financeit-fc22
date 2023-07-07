const mapping: Record<string, string> = {
  'finance-data': 'finance_data',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
